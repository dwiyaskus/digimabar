import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router-dom';
import { Segment, Sidebar } from 'semantic-ui-react';
import Home from './pages/home';
import SidebarMenu from './components/SideBar/';
import Video from './components/Video/';
import DetailArticel from './components/DetailArticel/';
import DetailArticelJagoanJurus from './components/DetailArticelJagoanJurus/';
import DetailArticeljagoanPanduan from './components/DetailArticelJagoanPanduan/';
const Styles = {
  Pusher: {
    marginTop: '3em',
  },
};
const HOMEWITHROUTER = withRouter(Home);
const VIDEOWITHROUTER = withRouter(Video);
const DETAILARTICELWITHROUTER = withRouter(DetailArticel);
const DETAILARTICEJURUSLWITHROUTER = withRouter(DetailArticelJagoanJurus);
const DETAILARTICELPANDUANWITHROUTER = withRouter(DetailArticeljagoanPanduan);

class App extends React.Component {
  render() {
    return (
      <Sidebar.Pushable as={Segment} style={{ zIndex: '99999' }}>
        <SidebarMenu />
        <Sidebar.Pusher style={Styles.Pusher}>
          <Segment style={{ border: 'none' }}>
            <Switch>
              <Route exact path="/" component={HOMEWITHROUTER} />
              <Route exact path="/Home" component={HOMEWITHROUTER} />
              <Route exact path="/Video" component={VIDEOWITHROUTER} />
              <Route
                exact
                path="/Detail-Articel"
                component={DETAILARTICELWITHROUTER}
              />
              <Route
                exact
                path="/Detail-Articel-Panduan"
                component={DETAILARTICELPANDUANWITHROUTER}
              />
              <Route
                exact
                path="/Detail-Articel-Jurus"
                component={DETAILARTICEJURUSLWITHROUTER}
              />
              <Redirect to="/ComingSoon" />
            </Switch>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
    // }
  }
}
export default App;
