import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import User from '../Login/index';
class sidebar extends React.Component {
  renderSideBar = () => {
    return (
      <Sidebar
        as={Menu}
        animation="top"
        icon="labeled"
        visible
        style={{ zIndex: '99999' }}
      >
        <Menu.Item>
          <Link to="/Home">PC</Link>
        </Menu.Item>
        <Menu.Item as="a">Mobile</Menu.Item>
        <Menu.Item as="a">e Sport</Menu.Item>
        <Menu.Item>
          <Link to="/Video">Video</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/Detail-Articel">Detail Articel</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/Detail-Articel-Jurus">Detail Articel Jagoan Jurus</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/Detail-Articel-Panduan">
            Detail Articel Jagoan Panduan
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/Profile">Profile</Link>
        </Menu.Item>

        <Menu.Item>
          <User />
        </Menu.Item>
      </Sidebar>
    );
  };

  render() {
    return <div>{this.renderSideBar()}</div>;
  }
}
export default sidebar;
