import React, { Component } from 'react';
// import { Grid, Image } from 'semantic-ui-react';
import GridImages from '../components/home/gridImage';
//import Digimabar from '../components/home/digimabar';
import Test from '../components/home/test';
import Card from '../components/home/card';

class home extends Component {
  render() {
    return (
      <React.Fragment>
        <GridImages />
        {/* <Digimabar /> */}

        <Test />
      </React.Fragment>
    );
  }
}

export default home;
