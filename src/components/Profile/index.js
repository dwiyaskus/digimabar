import React from 'react';
import { Grid, Image, Container, Loader } from 'semantic-ui-react';
import SegmentSetting from './segmentSetting';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfileAction, resetLoginAction } from '../../action/authAction';
class DetailJurus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  static propTypes = {
    getProfileAction: PropTypes.func,
    getProfileDataStatus: PropTypes.bool,
    getProfileData: PropTypes.object,
    resetLoginAction: PropTypes.func,
    loading: PropTypes.bool,
  };
  componentDidMount() {
    this.props.getProfileAction();
  }
  componentDidUpdate() {
    if (this.props.getProfileDataStatus) {
      this.setState({
        data: this.props.getProfileData,
      });
      this.props.resetLoginAction();
    }
  }
  render() {
    const { data } = this.state;
    return (
      <Grid style={{ marginTop: '3em' }}>
        <Loader active={this.props.loading} />
        <Grid.Column width={4}>
          <Image src={data.profile_picture} />
          <Container fluid content={data.name} as="h2" />
          <Container fluid content="Email:" as="h3" />
          <label>{data.email}</label>
          {/* <Container fluid content="Bergabung Sejak:" as="h3" />
          <label> 01 Desember 2018</label>
          <Container fluid content="Total Post:" as="h3" />
          <label>100</label> */}
        </Grid.Column>
        <Grid.Column width={11}>
          <SegmentSetting />
        </Grid.Column>
      </Grid>
    );
  }
}
function mapStateToProps(state) {
  return {
    getProfileDataStatus: state.authStore.getProfileDataStatus,
    getProfileData: state.authStore.getProfileData,
    loading: state.authStore.loading,
  };
}
export default connect(
  mapStateToProps,
  {
    getProfileAction,
    resetLoginAction,
  }
)(DetailJurus);
