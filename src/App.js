import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { Switch, Redirect } from 'react-router-dom';
import { Sidebar } from 'semantic-ui-react';
import Home from './pages/home';
import SidebarMenu from './components/SideBar/';
import Video from './components/Video/';
import DetailArticel from './components/DetailArticel/';
import DetailArticelJagoanJurus from './components/DetailArticelJagoanJurus/';
// import DetailArticeljagoanPanduan from './components/DetailArticelJagoanPanduan/';
import Profile from './components/Profile/';
import SearchPage from './components/SearchPage/SearchPage';

const HOMEWITHROUTER = withRouter(Home);
const VIDEOWITHROUTER = withRouter(Video);
const DETAILARTICELWITHROUTER = withRouter(DetailArticel);
const DETAILARTICEJURUSLWITHROUTER = withRouter(DetailArticelJagoanJurus);
// const DETAILARTICELPANDUANWITHROUTER = withRouter(DetailArticeljagoanPanduan);
const PROFILEWITHROUTER = withRouter(Profile);
const SEARCHPAGEWITHROUTER = withRouter(SearchPage);

class App extends React.Component {
  componentDidMount() {
    localStorage.setItem(
      'tokenadmin',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGktZGlnaW1kaWdpbS5uZW90ZW5zdHVkaW8uY29tXC9sb2dpbiIsImlhdCI6MTU2MjIyMjczMiwiZXhwIjoxNTYyMjI5OTMyLCJuYmYiOjE1NjIyMjI3MzIsImp0aSI6IkVOWGhEdFJ5QU5ySXdrT2kiLCJzdWIiOjMsInBydiI6ImY2NGQ0OGE2Y2VjN2JkZmE3ZmJmODk5NDU0YjQ4OGIzZTQ2MjUyMGEifQ.ntg0PbVhgSid3PyKgrZzcvVGeAuCw1G_mOSytRvrWHQ'
    );
  }

  render() {
    return (
      <div style={{ backgroundColor: '#fafafa', paddingTop: '3em' }}>
        <div
          style={{
            width: '85em',
            marginLeft: '5.5em',

            backgroundColor: 'white',
            boxShadow: 'rgb(192, 192, 192) 5px 5px 20px',
          }}
        >
          <Sidebar.Pushable>
            <SidebarMenu />
            <Sidebar.Pusher style={{ margin: '4em' }}>
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
                  component={DETAILARTICEJURUSLWITHROUTER}
                />
                <Route
                  exact
                  path="/Detail-Articel-Jurus"
                  component={DETAILARTICEJURUSLWITHROUTER}
                />
                <Route exact path="/Profile" component={PROFILEWITHROUTER} />
                <Route exact path="/Search" component={SEARCHPAGEWITHROUTER} />
                <Redirect to="/ComingSoon" />
              </Switch>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </div>
    );
    // }
  }
}
export default App;
