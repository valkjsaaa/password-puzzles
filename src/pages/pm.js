import React from 'react'
import Link from 'gatsby-link'
import {Icon, Image, Segment, Step, List, Message, Reveal, Statistic, Grid} from 'semantic-ui-react'
import img_use_same from "./img/use-same.png";
import img_hard_different from "./img/hard-different.png";
import img_oauth from "./img/oauth.png";
import img_oauth_actual from "./img/actual-oauth.jpg";
import img_pm from "./img/pm.png";
import img_no_oauth from "./img/no-oauth.png";
import img_use_pm from "./img/use-pm.png";
import logo_twitter from "./logos/twitter.png"
import logo_adobe from "./logos/adobe.png"
import logo_yahoo from "./logos/yahoo.png"
import logo_ebay from "./logos/ebay.png"
import logo_twitch from "./logos/twitch.png"
import logo_gmail from "./logos/gmail.png"
import logo_slack from "./logos/slack.png"
import checkPassword from "../diagnostic/index"
import "./pm.css"


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
        this.state = {
            step: 0,
            secure: true,
            signUpPassword: "",
            password: "",
            signInPassword:"",
            repeat: false,
            wrong: false
        };
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

    updateSignInPassword(e) {
        this.setState({signInPassword: e.target.value})
    }

    updateSignUpPassword(e) {
        this.setState({signUpPassword: e.target.value})
    }

    signUp() {
        let passwordSecure = checkPassword(this.state.signUpPassword);
        if (passwordSecure || this.state.signUpPassword === "skip") {
            this.setState(state => ({
                signInPassword: "",
                password: this.state.signUpPassword,
                secure: true
            }));
            this.props.parentPage.setState({fooglePassword: this.state.signUpPassword});
            console.log(this.props.parentPage.state.fooglePassword);
            this.nextStep()
        } else {
            this.setState(state => ({secure: passwordSecure}))
        }
    }

    signIn() {
        if (this.state.password === this.state.signInPassword || this.state.signInPassword === "skip") {
            this.setState(state => ({
                signInPassword: "",
                wrong: false
            }));
            this.createPage()
        } else {
            this.setState({wrong: true})
        }
    }

    prevStep() {
        this.setState(state => ({
            signInPassword: "",
            wrong: false,
            repeat: true,
        }));
        this.setState(state => ({step: state.step - 1}));
    }

    nextStep() {
        this.setState(state => ({step: state.step + 1}))
    }

    render() {
        if (this.state.step === 0) {
            return (
                <div>
                    {
                        this.state.repeat?(<Message info>
                            <Message.Header>Too hard to create and remember a secure password?</Message.Header>
                            <p>Try `skip` in the password field as a cheat for now 😝</p>
                        </Message>):""
                    }
                    <p>
                        Assuming that you are Jay Doe and you are creating a password for your new account on the well known internet company Foogle:
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
                                <input type="text"
                                       placeholder="Please input your password here"
                                       value={this.state.signUpPassword}
                                       onChange={this.updateSignUpPassword.bind(this)}/>
                            </div>
                        </div>
                        {this.state.secure? "": (<Message negative>
                            <Message.Header>Opps! That’s not a very secure password.</Message.Header>
                            <p>Perhaps refer to our password guideline?</p>
                        </Message>)}
                    </div>
                    <div className="field">
                        <button className="ui button" role="button" onClick={this.signUp.bind(this)}>Sign Up
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
                                <input type="text"
                                       placeholder="Please input your password here"
                                       value={this.state.signInPassword}
                                       onChange={this.updateSignInPassword.bind(this)}/>
                            </div>
                            {this.state.wrong? (<Message negative>
                                <Message.Header>Opps! That’s not the password you have just created.</Message.Header>
                                <p>Perhaps try to
                                    <a onClick={this.prevStep.bind(this)} style={{cursor: 'pointer'}}> create a new one </a>
                                    again?</p>
                            </Message>) : ""}
                        </div>
                    </div>
                    <div className="field">
                        <button className="ui button" role="button" onClick={this.signIn.bind(this)}>Sign In</button>
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
        this.state = {
            same: false,
            step: 0,
            secure: true,
            signUpPassword: "",
            password: "",
            signInPassword:"",
            wrong: false,
            right: false
        };
    }

    static key() {
        return "PasswordManagerSketchy"
    }

    static title() {
        return "Sketchy website"
    }

    createPage() {
        this.props.parentPage.insertAndSwitch(PasswordManagerDifficulty);
    }

    updateSignInPassword(e) {
        this.setState({signInPassword: e.target.value})
    }

    updateSignUpPassword(e) {
        this.setState({signUpPassword: e.target.value})
    }

    signUp() {
        console.log(this.state.signUpPassword)
        console.log(this.props.parentPage.state.fooglePassword)
        if (this.state.signUpPassword === this.props.parentPage.state.fooglePassword){
            this.setState({same: true, secure: true})
        } else {
            let passwordSecure = checkPassword(this.state.signUpPassword);
            if (passwordSecure || this.state.signUpPassword === "skip") {
                this.setState(state => ({
                    signInPassword: "",
                    password: this.state.signUpPassword,
                    secure: true
                }));
                this.nextStep()
            } else {
                this.setState(state => ({same: false, secure: passwordSecure}))
            }
        }
    }

    signIn() {
        if (this.state.password === this.state.signInPassword || this.state.signInPassword === "skip") {
            this.setState(state => ({
                wrong: false,
                right: true
            }));
        } else {
            this.setState({wrong: true, right: true})
        }
    }

    nextStep() {
        this.setState(state => ({step: state.step + 1}))
    }

    render() {
        if (this.state.step === 0) {
            return (
                <div>
                    <p>
                        Assuming that you are Jay Doe and you are creating a password for your new account on the well known internet company Foogle:
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
                                <input type="text"
                                       placeholder="Please input your password here"
                                       value={this.state.signUpPassword}
                                       onChange={this.updateSignUpPassword.bind(this)}/>
                            </div>
                        </div>
                        {this.state.same?(<Message negative>
                                <Message.Header>Using the same password for multiple websites is a bad practice!</Message.Header>
                            <p>Click <a onClick={this.createPage.bind(this)} style={{cursor: 'pointer'}}> Next </a>
                                to learn more about this!</p>
                            </Message>):""
                        }
                        {this.state.secure? "": (<Message negative>
                            <Message.Header>Opps! That’s not a very secure password.</Message.Header>
                            <p>Perhaps refer to our password guideline?</p>
                        </Message>)}
                    </div>
                    <div className="field">
                        <button className="ui button" role="button" onClick={this.signUp.bind(this)}>Sign Up
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
                                <input type="text"
                                       placeholder="Please input your password here"
                                       value={this.state.signInPassword}
                                       onChange={this.updateSignInPassword.bind(this)}/>
                            </div>
                            {this.state.wrong? (<Message negative>
                                <Message.Header>Opps! That’s not the password you have just created.</Message.Header>
                                <p>Remembering different password for different website is good but also hard.
                                    <a onClick={this.createPage.bind(this)} style={{cursor: 'pointer'}}>
                                        Want to know a better way?
                                    </a></p>
                            </Message>) : ""}
                            {this.state.right? (<Message positive>
                                <Message.Header>Wow! You've got it right!</Message.Header>
                                <p>Remembering different password for different website is good but also hard.
                                    <a onClick={this.createPage.bind(this)} style={{cursor: 'pointer'}}>
                                        Want to know a better way?
                                    </a></p>
                            </Message>) : ""}
                        </div>
                    </div>
                    <div className="field">
                        <button className="ui button" role="button" onClick={this.signIn.bind(this)}>Sign In</button>
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
        if (this.state.step + 1 < 4) {
            this.setState({step: this.state.step + 1})
        } else {
            this.createPage()
        }
    }

    content() {
        let websites = [
            {
                name: "Yahoo!",
                year: "2013",
                affected: "3 Billion",
                link: "https://www.wsj.com/articles/yahoo-discloses-new-breach-of-1-billion-user-accounts",
                logo: logo_yahoo
            },
            {
                name: "Adobe",
                year: "2013",
                affected: "152,000,000",
                link: "https://www.theverge.com/2013/11/7/5078560/over-150-million-breached-records-from-adobe-hack-surface-online",
                logo: logo_adobe
            },
            {
                name: "eBay",
                year: "2014",
                affected: "145,000,000",
                link: "https://www.washingtonpost.com/news/the-switch/wp/2014/05/21/ebay-asks-145-million-users-to-change-passwords-after-data-breach/",
                logo: logo_ebay
            },
            {
                name: "Twitter",
                year: "2018",
                affected: "330,000,000",
                link: "https://www.bbc.com/news/business-43995168",
                logo: logo_twitter
            },
            {
                name: "Slack",
                year: "2015",
                affected: "500,000",
                link: "https://nakedsecurity.sophos.com/2015/03/30/slack-gets-hacked-rolls-out-two-factor-authentication-after-user-database-breach/",
                logo: logo_slack
            },
            {
                name: "Twitch.tv",
                year: "2015",
                affected: "unknown",
                link: "https://www.usatoday.com/story/tech/gaming/2015/03/24/twitch-warning-breach/70366310/",
                logo: logo_twitch
            },
            {
                name: "GMail",
                year: "2014",
                affected: "5,000,000",
                link: "http://thenextweb.com/google/2014/09/10/4-93-million-gmail-usernames-passwords-published-google-says-evidence-systems-compromised/",
                logo: logo_gmail
            }
        ];
        if (this.state.step === 0) {
            return (
                <div>
                    <p>
                        Using the same or similar password for different websites is a bad practices, as if one of your password got leaked, all of your accounts may get PWNED!
                    </p>
                    <Image src={img_use_same} />
                </div>
            )
        } else if (this.state.step === 1 || this.state.step === 2) {
            let step = this.state.step;
            console.log(this.state.step);
            return (
                <div>
                    <p>
                        Password leakage is commoner then you think, all of the following company have password leakage at some point in their history:
                    </p>
                    {websites.map(function (website, i) {
                        return (
                            <Segment className="leak-block" key={i}>
                                <Reveal animated='move up' className={step === 1? "leak-reveal" : "leak-reveal active"}>
                                    <Reveal.Content className="statistics-cover" visible>
                                        <Statistic.Group className="center" size='mini' widths="2">
                                            <Statistic className="center">
                                                <Statistic.Value>{website.year}</Statistic.Value>
                                                <Statistic.Label>Year</Statistic.Label>
                                            </Statistic>
                                            <Statistic className="center">
                                                <Statistic.Value>{website.affected}</Statistic.Value>
                                                <Statistic.Label>Accounts</Statistic.Label>
                                            </Statistic>
                                        </Statistic.Group>
                                    </Reveal.Content>
                                    <Reveal.Content hidden className="fill-height">
                                        {/*<p>{website.name}</p>*/}
                                        <Image className="logo-image fill-height" src={website.logo} />
                                    </Reveal.Content>
                                </Reveal>
                            </Segment>)
                    })}
                </div>
            )
        } else if (this.state.step === 3) {
            return (
                <div>
                    <p>
                        However, for you, remember complex passwords for each website could be hard.
                    </p>
                    <Image src={img_hard_different} />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.content()}
                <button className="ui button" role="button" onClick={this.nextStep.bind(this)}>Next</button>
            </div>
        )
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
                <Link to="/">Restart this explorable.</Link>
            </div>
        )
    }
}


class PasswordManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pages: [PasswordManagerStartPage], active: 0, fooglePassword: "abc"};
    }

    setFooglePassword(fooglePassword) {
        this.setState({fooglePassword: fooglePassword})
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
