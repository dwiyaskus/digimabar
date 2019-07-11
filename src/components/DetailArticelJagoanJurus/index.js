import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import SegmentComentar from './components/segmentComentar';
import SegmentDetailJurus from './components/SegmentDetailJurus';
import SegmentSpecialReport from '../SpecialReport/SegmentSpecialReport';
import SegmentDetailArticelOnlyOneContent from '../DetailArticel/index';
import styles from '../home/styles';
import DummyData from './services/dummyDataDetailArticel';
import DummySpecial from '../home/services/dummyDataSpecialReport';

const image = () => {
  return (
    <Grid
      stretched
      style={styles.quickLaunchContainerStyle}
      className="padding-side-twentyfive container-fit"
    >
      <Grid.Row style={styles.segment}>
        <Grid.Column width={16} style={styles.noPadding}>
          <Grid columns={2}>
            <Grid.Column style={{ width: '100%', marginBottom: '1px' }}>
              <Image src={DummyData.cover.original} />
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Row>
      <Grid stretched className="padding-side-twentyfive container-fit">
        {DummyData.sub_contents.length === 1 ? (
          <SegmentDetailArticelOnlyOneContent data={DummyData} />
        ) : (
          <Grid>
            <Grid.Row>
              <Grid.Column width={12} style={{ marginTop: '-5em' }}>
                <SegmentDetailJurus data={DummyData} />
              </Grid.Column>
              <Grid.Column
                width={4}
                style={styles.quickLaunchSecondColumnStyle}
              >
                <SegmentSpecialReport object={DummySpecial.article} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={12} style={{ marginTop: '1em' }}>
                <SegmentComentar />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default image;
