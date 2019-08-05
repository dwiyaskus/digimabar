import React from 'react';
import { Segment, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
const BLUE_COLOR = '#293989';
const SegmentSpecialReport = props => {
  return (
    <Segment style={{ marginLeft: '1em', backgroundColor: BLUE_COLOR }}>
      <Button inverted content="Laporan Spesial" name="Laporan Spesial" />
      <Image
        src={props.object.coverSmall}
        bordered
        style={{
          borderRadius: '1em',
          marginTop: '3em',
          borderColor: 'white',
        }}
      />
      <p
        style={{
          color: 'white',
          marginTop: '1em',
        }}
      >
        {props.object.description}
      </p>
    </Segment>
  );
};

SegmentSpecialReport.propTypes = {
  object: PropTypes.shape({
    description: PropTypes.string,
    cover: PropTypes.string,
    title: PropTypes.string,
    coverSmall: PropTypes.string,
  }),
};

export default SegmentSpecialReport;
