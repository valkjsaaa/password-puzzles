import React from 'react'
import { Form, Icon, Segment } from 'semantic-ui-react'

const Login = ({children, ...props}) => (
  <Form size='large' {...props}>
    <Segment stacked>{children}</Segment>
  </Form>
)
Login.Input = class extends React.Component {
  componentDidMount () {
    if (this.props.reference) {
      this.props.reference(this.el)
    }
  }
  render () {
    const { children, reference, ...props } = this.props
    return (
      <Form.Input {...props}>
        {children}
        <input ref={el => { this.el = el }} />
      </Form.Input>
    )
  }
}
Login.Password = (props) => (
  <Login.Input icon type='password' placeholder='Password' {...props}>
    <Icon name='lock' />
  </Login.Input>
)
Login.Username = (props) => (
  <Login.Input icon type='text' placeholder='Username' {...props}>
    <Icon name='user' />
  </Login.Input>
)
Login.Button = (props) => (
  <Form.Button {...props}>Login</Form.Button>
)
export default Login
export { Login }
