import React from 'react'
import { Container, Button } from 'semantic-ui-react'
import { navigateTo } from 'gatsby-link'
import Centered from '../../components/centered.js'
export default () => (
  <Centered>
    <Container text>
      <p>
        Now that you are familiar with how to create a good password, why not put your knowledge to the test?
        Lets go on a miniature adventure with a few websites, shall we?
      </p>
      <Button onClick={e => navigateTo('/walkthrough/fooglesignup/')}>Let's Go</Button>
    </Container>
  </Centered>
)
