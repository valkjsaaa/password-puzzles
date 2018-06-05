import React from 'react'
import { Form, Container, Header, Message } from 'semantic-ui-react'
import { Login } from '../../components/login.js'
import Centered from '../../components/centered.js'
import md5 from 'md5'
import Link, { navigateTo } from 'gatsby-link'
export default class extends React.Component {
  constructor (props) {
    super(props)
    const params = new URLSearchParams(window.location.search)
    this.state = {
      user: params.get('user') || '',
      hash: params.get('hash') || '',
      pass: params.get('pass') || '',
      stale: true,
      correct: false,
      wrong: false
    }
  }
  passMatches () {
    if (md5(this.state.pass) === this.state.hash) {
      this.setState({correct: true, wrong: false});
      return true
    } else {
      this.setState({correct: false, wrong: true});
      return false
    }
  }
  render () {
    const { user, stale, hash, pass } = this.state;
    return (
      <Centered>
        <Container>
          <Container text>
          Great work creating a secure password! Now login to sketchy.network
          </Container>
          <Header>Login to sketch.network</Header>
          <Login onSubmit={this.passMatches.bind(this)}>
            <Login.Username value={user} disabled />
            <Login.Password type='text' value={pass} onChange={e => { this.setState({ pass: e.target.value, stale: true }) }} />
            <Form.Button>Login</Form.Button>
          </Login>
          {
            this.state.correct
              ? (
                <Message info>
                  <Message.Header>
                    Great job on creating and remembering 2 secure passwords!
                  </Message.Header>
                  Let's learn a easier way to use different password on different websites!
                  <Link to={`/recommendation/start/`}>Next</Link>
                </Message>
              )
              : ''
          }
          {
            this.state.wrong
              ? (
                <Message negative>
                  <Message.Header>
                    Incorrect password.
                  </Message.Header>
                  Remember different passwords for each website can be hard.
                  Let's learn a easier way to use different password on different websites!
                  <Link to={`/recommendation/start/`}>Next</Link>
                </Message>
              )
              : ''
          }
        </Container>
      </Centered>
    )
  }
}
