import React from 'react'
import { Item, Reveal, Statistic, Segment, Image, Button, Container } from 'semantic-ui-react'
import { navigateTo } from 'gatsby-link'
import Centered from '../../components/centered.js'
import websites from '../../data/compromised.js'
export default (props) => (
  <Centered>
    <Container>
      <Container>
        Password leaks are more common than you might think. All of the following companies have had their entire password records exposed
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
