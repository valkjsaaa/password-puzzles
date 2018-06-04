import React from 'react'
import { Header, Image, Button, Container } from 'semantic-ui-react'
import { navigateTo } from 'gatsby-link'
import Centered from '../../components/centered.js'
import img from '../../data/img/pm.png'
export default (props) => (
  <Centered>
    <Header>In these cases, we suggest a password manager</Header>
    <Container text>
      Password managers are what we think best balance practicality with security.
      You only need to remember a master password to your password manager and it will take care of creating distinct, complex passwords every time you need one.
    </Container>
    <Image src={img} />
    <Button onClick={e => navigateTo('/recommendation/recap/')}>Next</Button>
  </Centered>
)
