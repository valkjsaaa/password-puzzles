import React from 'react'
import { Grid } from 'semantic-ui-react'
export default ({children, ...props}) => (
  <Grid padded centered columns={1} style={{height: '100%', backgroundColor: '#DADADA'}}>
    <Grid.Row stretched>
      <Grid.Column width={8} {...props}>
        {children}
      </Grid.Column>
    </Grid.Row>
  </Grid>
)
