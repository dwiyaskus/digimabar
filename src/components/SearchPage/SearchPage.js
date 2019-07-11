import React from 'react';
import { Segment, Image, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import CardSearchPage from '../Card/CardSearch';
import SpecialReport from '../SpecialReport/SegmentSpecialReport';
import DummySpecial from '../home/services/dummyDataSpecialReport';
import DummySearch from './services/dummySeacrh';
const digimabar = props => {
  return (
    <Segment>
      <Grid>
        <Grid.Column width={12}>
          {DummySearch.data.map(data => (
            <CardSearchPage object={data} />
          ))}
        </Grid.Column>
        <Grid.Column width={4}>
          <SpecialReport object={DummySpecial.article} />
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
