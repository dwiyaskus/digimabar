import React from 'react';
import { Segment, Header, Image, Divider, Container } from 'semantic-ui-react';

import PropTypes from 'prop-types';
export default class SegmentDetailJurus extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  };
  render() {
    const { data } = this.props;
    return (
      <Segment>
        <Header as="h3">
          <p>{data.description}</p>
        </Header>
        <Image src={data.cover.medium} size="medium" centered />
        <Divider />
        <Container as="h3" textAlign="center" text>
          Donec posuere metus varius purus congue facilisis. Aliquam pretium
          ante in neque varius efficitur.
        </Container>
      </Segment>
    );
  }
}
