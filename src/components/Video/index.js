import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import styles from '../home/styles';
import Card from '../Card/cardHome';
const array1 = ['a', 'b', 'c', 'd', 'e'];
const card = () => {
  return (
    <Grid
      stretched
      style={{ marginTop: '-3em' }}
      className="padding-side-twentyfive container-fit"
    >
      <Grid.Row>
        <Grid.Column width={12} style={styles.noPadding}>
          {array1.map(data => {
            return <Card style={{ marginLeft: '1em' }} key={data} />;
          })}
        </Grid.Column>
        <Grid.Column width={4} style={styles.quickLaunchSecondColumnStyle}>
          <Segment style={{ marginLeft: '1em' }} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default card;
