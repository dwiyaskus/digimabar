import React from 'react';
import { Grid, Image, Segment, Button } from 'semantic-ui-react';
import SegmentComentar from '../DetailArticelJagoanJurus/components/segmentComentar';
import SegmentDetailArtickel from './components/segementDetailArtickel';
import SegmentDetailArticelFooter from './components/segmentDetailArticelFooter';
import SegmentBagikanSocialMedia from './components/SegmentBagikanSocialMedia';
import styles from '../home/styles';
const BLUE_COLOR = '#293989';
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
              <Image src={require('../../assets/coverGOT.jpg')} />
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid.Row>
      <Grid stretched className="padding-side-twentyfive container-fit">
        <Grid.Row>
          <Grid.Column width={12} style={{ marginTop: '-5em' }}>
            <SegmentDetailArtickel />
            <SegmentDetailArticelFooter />
            <SegmentBagikanSocialMedia />
          </Grid.Column>
          <Grid.Column width={4} style={styles.quickLaunchSecondColumnStyle}>
            <Segment style={{ marginLeft: '1em', backgroundColor: BLUE_COLOR }}>
              <Button
                inverted
                content="Laporan Spesial"
                // onClick={this.handleClickCategory}
                name="Laporan Spesial"
              />
              <Image
                src={require('../../assets/coverGOT.jpg')}
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
                ABCBatman: Arkham Knight Fan Discovers Possible Court of Owls
                Easter Eggs
              </p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12} style={{ marginTop: '1em' }}>
            <SegmentComentar />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Grid>
  );
};

export default image;
