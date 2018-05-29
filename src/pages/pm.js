import React from 'react'
import { Icon, Image, Segment, Step } from 'semantic-ui-react'

class PasswordManagerStartPage extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    static key() {
        return "PasswordManagerStartPage"
    }

    static title() {
        return "Introduction"
    }

    createPage() {
        this.props.parentPage.insertAndSwitch(PasswordManagerFoogleSignUp);
    }

    render() {
        return (
            <div>
                <p>
                    Now you are familiar with how to create a good password, why not try to create some accounts with secure password?

                    Lets go on a miniature adventure with a few websites shall we?
                </p>
                <button className="ui button" role="button" onClick={this.createPage.bind(this)}>Let's Go</button>
            </div>
        )
    }
}

class PasswordManagerFoogleSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    static key() {
        return "PasswordManagerFoogleSignUp"
    }

    static title() {
        return "Sign Up for Foogle"
    }

    createPage() {
        this.props.parentPage.insertAndSwitch(PasswordManagerFoogleSignIn);
    }

    render() {
        return (
            <div>
                <p>
                    Assuming that you are creating a account for the well known internet company Foogle:
                </p>
                <div className="equal width fields">
                    <div className="field">
                        <label>First name</label>
                        <div className="ui fluid input disabled">
                            <input type="text" placeholder="Jay"/>
                        </div>
                    </div>
                    <div className="field">
                        <label>Last name</label>
                        <div className="ui fluid input disabled">
                            <input type="text" placeholder="Doe"/>
                        </div>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <div className="ui fluid input disabled">
                            <input type="text" placeholder="jay.doe@fmail.com"/>
                        </div>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <div className="ui fluid input">
                            <input type="text" placeholder="Please input your password here"/>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <button className="ui button" role="button" onClick={this.createPage.bind(this)}>Sign Up</button>
                </div>
            </div>
        )
    }
}

class PasswordManagerFoogleSignIn extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    static key() {
        return "PasswordManagerFoogleSignIn"
    }

    static title() {
        return "Sign In for Foogle"
    }

    createPage() {
        this.props.parentPage.insertAndSwitch(PasswordManagerSketchySignUp);
    }

    render() {
        return (
            <div>
                <p>
                    Great job on creating a very secure password! Lets try to log in to Foogle with this very secure password!
                </p>
                <div className="equal width fields">
                    <div className="field">
                        <label>Email</label>
                        <div className="ui fluid input disabled">
                            <input type="text" placeholder="jay.doe@fmail.com"/>
                        </div>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <div className="ui fluid input">
                            <input type="text" placeholder="Please input your password here"/>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <button className="ui button" role="button" onClick={this.createPage.bind(this)}>Sign In</button>
                </div>
            </div>
        )
    }
}

class PasswordManagerSketchySignUp extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    static key() {
        return "PasswordManagerSketchySignUp"
    }

    static title() {
        return "Sign In for 6meme.com"
    }

    createPage() {
        this.props.parentPage.insertAndSwitch(PasswordManagerSketchySignIn);
    }


    render() {
        return (
            <div>
                <p>
                    Assuming that you are creating another account for a very sketchy website 6meme.com:
                </p>
                <div className="equal width fields">
                    <div className="field">
                        <label>First name</label>
                        <div className="ui fluid input disabled">
                            <input type="text" placeholder="Jay"/>
                        </div>
                    </div>
                    <div className="field">
                        <label>Last name</label>
                        <div className="ui fluid input disabled">
                            <input type="text" placeholder="Doe"/>
                        </div>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <div className="ui fluid input disabled">
                            <input type="text" placeholder="jay.doe@fmail.com"/>
                        </div>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <div className="ui fluid input">
                            <input type="text" placeholder="Please input your password here"/>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <button className="ui button" role="button" onClick={this.createPage.bind(this)}>Sign Up</button>
                </div>
            </div>
        )
    }
}

class PasswordManagerSketchySignIn extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    static key() {
        return "PasswordManagerSketchySignIn"
    }

    static title() {
        return "Sign In for 6meme.com"
    }

    createPage() {
        this.props.parentPage.insertAndSwitch(PasswordManagerSketchySignIn);
    }

    render() {
        return (
            <div>
                <p>
                    Great job on creating a very secure password! Lets try to log in to 6meme.com with this very secure password!
                </p>
                <div className="equal width fields">
                    <div className="field">
                        <label>Email</label>
                        <div className="ui fluid input disabled">
                            <input type="text" placeholder="jay.doe@fmail.com"/>
                        </div>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <div className="ui fluid input">
                            <input type="text" placeholder="Please input your password here"/>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <button className="ui button" role="button" onClick={this.createPage.bind(this)}>Sign In</button>
                </div>
            </div>
        )
    }
}


class PasswordManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pages: [PasswordManagerStartPage], active: 0};
    }

    insertAndSwitch(page) {
        let newState = this.state;
        newState.pages.push(page);
        newState.active = newState.pages.indexOf(page);
        this.setState(newState)
    }

    render() {
        let steps = [];

        console.log(this.state.pages);

        for (let i = 0; i < this.state.pages.length; i++) {
            let page = this.state.pages[i];
            console.log(page);
            steps.push({
                key: page.key(),
                title: page.title(),
                active: i === this.state.active
            })
        }

        return (
            <div>
                <Step.Group attached='top' items={steps}>
                </Step.Group>
                <Segment attached>
                    {React.createElement(this.state.pages[this.state.active], {parentPage: this})}
                </Segment>
            </div>
        );
    }
}

export default PasswordManager
