import React from 'react'
import {Form, Container, Header, Message, Accordion, Icon, Progress} from 'semantic-ui-react'
import {Login} from '../../components/login.js'
import Centered from '../../components/centered.js'
import md5 from 'md5'
import Link, {navigateTo} from 'gatsby-link'
import xkpasswd from '../../utils/xkpasswd-node'
import zxcvbn from "zxcvbn"

let score_meaning = [
  "too guessable",
  "very guessable",
  "somewhat guessable",
  "safely unguessable",
  "very unguessable"
];

class Generate extends React.Component {
  constructor(props) {
    super(props);
    const pattern = "wsd";
    const password = xkpasswd({pattern: pattern, separators: "-"});
    const info = zxcvbn(password)
    this.state = {
      pattern: pattern,
      password: password,
      info: info
    }
  }

  render() {
    const {pattern, password, info} = this.state;
    console.log(info);
    console.log(info.score);
    return (
      <Centered>
        <Container>
          <Header>
            Our recommended way to generate a password is to concatenate uncommon dictionary words as a password,
            you can try generate your own password down here and see how secure it is.
          </Header>
          <Form>
            <Form.Field>
              <label>Pattern (w: word, s: seperator, d: digit)</label>
              <input value={pattern} onChange={e => {
                const new_pattern = e.target.value;
                const new_password = xkpasswd({
                  pattern: new_pattern, separators: "-",
                });
                const new_info = zxcvbn(new_password);
                this.setState({
                  pattern: new_pattern,
                  password: new_password,
                  info: new_info
                })
              }} autoComplete="off"/>
              <label>Generated Password</label>
              <input value={password} readOnly/>
              <Progress percent={info.score * 1.0 * 20 + 20}
                        success={info.score >= 3}
                        warning={info.score >= 2 && info.score < 3}
                        error={info.score < 2}>
                {info.score} out of 4: {score_meaning[info.score]}
              </Progress>
              {
                info.score >= 3
                  ? (
                    <Message info>
                      <Message.Header>
                        Great job on creating a secure password!
                      </Message.Header>
                      Try to remember it as hard as you can, and put it into practice in the next stage.
                      <Link to={`/walkthrough/start/`}>Next</Link>
                    </Message>
                  )
                  : ''
              }
              {
                info.score < 3
                  ? (
                    <Message negative>
                      <Message.Header>
                        Password is insecure
                      </Message.Header>
                      Try harder! Maybe add a few words? (More "w" in the pattern field).
                    </Message>
                  )
                  : ''
              }
            </Form.Field>
          </Form>
        </Container>
      </Centered>
    )
  }
}

export default Generate
