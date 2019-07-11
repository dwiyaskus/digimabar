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
import PropTypes from 'prop-types';
const digimabar = props => {
  return (
    <Segment style={{ padding: '0' }}>
      <Grid columns={2} padded="vertically">
        <Grid.Column>
          <Image src={props.object.cover.medium} />
        </Grid.Column>
        <Grid.Column>
          <Button content="Report" primary />
          <Header as="h1">{props.object.title}</Header>
          <Container textAlign="justified" as="h4">
            <Divider />
            <p> {props.object.description}</p>
          </Container>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

digimabar.propTypes = {
  object: PropTypes.shape({
    description: PropTypes.string,
    cover: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default digimabar;
