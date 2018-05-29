import React from "react"
import Link from 'gatsby-link'
import 'semantic-ui-css/semantic.min.css';

const IndexPage = () => (
    <div className="ui form">
        <div className="field">
            <label>Password</label>
            <div className="ui fluid input">
                <input type="text" placeholder="Enter your password here"/>
            </div>
        </div>
        <div className="field">
            <button className="ui button" role="button">Submit</button>
        </div>
        <Link to="/pm/">Next</Link>
    </div>
)

export default IndexPage
