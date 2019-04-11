import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router-dom';
import Home from './pages/home';
const HOMEWITHROUTER = withRouter(Home);

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          background: 'white',
        }}
      >
        <Switch>
          <Route exact path="/" component={HOMEWITHROUTER} />
          <Redirect to="/ComingSoon" />
        </Switch>
      </div>
    );
  }
}
export default App;
