import React from 'react';
import { Grid, Image, Segment } from 'semantic-ui-react';
import styles from '../home/styles';
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
            <Segment style={{ padding: '0' }}>
              <Grid columns={2} padded="vertically">
                <Grid.Column>
                  <Image src={require('../../assets/coverGOT.jpg')} />
                </Grid.Column>
                <Grid.Column />
              </Grid>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4} style={styles.quickLaunchSecondColumnStyle}>
            <Segment style={{ marginLeft: '1em', marginTop: '2em' }} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12} style={{ marginTop: '1em' }}>
            <Segment style={{ padding: '0' }}>
              <Grid columns={2} padded="vertically">
                <Grid.Column>
                  <Image src={require('../../assets/coverGOT.jpg')} />
                </Grid.Column>
                <Grid.Column />
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Grid>
  );
};

export default image;
