import React, { Component } from 'react';
// import { Grid, Image } from 'semantic-ui-react';
import GridImages from '../components/home/Home';
//import Digimabar from '../components/home/digimabar';
import Card from '../components/home/card';
class home extends Component {
  render() {
    return (
      <React.Fragment>
        <GridImages />
        <Card />
      </React.Fragment>
    );
  }
}

export default home;
// import React from 'react';
// import moment from 'moment';
// import { Calendar } from 'react-datepicker2';
// export default class component extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: moment(),
//       isGregorian: true,
//     };

//     this.disabledRanges = [
//       {
//         color: 'brown',
//         // start: moment().add(-1, 'days'),
//         // end: moment().add(1, 'days'),
//         start: moment(new Date()),
//         end: moment(new Date()),
//       },
//       {
//         color: '#00BCD4',
//         start: moment(),
//         end: moment().add(3, 'days'),
//       },
//       {
//         color: '#FF9800',
//         start: moment().add(1, 'days'),
//         end: moment().add(6, 'days'),
//       },
//     ];
//   }
//   render() {
//     return (
//       <div>
//         <Calendar
//           ranges={this.disabledRanges}
//           value={this.state.value}
//           isGregorian={this.state.isGregorian}
//           inputFormat="YYYY-M-D"
//           inputJalaaliFormat="jYYYY-jM-jD"
//           onChange={value => this.setState({ value })}
//         />
//         <br />
//         <button
//           onClick={() =>
//             this.setState({ isGregorian: !this.state.isGregorian })
//           }
//         >
//           {this.state.isGregorian ? 'switch to jalaali' : 'switch to gregorian'}
//         </button>
//       </div>
//     );
//   }
// }
