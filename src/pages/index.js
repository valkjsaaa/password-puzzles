import React from "react"
import Link from 'gatsby-link'
import 'semantic-ui-css/semantic.min.css';

const IndexPage = () => (
    <div className="ui form">
        <label>Password</label>
        <div className="ui fluid input">
            <input type="text" placeholder="Enter your password here"/>
        </div>
        <button className="ui button" role="button">Submit</button>
        <Link to="/pm/">Next</Link>
    </div>
)

export default IndexPage
