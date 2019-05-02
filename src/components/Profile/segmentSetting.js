import React, { Component } from 'react';
import { Grid, Tab } from 'semantic-ui-react';
import Account from './settingAccount';
import { style } from './styles';
class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panes: [
        {
          menuItem: 'Notifikasi',
          render: () => (
            <Tab.Pane attached={false} style={style.border}>
              No Record Data
            </Tab.Pane>
          ),
        },
        {
          menuItem: 'Post Terakhir',
          render: () => (
            <Tab.Pane attached={false} style={style.border}>
              No Record Data
            </Tab.Pane>
          ),
        },
        {
          menuItem: 'Pengaturan',
          render: () => (
            <Tab.Pane attached={false} style={style.border}>
              <Account />
            </Tab.Pane>
          ),
        },
      ],
      tabActive: 'Pengaturan',
    };
  }

  render() {
    const { panes } = this.state;
    return (
      <Grid>
        <Grid.Column width={15}>
          <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default Setting;
