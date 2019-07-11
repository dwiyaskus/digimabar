import React from 'react';
import {
  Segment,
  Header,
  Button,
  Divider,
  Container,
  Image,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { convertDateFormat } from '../../../scripts/moment';
export default class SegmentDetailJurus extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  };
  render() {
    const { data } = this.props;
    return (
      <Segment>
        <Button
          content="Review"
          style={{
            borderRadius: '0px',
            backgroundColor: '#283989',
            color: 'white',
          }}
        />
        <Header as="h2" content={data.title} />
        <Container
          content={`${convertDateFormat(
            data.created_at,
            'DD MMMM YYYY'
          )} | Oleh ${data.author.name}`}
        />
        <Divider />
        <Header as="h3">
          <p>{data.description}</p>
        </Header>
        <Image src={data.cover.medium} size="medium" centered />
      </Segment>
    );
  }
}
