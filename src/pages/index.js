import React from "react"
import Link from 'gatsby-link'
import 'semantic-ui-css/semantic.min.css';
import Login from './login.js'
import  { Grid, Header, Form, Icon, Segment } from 'semantic-ui-react'

class IndexPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {diagnosticText: ''}
  }
  render(){
    return (
      <Grid centered verticalAlign="middle" columns={1} style={{height: "100%"}}>
          <Grid.Column style={{maxWidth: '30%'}}>
            <Header className="teal">
              <div className="content">Enter a password to begin</div>
            </Header>
            <Login>
              <Form.Button>
                <Link to="/diagnostic/">Begin</Link>
              </Form.Button>  
            </Login>
          </Grid.Column>
      </Grid>
    )
  }
}

export default IndexPage