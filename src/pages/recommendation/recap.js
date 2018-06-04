import React from 'react'
import { Header, List } from 'semantic-ui-react'
import Link from 'gatsby-link'
import Centered from '../../components/centered.js'
export default (props) => (
  <Centered>
    <Header>In these cases, we suggest a password manager</Header>
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
    <Link to='/'>Restart this explorable.</Link>
  </Centered>
)
