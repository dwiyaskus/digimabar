import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dropdown, Input, Button } from 'semantic-ui-react';
import { postLoginAction } from '../../action/authAction';
import { baseUrl, bodyRequest } from '../../scripts/fetchCall';
import ModalDaftar from '../daftar/daftar';
import ModalAlert from '../GlobalFunction/modalAlert';
import handleValidation from './services/validation/registerValidation';
import fieldToValidate from './constant/fieldToValidate';
import _ from 'lodash';
import { Link } from 'react-router-dom';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        username: '',
        password: '',
      },
      openDropdown: false,
      openDaftar: false,
      register: {
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      loadingUser: false,
      typePassword: 'password',
      passwordIcon: 'eye slash',
      typeConfirmPassword: 'password',
      confirmPasswordIcon: 'eye slash',
      modalOpen: false,
      headerAlert: '',
      contentAlert: '',
      errors: {},
      nextPage: null,
      goNextPage: false,
    };
  }
  static propTypes = {
    postLoginAction: PropTypes.func,
    haveToken: PropTypes.bool,
  };

  handleChange = (e, { name, value }) => {
    const { login } = this.state;
    login[name] = value;
    this.setState({ login: login });
    //this.validate();
  };
  handleSubmit = () => {
    const { username, password } = this.state.login;
    fetch(
      baseUrl('login'),
      bodyRequest('POST', 'application/json', {
        username: username,
        password: password,
      })
    )
      .then(result => {
        //Here body is not ready yet, throw promise
        if (!result.ok) throw result;
        return result.json();
      })
      .then(jsonObject => {
        // Successful request processing
        localStorage.setItem('tokenadmin', jsonObject.access_token);
      });
  };
  openSegment = () => {
    const { openDropdown } = this.state;
    this.setState({ openDropdown: !openDropdown });
  };
  handleCloseDaftar = () => {
    this.setState({ openDaftar: false });
  };
  handleOpenDaftar = () => {
    this.setState({ openDaftar: true });
  };
  handleChangeUser = (e, { name, value }) => {
    const { register } = this.state;
    register[name] = value;
    this.setState({ register });
    this.validate();
  };
  handleRegisterUser = () => {
    const {
      name,
      email,
      username,
      password,
      confirmPassword,
    } = this.state.register;
    let err = this.validate();
    if (!err) {
      this.setState({ loadingUser: true });
      fetch(
        baseUrl('register'),
        bodyRequest('POST', 'application/json', {
          name: name,
          email: email,
          username: username,
          password: password,
          password_confirmation: confirmPassword,
        })
      )
        .then(result => {
          //Here body is not ready yet, throw promise
          if (!result.ok) throw result;
          return result.json();
        })
        .then(() => {
          // Successful request processing
          this.setState({ loadingUser: false, openDaftar: false });
        })
        .catch(() => {
          this.setState({
            loadingUser: false,
            modalOpen: true,
            contentAlert: `Failed to register, maybe the data has already taken or data not correcty.  Username at least have 6 character `,
            headerAlert: 'Error',
          });
        });
    }
  };

  onClickPassIcon = (e, { name }) => {
    let icon = `${name}Icon`;
    let show = `${name}Show`;
    if (this.state[show]) {
      this.setState({
        [icon]: 'eye slash',
        [show]: false,
        typePassword: 'password',
      });
    } else {
      this.setState({
        [icon]: 'eye',
        [show]: true,
        typePassword: 'text',
      });
    }
  };

  onClickConfirmPassIcon = (e, { name }) => {
    let icon = `${name}Icon`;
    let show = `${name}Show`;
    if (this.state[show]) {
      this.setState({
        [icon]: 'eye slash',
        [show]: false,
        typeConfirmPassword: 'password',
      });
    } else {
      this.setState({
        [icon]: 'eye',
        [show]: true,
        typeConfirmPassword: 'text',
      });
    }
  };

  handleCloseAlert = () => {
    this.setState({ modalOpen: false });
  };

  validate = () => {
    let isError = false;
    const { register } = this.state;
    let error1 = handleValidation(register, fieldToValidate);
    let errors = { ...error1 };
    isError = !_.isEmpty(errors);
    this.setState({
      errors: {
        ...errors,
      },
    });
    return isError;
  };

  render() {
    const {
      openDropdown,
      openDaftar,
      register,
      loadingUser,
      typePassword,
      passwordIcon,
      typeConfirmPassword,
      confirmPasswordIcon,
      modalOpen,
      contentAlert,
      headerAlert,
      errors,
    } = this.state;
    const { haveToken } = this.props;
    return (
      <React.Fragment>
        {haveToken ? (
          <div>
            <Link to="/Profile">
              <Button
                icon="user"
                circular
                style={{
                  color: 'black',
                  backgroundColor: 'white',
                  marginBottom: '-1em',
                }}
              />
            </Link>
          </div>
        ) : (
          <Dropdown
            icon={'user'}
            style={{ color: 'black', backgroundColor: 'white' }}
            className="icon"
            onOpen={this.openSegment}
          >
            <Dropdown.Menu open={openDropdown}>
              <Input
                placeholder="Username"
                onChange={this.handleChange}
                name="username"
              />
              <Input
                placeholder="Password"
                onChange={this.handleChange}
                name="password"
              />
              <Button
                style={{ color: 'blue', backgroundColor: 'white' }}
                content="Daftar"
                onClick={this.handleOpenDaftar}
              />
              <Button primary onClick={this.handleSubmit} content="Masuk" />
            </Dropdown.Menu>
          </Dropdown>
        )}

        <ModalDaftar
          open={openDaftar}
          close={this.handleCloseDaftar}
          handleRegisterUser={this.handleRegisterUser}
          register={register}
          handleChangeUser={this.handleChangeUser}
          loading={loadingUser}
          typePassword={typePassword}
          onClickPassIcon={this.onClickPassIcon}
          passwordIcon={passwordIcon}
          typeConfirmPassword={typeConfirmPassword}
          onClickConfirmPassIcon={this.onClickConfirmPassIcon}
          confirmPasswordIcon={confirmPasswordIcon}
          errorInformation={errors}
        />
        <ModalAlert
          openModal={modalOpen}
          handleClose={this.handleCloseAlert}
          header={headerAlert}
          content={contentAlert}
          nameButton="OK"
        />
      </React.Fragment>
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
    postLoginAction,
  }
)(Login);
