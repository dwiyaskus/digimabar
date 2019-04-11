import React from 'react';
import { Segment, Image, Grid } from 'semantic-ui-react';
const digimabar = () => {
  return (
    <Segment style={{ padding: '0' }}>
      <Grid columns={2} padded="vertically">
        <Grid.Column>
          <Image src={require('../../assets/coverGOT.jpg')} />
        </Grid.Column>
        <Grid.Column />
      </Grid>
    </Segment>
  );
};

export default digimabar;
