import React from 'react';
import { Grid, Container, Button, Divider } from 'semantic-ui-react';
import { style } from './styles';
import { connect } from 'react-redux';
import { putProfileAction, getProfileAction } from '../../action/authAction';
import ModalAlert from '../GlobalFunction/modalAlert';
import PropTypes from 'prop-types';
class account extends React.Component {
  state = {
    disabledName: true,
    disabledEmail: true,
    disabledSandi: true,
    update: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    modalOpen: false,
    headerAlert: '',
    contentAlert: '',
    loading: false,
  };

  static propTypes = {
    putProfileAction: PropTypes.func,
    getProfileAction: PropTypes.func,
  };
  handleSetName = () => {
    const { disabledName } = this.state;
    this.setState({ disabledName: !disabledName });
  };
  handleSetEmail = () => {
    const { disabledEmail } = this.state;
    this.setState({ disabledEmail: !disabledEmail });
  };
  handleSetSandi = () => {
    const { disabledSandi } = this.state;
    this.setState({ disabledSandi: !disabledSandi });
  };
  handleChange = e => {
    const { update } = this.state;
    update[e.target.name] = e.target.value;
    this.setState({ update: update });
  };
  handleSubmit = () => {
    const { update } = this.state;
    const data = {
      token: localStorage.getItem('tokenadmin'),
      name: update.name,
      email: update.email,
      password: update.password,
      confirmPassword: update.confirmPassword,
    };
    this.setState({ loading: true });
    this.props
      .putProfileAction(data)
      .then(() => {
        this.setState({
          modalOpen: true,
          contentAlert: 'Update Profile Successfully',
          headerAlert: 'Succesfully',
        });
        this.props.getProfileAction();
        this.setState({ loading: false });
      })
      .catch(() => {
        this.modalFailed();
        this.setState({ loading: false });
      });
  };

  modalFailed = () => {
    this.setState({
      modalOpen: true,
      contentAlert: 'failed to load the data ',
      headerAlert: 'Failed',
      loading: false,
    });
  };

  handleCloseAlert = () => {
    this.setState({ modalOpen: false });
  };
  render() {
    return (
      <Grid>
        <Grid.Column width={15}>
          <Container fluid content="Alamat Email" as="h3" />
          <input
            style={style.border}
            placeholder="Email..."
            disabled={this.state.disabledEmail}
            value={this.state.update.email}
            onChange={this.handleChange}
            name="email"
          />
          {/* <Input fluid placeholder="Search..." style={{ bo: '0px' }} /> */}
          <Divider />
          <Button
            content="Ubah"
            floated="right"
            style={style.buttonChange}
            onClick={this.handleSetEmail}
          />
        </Grid.Column>
        <Grid.Column width={15}>
          <Container fluid content="Nama Akun" as="h3" />
          <input
            style={style.border}
            placeholder="Nama Akun..."
            disabled={this.state.disabledName}
            value={this.state.update.name}
            onChange={this.handleChange}
            name="name"
          />
          <Divider />
          {/* <Input fluid placeholder="Search..." style={style.border} /> */}
          <Button
            content="Ubah"
            floated="right"
            style={style.buttonChange}
            onClick={this.handleSetName}
          />
        </Grid.Column>
        <Grid.Column width={15}>
          <Container fluid content="Kata Sandi" as="h3" />
          <input
            style={style.border}
            placeholder="Sandi..."
            disabled={this.state.disabledSandi}
            value={this.state.update.password}
            onChange={this.handleChange}
            name="password"
          />
          <Divider />
          {/* <Input fluid placeholder="Search..." style={style.border} /> */}
        </Grid.Column>
        <Grid.Column width={15}>
          {/* <Input fluid placeholder="Search..." style={style.border} /> */}
          <input
            style={style.border}
            placeholder="Sandi..."
            disabled={this.state.disabledSandi}
            value={this.state.update.confirmPassword}
            onChange={this.handleChange}
            name="confirmPassword"
          />
          <Divider />
          <Button
            content="Ubah"
            floated="right"
            style={style.buttonChange}
            onClick={this.handleSetSandi}
          />
        </Grid.Column>
        <Grid.Column width={15}>
          <Button
            content="Simpan"
            floated="left"
            style={style.buttonSave}
            onClick={this.handleSubmit}
            loading={this.state.loading}
          />
        </Grid.Column>
        <ModalAlert
          openModal={this.state.modalOpen}
          handleClose={this.handleCloseAlert}
          header={this.state.headerAlert}
          content={this.state.contentAlert}
          nameButton="OK"
        />
      </Grid>
    );
  }
}

function mapStateToProps() {
  return {};
}
export default connect(
  mapStateToProps,
  {
    putProfileAction,
    getProfileAction,
  }
)(account);
