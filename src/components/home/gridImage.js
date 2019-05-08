import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import styles from './styles';
import { connect } from 'react-redux';
import { getHeadlineAction } from '../../action/homeAction';
class Headline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    // this.props.getHeadlineAction();
    fetch('http://api-digimdigim.neotenstudio.com/headlines')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
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
        </Grid.Row>
      </Grid>
    );
  }
}
function mapStateToProps(state) {
  return {
    loginStatus: state.authStore.loginStatus,
    loading: state.authStore.loading,
  };
}
export default connect(
  mapStateToProps,
  {
    getHeadlineAction,
  }
)(Headline);
