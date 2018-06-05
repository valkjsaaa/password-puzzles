import React from 'react'
import { navigateTo } from 'gatsby-link'
import 'semantic-ui-css/semantic.min.css'
import Login from '../../components/login.js'
import Centered from '../../components/centered.js'
import { Grid, Header, Form, Container } from 'semantic-ui-react'

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = { pass: '' }
  }
  render () {
    return (
      <Centered width={5}>
        <Container>
          <Header color='teal'>Enter a password that you can remember to begin</Header>
          <Login onSubmit={e => { navigateTo(`/diagnostic/diagnostic?pass=${this.state.pass}`) }}>
            <Login.Password onChange={e => { this.setState({ pass: e.target.value }) }} />
            <Grid columns={2}>
              <Grid.Column width={4}>
                <Form.Button onClick={e => navigateTo(`/diagnostic/diagnostic?pass=${this.state.pass}`)}>
                Login
                </Form.Button>
              </Grid.Column>
              {
                this.state.pass.length
                  ? <Grid.Column floated='left' textAlign='right' width='12'>
                    * We will start analyse your password when you click "Start"
                  </Grid.Column>
                  : null
              }
            </Grid>
          </Login>
        </Container>
      </Centered>

    )
  }
}
