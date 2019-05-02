import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import User from '../Login/index';
class sidebar extends React.Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
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
              marginLeft: '30em',
              marginTop: '1em',
            }}
          />
          <h3
            style={{ color: '#b92025', marginLeft: '10em', fontWeight: 'bold' }}
          >
            DIGIMABAR
          </h3>

          <Menu.Menu position="right">
            <div className="ui right aligned category search item">
              <div className="ui transparent icon input">
                <input
                  className="prompt"
                  type="text"
                  placeholder="Search animals..."
                />
                <i className="search link icon" />
              </div>
              <div className="results" />
            </div>
          </Menu.Menu>
          <Menu.Item>
            <User />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default sidebar;
