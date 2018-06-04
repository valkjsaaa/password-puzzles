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
      stale: true
    }
  }
  passMatches () {
    return md5(this.state.pass) === this.state.hash
  }
  render () {
    const { user, stale, hash, pass } = this.state
    return (
      <Centered>
        <Container>
          <Container text>
          Great work creating a secure password! Now login to sketchy.network
          </Container>
          {
            !this.passMatches() && !stale
              ? (
                <Message info>
                  <Message.Header>That's not the password you created</Message.Header>
                  <Link to={`/waLkthrough/sketchysignup?user=${user}&repeat`}>Go Back and create a new one</Link>
                </Message>
              )
              : ''
          }
          <Header>Login to sketch.network</Header>
          <Login onSubmit={e => {
            if (this.passMatches()) navigateTo(`/walkthrough/sketchysignup?user=${user}&hash=${hash}`)
            else this.setState({ stale: false })
          }}>
            <Login.Username value={user} disabled />
            <Login.Password type='text' value={pass} onChange={e => { this.setState({ pass: e.target.value, stale: true }) }} />
            <Form.Button>Login</Form.Button>
          </Login>
        </Container>
      </Centered>
    )
  }
}
