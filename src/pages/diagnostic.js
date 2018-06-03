import React from "react"
import Link from 'gatsby-link'
import 'semantic-ui-css/semantic.min.css'
import ps from "zxcvbn"
import  { Grid, Header, Segment, Item, Button, Container, List } from 'semantic-ui-react'
import Login from '../components/login'

class Diagnostic extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.state.pass = new URLSearchParams(this.props.location.search).get('pass') || ''
    this.state.info = ps(this.state.pass)
  }
  componentDidMount(){
    this.passwordInput.focus()
  }
  render(){
    console.log(this.state.info)
    const { info } = this.state
    return (
      <Grid padded columns={2} style={{height: '100%', backgroundColor: '#DADADA'}}>
        <Grid.Row columns="equal" stretched>
          <Grid.Column verticalAlign='middle' width="5">
            <Header color='teal'>Try experimenting</Header>
              <Login 
               value={ this.state.pass } 
               onChange={ e => this.setState({ pass: e.target.value, info: ps(e.target.value)}) }
               reference={el => { this.passwordInput = el }}>
                <Grid columns={2}>
                  <Grid.Column width='7'>
                    <Button onClick={e => navigateTo(`/diagnostic?pass=${this.state.pass }`)}>
                      Next Section
                    </Button>
                  </Grid.Column>
                  <Grid.Column floated='left' textAlign='left' width='9'>
                    <List bulleted>
                      {this.state.info.feedback.suggestions.map( (s, i) => <List.Item key={i}>{s}</List.Item>) }
                    </List>
                  </Grid.Column> 
                </Grid>
              </Login>
          </Grid.Column>
          <Grid.Column>
            <Segment color='teal'>
              <Header>To crack your password, it would take</Header>
              <Item.Group items={ [
                  {
                    header: `${info.crack_times_display.offline_fast_hashing_1e10_per_second}`,
                    description: 'On a website that was compromised'
                  // meta: "at 10000000000 guesses a second"
                  },
                  {
                    header: `${info.crack_times_display.online_no_throttling_10_per_second}`,
                    description: 'On a secure website'
                    //meta: 'at 10 guesses a second'
                  },
                  {
                    header: `${info.crack_times_display.online_throttling_100_per_hour}`,
                    description: 'On a secure website that limits the number of password attempts'
                    //meta: 'at 100 guesses an hour'
                  }
                ]
              }/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
export default Diagnostic