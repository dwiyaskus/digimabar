import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
const digimabar = () => {
  return (
    <Grid columns={2} padded="vertically">
      <Grid.Column>
        <Image src={require('../../assets/coverGOT.jpg')} />
      </Grid.Column>
      <Grid.Column>
        <Image src={require('../../assets/coverGOT.jpg')} />
      </Grid.Column>
    </Grid>
  );
};

export default digimabar;
