import React from "react"
import { navigateTo } from 'gatsby-link'
import 'semantic-ui-css/semantic.min.css';
import Login from '../components/login'
import  { Grid, Header, Form, Icon, Segment } from 'semantic-ui-react'
import { format } from 'url'
class IndexPage extends React.Component{
  constructor(props){
    super(props)
    this.state = { pass: '' }
  }
  render(){
    return (
      <Grid centered columns={1} style={{height: '100%', backgroundColor:'#DADADA'}}>
        <Grid.Row verticalAlign="middle" >
          <Grid.Column style={{maxWidth: '30%'}} width="5">
            <Header color="teal">Enter a password to begin</Header>
            <Login type='password' onChange={e => this.setState({ pass: e.target.value })}>
              <Grid columns={2}>
                <Grid.Column width='4'>
                  <Form.Button onClick={e => navigateTo(`/diagnostic?pass=${this.state.pass }`)}>
                    Begin
                  </Form.Button>
                </Grid.Column>
                { 
                this.state.pass.length ? 
                <Grid.Column floated='left' textAlign='right' width='12'>
                  * Clicking "Begin" shows password
                </Grid.Column> 
                : null
                }
              </Grid>
            </Login>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default IndexPage