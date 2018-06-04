import React from 'react'
import { Grid } from 'semantic-ui-react'
export default ({children, left = {}, right = {}}) => (
  <Grid padded centered columns={2} style={{height: '100%', backgroundColor: '#DADADA'}}>
    <Grid.Row columns='equal' stretched>
      <Grid.Column width={8} {...left}>
        {children[0]}
      </Grid.Column>
      <Grid.Column width={8} {...right}>
        {children[1]}
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
