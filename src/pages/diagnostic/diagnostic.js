import React from 'react'
import { navigateTo } from 'gatsby-link'
import 'semantic-ui-css/semantic.min.css'
import ps from 'zxcvbn'
import { Grid, Header, Segment, Item, Button, List } from 'semantic-ui-react'
import Login from '../../components/login.js'
import Split from '../../components/split.js'
import geturlparameter from '../../utils/geturlparamater'

let score_meaning = [
  "too guessable",
  "very guessable",
  "somewhat guessable",
  "safely unguessable",
  "very unguessable"
];

class Diagnostic extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.pass = geturlparameter('pass', this.props.location.search) || ''
  }
  componentDidMount () {
    this.passwordInput.focus()
  }
  render () {
    const { pass } = this.state
    const info = ps(this.state.pass)
    return (
      <Split left={{ verticalAlign: 'middle', width: 5 }}>
        <Segment>
          <Header color='teal'>Try experimenting</Header>
          <Login onSubmit={e => { navigateTo(`/diagnostic/diagnostic?pass=${this.state.pass}`) }}>
            <Login.Password
              reference={el => { this.passwordInput = el }}
              onChange={e => { this.setState({ pass: e.target.value }) }}
              value={pass}
              type='text' />
            <Grid columns={2}>
              <Grid.Column width={4}>
                <Button onClick={e => navigateTo(`/generate/start/`)}>
                  Next
                </Button>
              </Grid.Column>
              {
                this.state.pass.length
                  ? <Grid.Column floated='left' textAlign='left' width='12'>
                    <List bulleted>
                      {
                        info.score >= 3 ?
                          (<Item> This password is pretty good! It's very hard to get hacked.</Item>):
                          (<Item> This password is not secure enough. Try to get a score of 3 out of 4.</Item>)
                      }
                      <Item>
                        Score: {info.score} / 4 {score_meaning[info.score]}
                      </Item>
                      {
                      info.feedback.suggestions.map((s, i) =>
                        <Item key={i}>Tips: {s}</Item>
                      )
                    }
                    </List>
                  </Grid.Column>
                  : null
              }
            </Grid>
          </Login>
        </Segment>
        <Segment>
          <Header>To crack your password, it would take</Header>
          <Item.Group items={[
            {
              header: 'On a secure website that limits the number of password attempts:',
              description: `${info.crack_times_display.online_throttling_100_per_hour}`
              // meta: 'at 100 guesses an hour'
            },
            {
              header: 'On a secure website:',
              description: `${info.crack_times_display.online_no_throttling_10_per_second}`
              // meta: 'at 10 guesses a second'
            },

            {
              header: 'On a website that was compromised:',
              description: `${info.crack_times_display.offline_fast_hashing_1e10_per_second}`
              // meta: "at 10000000000 guesses a second"
            },
          ]} />
        </Segment>
      </Split>
    )
  }
}
export default Diagnostic
