import  { Grid, Header, Form, Icon, Segment } from 'semantic-ui-react'
const Login = ({ onChange, onLogin, children }) => (
    <Form>
        <Segment stacked>
            <Form.Input icon placeholder="Password" iconPosition="left" onChange={onChange}>
            <Icon name="lock"/>
            <input/>
            </Form.Input> 
            {...chidren}
        </Segment>
    </Form>
)
export default Login