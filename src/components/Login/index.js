import React from 'react'
import  { Grid, Header, Form, Icon, Segment } from 'semantic-ui-react'
export default class extends React.Component {
  componentDidMount(){
    if(this.props.reference){
      this.props.reference(this.el)
    }
  }
  render(){
    const { children, reference, ...rest } = this.props
    return (
      <Form>
        <Segment stacked>
          <Form.Input icon placeholder="Password" iconPosition="left" {...rest}>
            <Icon name="lock"/>
            <input ref={el => { this.el = el }} />
          </Form.Input> 
          {children}
        </Segment>
      </Form>
    )
  }
}