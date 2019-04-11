import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import styles from './styles';
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
            <Grid.Row columns={3} style={{ marginTop: '-2em' }}>
              <Grid.Column>
                <Image src={require('../../assets/coverGOT.jpg')} />
              </Grid.Column>
              <Grid.Column>
                <Image src={require('../../assets/coverGOT.jpg')} />
              </Grid.Column>
              <Grid.Column>
                <Image src={require('../../assets/coverGOT.jpg')} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column width={5} style={styles.quickLaunchSecondColumnStyle}>
          {/* <CreateCustomPackageSection /> */}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default image;
