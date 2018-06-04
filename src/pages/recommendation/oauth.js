import React from 'react'
import { Header, Image, Button } from 'semantic-ui-react'
import { navigateTo } from 'gatsby-link'
import Centered from '../../components/centered.js'
import img from '../../data/img/actual-oauth.jpg'
export default (props) => (
  <Centered>
    <Header>“Sign in with Google/Facebook” buttons are a secure way to mitigate this problem.
            You only need to remember your passwords to these trusted services.</Header>
    <Image src={img} />
    <Button onClick={e => navigateTo('/recommendation/nooauth/')}>Next</Button>
  </Centered>
)
