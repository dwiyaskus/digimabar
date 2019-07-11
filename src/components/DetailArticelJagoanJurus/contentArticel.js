import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import SegmentComentar from './components/segmentComentar';
import styles from '../home/styles';
const card = () => {
  return (
    <Grid
      stretched
      style={{ marginTop: '-3em' }}
      className="padding-side-twentyfive container-fit"
    >
      <Grid.Row>
        <Grid.Column width={12} style={styles.noPadding}>
          <Segment style={{ padding: '0' }}>
            <Grid columns={2} padded="vertically">
              <Grid.Column />
              <Grid.Column />
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4} style={styles.quickLaunchSecondColumnStyle}>
          <SegmentComentar />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default card;
