import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dropdown, Input, Button } from 'semantic-ui-react';
import { postLoginAction } from '../../action/authAction';
import { baseUrl, bodyRequest } from '../../scripts/fetchCall';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        username: '',
        password: '',
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

    // this.props.postLoginAction(this.state.login);
    // fetch('http://api-digimdigim.neotenstudio.com/login', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    //   body: JSON.stringify({ username: username, password: password }),
    // })
    //   .then(result => {
    //     //Here body is not ready yet, throw promise
    //     if (!result.ok) throw result;
    //     return result.json();
    //   })
    //   .then(jsonObject => {
    //     // Successful request processing
    //     localStorage.setItem(
    //       'tokenadmin',
    //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGktZGlnaW1kaWdpbS5uZW90ZW5zdHVkaW8uY29tXC9sb2dpbiIsImlhdCI6MTU2MjIyMjczMiwiZXhwIjoxNTYyMjI5OTMyLCJuYmYiOjE1NjIyMjI3MzIsImp0aSI6IkVOWGhEdFJ5QU5ySXdrT2kiLCJzdWIiOjMsInBydiI6ImY2NGQ0OGE2Y2VjN2JkZmE3ZmJmODk5NDU0YjQ4OGIzZTQ2MjUyMGEifQ.ntg0PbVhgSid3PyKgrZzcvVGeAuCw1G_mOSytRvrWHQ'
    //     );
    //     // localStorage.setItem('expiredtokenadmin', jsonObject.expires);
    //     // localStorage.setItem('companycode', companyCode);
    //     // window.location = '/Dashboard';
    //     // setLoading(false);
    //   })
    //   .catch(error => {
    //     //Here is still promise
    //     // error.json().then(body => {
    //     //   //Here is already the payload from API
    //     //   // setContentInformation(body.error_description);
    //     //   // setOpenModalInformation(true);
    //     //   // setLoading(false);
    //     // });
    //   });
    // // .then(response => response.json())
    // // .then(data => this.setState({ data }));
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
        // open={openDropdown}
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
