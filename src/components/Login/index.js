import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Input, Button } from 'semantic-ui-react';
import { postLoginAction } from '../../action/authAction';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        username: '',
        password: '',
      },
      openDropdown: true,
    };
  }

  handleChange = (e, { name, value }) => {
    const { login } = this.state;
    login[name] = value;
    this.setState({ login: login });
    //this.validate();
  };
  handleSubmit = () => {
    // const { login } = this.state;
    //this.props.postLoginAction(login);
    fetch('http://api-digimdigim.neotenstudio.com/login', {
      method: 'POST',
      body: JSON.stringify({
        username: 'username1',
        password: 'password1',
      }),
    })
      .then(response => response.json())
      .then(data => this.setState({ data }));
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
        //onClick={this.openSegment}
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
          <Button style={{ color: 'blue', backgroundColor: 'white' }}>
            Daftar
          </Button>
          <Button primary onClick={this.handleSubmit}>
            Masuk
          </Button>
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
