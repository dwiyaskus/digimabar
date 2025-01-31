import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './config/store';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

const APPWITHROUTER = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <APPWITHROUTER />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
