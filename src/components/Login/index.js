import React from 'react';
import { Dropdown, Input, Button } from 'semantic-ui-react';
class ButtonDropdown extends React.Component {
  render() {
    return (
      <Dropdown
        icon={'user'}
        button
        style={{ color: 'black', backgroundColor: 'white' }}
        className="icon"
      >
        <Dropdown.Menu>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button style={{ color: 'blue', backgroundColor: 'white' }}>
            Daftar
          </Button>
          <Button primary>Masuk</Button>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default ButtonDropdown;
