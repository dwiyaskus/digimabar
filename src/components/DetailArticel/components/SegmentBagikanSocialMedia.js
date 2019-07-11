import React from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';
const BLUE_COLOR = '#293989';
export default class SegmentDetailJurus extends React.Component {
  render() {
    return (
      <Segment style={{ backgroundColor: BLUE_COLOR }}>
        <Header
          as="h4"
          content="Bagikan ke sosial mediamu:"
          style={{ color: 'white' }}
        />
        <Icon name="facebook" style={{ color: 'white' }} size="large" />
        <Icon name="twitter" style={{ color: 'white' }} size="large" />
      </Segment>
    );
  }
}
