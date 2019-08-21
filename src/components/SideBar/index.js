import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import User from '../Login/index';

import { connect } from 'react-redux';
class sidebar extends React.Component {
  state = {
    activeItem: 'home',
    searchInput: '',
    changePage: false,
    gotoLink: '',
    haveToken: false,
  };
  componentDidMount() {
    const getToken = localStorage.getItem('tokenadmin');
    if (getToken) {
      this.setState({ haveToken: true });
    }
  }

  handleSearchInput = e => this.setState({ searchInput: e.target.value });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleOnClickSearch = () => {
    this.changePage();
  };
  changePage = () => {
    const { searchInput } = this.state;
    let link = `/Search/${searchInput}`;
    this.setState({ changePage: true, gotoLink: link });
  };
  rendered = () => {
    const { activeItem } = this.state;
    return (
      <div
        style={{
          marginTop: '2em',
          padding: '10px',
          boxShadow: '5px 5px 10px 	rgb(192,192,192)',
        }}
      >
        <Menu pointing secondary>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Link to="/Home">PC</Link>
          </Menu.Item>
          <Menu.Item
            name="mobile"
            active={activeItem === 'mobile'}
            onClick={this.handleItemClick}
          >
            Mobile
          </Menu.Item>
          <Menu.Item
            name="eSport"
            active={activeItem === 'eSport'}
            onClick={this.handleItemClick}
          >
            e Sport
          </Menu.Item>
          <Image
            src={require('../../assets/digimdigim.png')}
            style={{
              width: '90px',
              height: '40px',
              marginLeft: '20em',
              marginTop: '1em',
            }}
          />
          <Menu.Menu>
            <div className="ui right aligned category search item">
              <div className="ui transparent icon input">
                <form onSubmit={this.handleOnClickSearch}>
                  <input
                    className="prompt"
                    type="text"
                    placeholder="Search ..."
                    style={{
                      marginLeft: '10em',
                      border: 'none',
                    }}
                    onChange={this.handleSearchInput}
                  />
                  <i
                    className="search link icon"
                    onClick={this.handleOnClickSearch}
                  />
                </form>
              </div>
              <div className="results" />
            </div>
          </Menu.Menu>
          <Menu.Item position="right">
            <User haveToken={this.state.haveToken} />
          </Menu.Item>
          <h3
            style={{ color: '#b92025', marginLeft: '3em', fontWeight: 'bold' }}
          >
            DIGIMABAR
          </h3>
        </Menu>
      </div>
    );
  };
  render() {
    const { changePage, gotoLink } = this.state;
    if (changePage) {
      return (
        <div>
          {this.rendered()}
          <Redirect to={gotoLink} />;
        </div>
      );
    }
    return this.rendered();
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
  {}
)(sidebar);
