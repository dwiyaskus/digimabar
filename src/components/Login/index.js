import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dropdown, Input, Button } from 'semantic-ui-react';
import { postLoginAction } from '../../action/authAction';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        username: 'username1',
        password: 'password1',
      },
      openDropdown: false,
    };
  }
  static propTypes = {
    postLoginAction: PropTypes.func,
  };

  handleChange = (e, { name, value }) => {
    const { login } = this.state;
    login[name] = value;
    this.setState({ login: login });
    //this.validate();
  };
  handleSubmit = () => {
    // const { username, password } = this.state.login;
    this.props.postLoginAction(this.state.login);
    // fetch('http://api-digimdigim.neotenstudio.com/login', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    //   body: JSON.stringify({ username, password }),
    // });
    // .then(response => response.json())
    // .then(data => this.setState({ data }));
  };
  openSegment = () => {
    const { openDropdown } = this.state;
    this.setState({ openDropdown: !openDropdown });
  };
  render() {
    const { openDropdown } = this.state;
    return (
      <Dropdown
        icon={'user'}
        style={{ color: 'black', backgroundColor: 'white' }}
        className="icon"
        open={openDropdown}
        onClick={this.openSegment}
      >
        <Dropdown.Menu>
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
          />
          <Button primary onClick={this.handleSubmit} content="Masuk" />
        </Dropdown.Menu>
      </Dropdown>
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
