import React from 'react'
import { Header, Image, Button } from 'semantic-ui-react'
import { navigateTo } from 'gatsby-link'
import Centered from '../../components/centered.js'
import img from '../../data/img/no-oauth.png'
export default (props) => (
  <Centered>
    <Header>However, many apps do not offer the option to log in with a trusted service</Header>
    <Image src={img} />
    <Button onClick={e => navigateTo('/recommendation/pm/')}>Next</Button>
  </Centered>
)
