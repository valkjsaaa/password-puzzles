import React from 'react'
import { Item, Reveal, Statistic, Segment, Image, Button, Container } from 'semantic-ui-react'
import { navigateTo } from 'gatsby-link'
import Centered from '../../components/centered.js'
import websites from '../../data/compromised.js'
export default (props) => (
  <Centered>
    <Container>
      <Container>
        Although most websites seem trustworthy,
        even the most reputable companies have had hacks in the past
        compromising all of the personal data and passwords of the users.
        Therefore, it is a good idea to change your password for some websites
        so that if one is leaked then not all of your accounts are compromised.
      </Container>
      <Container>
        All of the following companies have had their entire password records exposed, guess who they are
        (hover your mouse on top of each on of them to reveal the answer):
      </Container>
      <Button onClick={e => navigateTo('/recommendation/showallcompromised/')}>Show All</Button>
      <Item.Group>{
        websites.map((w, i) =>
          <Segment key={i}>
            <Reveal animated='move right' >
              <Reveal.Content hidden>
                <Segment>
                  <Image size='fluid' src={w.logo} />
                </Segment>
              </Reveal.Content>
              <Reveal.Content visible>
                <Segment>
                  <Statistic.Group widths='two'>
                    <Statistic>
                      <Statistic.Value>{w.year}</Statistic.Value>
                    </Statistic>
                    <Statistic>
                      <Statistic.Value>{w.affected}</Statistic.Value>
                      <Statistic.Label>Accounts</Statistic.Label>
                    </Statistic>
                  </Statistic.Group>
                </Segment>
              </Reveal.Content>
            </Reveal>
          </Segment>
        )
      }
      </Item.Group>
    </Container>
  </Centered>
)
