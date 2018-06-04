import React from 'react'
import { Form, Container, Header, Message } from 'semantic-ui-react'
import { Login } from '../../components/login.js'
import ps from 'zxcvbn'
import Centered from '../../components/centered.js'
import randomWord from '../../utils/random-word'
import md5 from 'md5'
import { navigateTo } from 'gatsby-link'
export default class extends React.Component {
  constructor (props) {
    super(props)
    const params = new URLSearchParams(props.location.search)
    this.state = {
      user: params.get('user') || '',
      pass: params.get('pass') || '',
      stale: true,
      repeat: !!params.get('repeat')
    }
  }
  passIsSecure () {
    return ps(this.state.pass).score > 2
  }
  render () {
    const { user, pass, repeat, stale } = this.state
    return (
      <Centered>
        <Container>
          <Container text>
            Create an account for the well known internet company Foogle
          </Container>
          {
            repeat && !stale
              ? (
                <Message info>
                  <Message.Header>Having trouble creating and remembering a secure password?</Message.Header>
                  <a href='' onClick={e => this.setState({ pass: `${randomWord()}${randomWord()}${randomWord()}` }) || e.preventDefault()}>
                  Generate one
                  </a>
                </Message>
              )
              : !this.passIsSecure() && !stale
                ? (
                  <Message negative>
                    <Message.Header>Oops, That's not a secure password!</Message.Header>
                    <a href='' onClick={e => this.setState({ pass: `${randomWord()}${randomWord()}${randomWord()}` }) || e.preventDefault()}>
                    Generate one
                    </a>
                  </Message>
                )
                : ''

          }
          <Header color='teal'>Sign up to Foogle</Header>
          <Login onSubmit={e => {
            if (this.passIsSecure()) navigateTo(`/walkthrough/fooglelogin?hash=${md5(pass)}&user=${user}`)
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
