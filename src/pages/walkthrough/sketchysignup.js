import React from 'react'
import { Form, Container, Header, Message } from 'semantic-ui-react'
import { Login } from '../../components/login.js'
import ps from 'zxcvbn'
import Centered from '../../components/centered.js'
import randomWord from '../../utils/random-word'
import md5 from 'md5'
import Link, { navigateTo } from 'gatsby-link'
export default class extends React.Component {
  constructor (props) {
    super(props)
    const params = new URLSearchParams(props.location.search)
    this.state = {
      user: params.get('user') || '',
      pass: params.get('pass') || '',
      hash: params.get('hash') || '',
      repeat: !!params.get('repeat'),
      stale: true
    }
  }
  passIsSecure () {
    return ps(this.state.pass).score > 2
  }
  passIsRepeat () {
    return md5(this.state.pass) === this.state.hash
  }
  render () {
    const { user, pass, repeat, stale } = this.state
    return (
      <Centered>
        <Container>
          <Container text>
            In Scenario B, please create a password for an unknown website that could be compromised.
          </Container>
          {
            repeat && !stale
              ? (
                <Message info>
                  <Message.Header>Having trouble creating and remembering a secure password?</Message.Header>
                  <a onClick={e => this.setState({ pass: `${randomWord()}${randomWord()}${randomWord()}` })}>
                  Generate one
                  </a>
                </Message>
              )
              : !this.passIsSecure() && !stale
                ? (
                  <Message negative>
                    <Message.Header>Oops, That's not a secure password!</Message.Header>
                    <a onClick={e => this.setState({ pass: `${randomWord()}${randomWord()}${randomWord()}` })}>
                    Generate one
                    </a>
                  </Message>
                )
                : this.passIsRepeat() && !stale
                  ? (
                    <Message negative>
                      <Message.Header>It's a bad idea to use the same password as before</Message.Header>
                      Since you entered the same password as you had for the trusted website,
                      your password could be leaked from this website and grant hackers access to your other secure accounts.
                      <Link to='/recommendation/start/'>
                      Learn why and how to easily create and remember different password for different websites.
                      </Link>
                    </Message>
                  )
                  : ''

          }
          <Header color='red'>Sign up to sketch.network</Header>
          <Login inverted onSubmit={e => {
            if (this.passIsSecure() && !this.passIsRepeat()) navigateTo(`/walkthrough/sketchylogin?hash=${md5(pass)}&user=${user}`)
            else this.setState({ stale: false })
          }}>
            <Login.Username value={user} onChange={e => { this.setState({ user: e.target.value }) }} />
            <Login.Password type='text' value={pass} onChange={e => { this.setState({ pass: e.target.value, stale: true }) }} />
            <Form.Button>Sign up</Form.Button>
          </Login>
        </Container>
      </Centered>
    )
  }
}
