import React from 'react'
import { Reveal, Container, Segment, Statistic, Image, Button } from 'semantic-ui-react'
import { navigateTo } from 'gatsby-link'
import Centered from '../../components/centered.js'
import websites from '../../data/compromised.js'
export default (props) => (
  <Centered>
    <Container>
      <Container>
        Password leaks are more common than you might think. All of the following companies have had their entire password records exposed
      </Container>
      <Button onClick={e => navigateTo('/recommendation/oauth/')}>Next</Button>{
        websites.map((w, i) =>
          <Reveal active animated='move right' key={i}>
            <Segment>
              <Reveal.Content hidden>
                <Image size='small' src={w.logo} />
              </Reveal.Content>
            </Segment>
            <Segment>
              <Reveal.Content visible>
                <Statistic.Group size='small'>
                  <Statistic>
                    <Statistic.Value>{w.year}</Statistic.Value>
                  </Statistic>
                  <Statistic>
                    <Statistic.Value>{w.affected}</Statistic.Value>
                    <Statistic.Label>Accounts</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
              </Reveal.Content>
            </Segment>
          </Reveal>
        )
      }
    </Container>
  </Centered>
)
