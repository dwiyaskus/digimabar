import React from 'react';
import {
  Grid,
  Image,
  Segment,
  Container,
  Header,
  Responsive,
} from 'semantic-ui-react';
import styles from './styles';
const card = () => {
  return (
    <Container style={{ marginLeft: '-3em' }}>
      <Grid.Column>
        <Segment style={{ marginTop: '-3em' }}>
          <Grid columns={2} padded="vertically">
            <Grid.Column>
              <Image src={require('../../assets/coverGOT.jpg')} />
            </Grid.Column>
            <Grid.Column>
              <Container>
                <Responsive>Test</Responsive>
              </Container>
            </Grid.Column>
          </Grid>
        </Segment>
      </Grid.Column>
      <Grid.Column />
    </Container>
  );
};

export default card;
