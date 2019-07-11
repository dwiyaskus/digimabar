import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import styles from './styles';
import Card from '../Card/cardHome';
import DummyData from './services/dummyDataCard';
import DummySpecial from './services/dummyDataSpecialReport';
import SpecialReport from '../SpecialReport/SegmentSpecialReport';
class card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTerbaru: true,
      activeTerpopuler: false,
    };
  }

  handleClickCategory = (e, { name }) => {
    return name === 'Terbaru'
      ? this.setState({ activeTerbaru: true, activeTerpopuler: false })
      : name === 'Terpopuler'
      ? this.setState({ activeTerpopuler: true, activeTerbaru: false })
      : null;
  };
  render() {
    const { activeTerbaru, activeTerpopuler } = this.state;
    return (
      <Grid
        stretched
        style={{ marginTop: '-3em' }}
        className="padding-side-twentyfive container-fit"
      >
        <Grid.Row centered>
          <Button
            style={
              activeTerbaru
                ? styles.buttonStylesCategoryBlue
                : styles.buttonStylesCategoryBlack
            }
            content="Terbaru"
            onClick={this.handleClickCategory}
            name="Terbaru"
          />
          <Button
            style={
              activeTerpopuler
                ? styles.buttonStylesCategoryBlue
                : styles.buttonStylesCategoryBlack
            }
            content="Terpopuler"
            onClick={this.handleClickCategory}
            name="Terpopuler"
          />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12} style={styles.noPadding}>
            {DummyData.data.map(data => {
              return (
                <Card style={{ marginLeft: '1em' }} key={data} object={data} />
              );
            })}
          </Grid.Column>
          <Grid.Column width={4} style={styles.quickLaunchSecondColumnStyle}>
            <SpecialReport object={DummySpecial.article} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default card;
