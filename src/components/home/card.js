import React from 'react';
import { Grid, Segment, Button, Image } from 'semantic-ui-react';
import styles from './styles';
import Card from '../Card/cardHome';
const array1 = ['a', 'b', 'c', 'd', 'e'];
const BLUE_COLOR = '#293989';
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
            {array1.map(data => {
              return <Card style={{ marginLeft: '1em' }} key={data} />;
            })}
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
      </Grid>
    );
  }
}

export default card;
