import React from 'react'
import Link from 'gatsby-link'
import { Icon, Image, Segment, Step, List } from 'semantic-ui-react'
import img_use_same from "./img/use-same.png";
import img_hard_different from "./img/hard-different.png";
import img_oauth from "./img/oauth.png";
import img_oauth_actual from "./img/actual-oauth.jpg";
import img_pm from "./img/pm.png";
import img_no_oauth from "./img/no-oauth.png";
import img_use_pm from "./img/use-pm.png";
import checkPassword from "../diagnostic/index"


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
        this.props.parentPage.insertAndSwitch(PasswordManagerFoogle);
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

class PasswordManagerFoogle extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {step: 0};
    }

    static key() {
        return "PasswordManagerFoogle"
    }

    static title() {
        return "Well Known website"
    }

    createPage() {
        this.props.parentPage.insertAndSwitch(PasswordManagerSketchy);
    }

    nextStep() {
        this.setState({step: this.state.step + 1})
    }

    render() {
        if (this.state.step === 0) {
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
                        <button className="ui button" role="button" onClick={this.nextStep.bind(this)}>Sign Up
                        </button>
                    </div>
                </div>
            )
        } else {
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
}

class PasswordManagerSketchy extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {step: 0};
    }

    static key() {
        return "PasswordManagerSketchy"
    }

    static title() {
        return "Sketchy Website"
    }

    createPage() {
        this.props.parentPage.insertAndSwitch(PasswordManagerDifficulty);
    }

    nextStep() {
        this.setState({step: this.state.step + 1})
    }

    render() {
        if (this.state.step === 0) {
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
                        <button className="ui button" role="button" onClick={this.nextStep.bind(this)}>Sign Up
                        </button>
                    </div>
                </div>
            )
        } else {
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
}

class PasswordManagerDifficulty extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {step: 0};
    }

    static key() {
        return "PasswordManagerDifficulty"
    }

    static title() {
        return "Difficulty in managing passwords"
    }

    createPage() {
        this.props.parentPage.insertAndSwitch(PasswordManagerOauth);
    }

    nextStep() {
        this.setState({step: 1})
    }

    render() {
        if (this.state.step === 0) {
            return (
                <div>
                    <p>
                        Using the same or similar password for different websites is a bad practices, as if one of your password got leaked, all of your accounts may get PWNED!
                    </p>
                    <Image src={img_use_same} />
                    <button className="ui button" role="button" onClick={this.nextStep.bind(this)}>Next</button>
                </div>
            )
        }else {
            return (
                <div>
                    <p>
                        However, for you, remember complex passwords for each website could be hard.
                    </p>
                    <Image src={img_hard_different} />
                    <button className="ui button" role="button" onClick={this.createPage.bind(this)}>Next</button>
                </div>
            )
        }
    }
}

class PasswordManagerOauth extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {step: 0};
    }

    static key() {
        return "PasswordManagerOauth"
    }

    static title() {
        return "Using OAuth"
    }

    createPage() {
        this.props.parentPage.insertAndSwitch(PasswordManagerPM);
    }

    nextStep() {
        this.setState({step: 1})
    }

    render() {
        if (this.state.step === 0) {
            return (
                <div>
                    <p>
                        OAuth or “Sign in with Google/Facebook” is one way to mitigate this problem.
                        You only need to remember the password you set for those major big companies.
                    </p>
                    <Image src={img_oauth} />
                    <button className="ui button" role="button" onClick={this.nextStep.bind(this)}>Next</button>
                </div>
            )
        }else {
            return (
                <div>
                    <p>
                        A typical OAuth looks like this:
                    </p>
                    <Image src={img_oauth_actual} />
                    <button className="ui button" role="button" onClick={this.createPage.bind(this)}>Next</button>
                </div>
            )
        }
    }
}

class PasswordManagerPM extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {step: 0};
    }

    static key() {
        return "PasswordManagerPM"
    }

    static title() {
        return "Using Password Manager"
    }

    createPage() {
        this.props.parentPage.insertAndSwitch(PasswordManagerSummary);
    }

    nextStep() {
        this.setState({step: this.state.step + 1})
    }

    render() {
        if (this.state.step === 0) {
            return (
                <div>
                    <p>
                        However, most webpage don't have a OAuth option:
                    </p>
                    <Image src={img_no_oauth} size="medium"/>
                    <button className="ui button" role="button" onClick={this.nextStep.bind(this)}>Next</button>
                </div>
            )
        }else if (this.state.step === 1) {
            return (
                <div>
                    <p>
                        In that case, we can use a "Password Manager"
                    </p>
                    <Image src={img_use_pm} size="medium"/>
                    <button className="ui button" role="button" onClick={this.nextStep.bind(this)}>Next</button>
                </div>
            )
        } else {
            return (
                <div>
                    <p>
                        Password Manager is what we think the best solution to the password problem. You only need to remember the master password to your password manager and it will create distinct, complex password for each of the website you are using.
                    </p>
                    <Image src={img_pm} />
                    <button className="ui button" role="button" onClick={this.createPage.bind(this)}>Next</button>
                </div>
            )
        }
    }
}

class PasswordManagerSummary extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    static key() {
        return "PasswordManagerSummary"
    }

    static title() {
        return "Summary"
    }

    render() {
        return (
            <div>
                <p>
                    That's the end of this explorable!
                </p>
                <p>
                    Hopefully, you have learnt the following in this explorable:
                </p>
                <List bulleted>
                    <List.Item>
                        Good practice of creating a password(add a link)
                        <List.List>
                            <List.Item>Either use a long password consist of a few uncommon words.</List.Item>
                            <List.Item>Or use a short password with very random characters (number, letter, special characters).</List.Item>
                        </List.List>
                    </List.Item>
                    <List.Item>
                        Use different and strong password on each website
                        <List.List>
                            <List.Item>Use a Password Manager</List.Item>
                            <List.Item>Use OAuth whenever possible</List.Item>
                        </List.List>
                    </List.Item>
                </List>
                <Link to="/index/">Restart this explorable.</Link>
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
                <Step.Group attached='top' items={steps} stackable='tablet'>
                </Step.Group>
                <Segment attached>
                    {React.createElement(this.state.pages[this.state.active], {parentPage: this})}
                </Segment>
            </div>
        );
    }
}

export default PasswordManager
