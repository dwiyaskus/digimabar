import React from 'react';
import { Segment, Grid, Button, Header, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
const digimabar = props => {
  return (
    <Segment loading={props.loading}>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Button content="Report" primary />
          </Grid.Column>
          <Grid.Column>
            <Header as="h1">{props.object.title}</Header>
            <Container textAlign="justified" as="h4">
              <p> {props.object.description}</p>
            </Container>
          </Grid.Column>
        </Grid.Row>
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
  loading: PropTypes.bool,
};

export default digimabar;
