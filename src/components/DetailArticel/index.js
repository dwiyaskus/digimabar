import React from 'react';
import { Grid } from 'semantic-ui-react';
import SegmentComentar from '../DetailArticelJagoanJurus/components/segmentComentar';
import SegmentDetailArtickel from './components/segementDetailArtickel';
import SegmentDetailArticelFooter from './components/segmentDetailArticelFooter';
import SegmentBagikanSocialMedia from './components/SegmentBagikanSocialMedia';
import SegmentSpecialReport from '../SpecialReport/SegmentSpecialReport';
import styles from '../home/styles';
import DummySpecial from '../home/services/dummyDataSpecialReport';

import PropTypes from 'prop-types';
const DetailArticel = props => {
  return (
    // <Grid
    //   stretched
    //   style={styles.quickLaunchContainerStyle}
    //   className="padding-side-twentyfive container-fit"
    // >
    //   <Grid.Row style={styles.segment}>
    //     <Grid.Column width={16} style={styles.noPadding}>
    //       <Grid columns={2}>
    //         <Grid.Column style={{ width: '100%', marginBottom: '1px' }}>
    //           <Image src={require('../../assets/coverGOT.jpg')} />
    //         </Grid.Column>
    //       </Grid>
    //     </Grid.Column>
    //   </Grid.Row>
    <Grid stretched className="padding-side-twentyfive container-fit">
      <Grid.Row>
        <Grid.Column width={12} style={{ marginTop: '-5em' }}>
          <SegmentDetailArtickel data={props.data} />
          <SegmentDetailArticelFooter data={props.data} />
          <SegmentBagikanSocialMedia data={props.data} />
        </Grid.Column>
        <Grid.Column width={4} style={styles.quickLaunchSecondColumnStyle}>
          <SegmentSpecialReport object={DummySpecial.article} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={12} style={{ marginTop: '1em' }}>
          <SegmentComentar />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    // </Grid>
  );
};

DetailArticel.propTypes = {
  data: PropTypes.object,
};

export default DetailArticel;
