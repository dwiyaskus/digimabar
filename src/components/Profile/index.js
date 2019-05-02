import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import SegmentSetting from './segmentSetting';
const card = () => {
  return (
    <Grid style={{ marginTop: '3em' }}>
      <Grid.Column width={4}>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        <Container fluid content="Setyo Budi" as="h2" />
        <Container fluid content="Bergabung Sejak:" as="h3" />
        <label> 01 Desember 2018</label>
        <Container fluid content="Total Post:" as="h3" />
        <label>100</label>
      </Grid.Column>
      <Grid.Column width={11}>
        <SegmentSetting />
      </Grid.Column>
    </Grid>
  );
};

export default card;
