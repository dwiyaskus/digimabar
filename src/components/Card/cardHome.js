import React from 'react';
import {
  Segment,
  Image,
  Grid,
  Button,
  Header,
  Container,
  Divider,
} from 'semantic-ui-react';
const digimabar = () => {
  return (
    <Segment style={{ padding: '0' }}>
      <Grid columns={2} padded="vertically">
        <Grid.Column>
          <Image src={require('../../assets/coverGOT.jpg')} />
        </Grid.Column>
        <Grid.Column>
          <Button content="Report" primary />
          <Header as="h1">Test Header</Header>
          <Container textAlign="justified" as="h4">
            <Divider />
            <p> Test Description</p>
          </Container>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default digimabar;
