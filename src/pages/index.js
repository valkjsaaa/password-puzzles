import React from "react"
import Link from 'gatsby-link'
import diagnostic from '../diagnostic'
import 'semantic-ui-css/semantic.min.css';

class IndexPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {diagnosticText: ''}
  }
  handleChange(e){
    this.setState({diagnosticText: e.target.value.length ? diagnostic(e.target.value) : ''})
  }
  render(){
    return (
      <div className="ui form">
        <label>Password</label>
        <div className="ui fluid input">
            <input type="text" placeholder="Enter your password here" onChange={this.handleChange.bind(this)}/>
        </div>
        <button className="ui button" role="button">Submit</button>
        <div>{this.state.diagnosticText}</div>
        <Link to="/pm/">Next</Link>
      </div>
    )
  }
}

export default IndexPage
