import React from 'react';
import {Router, Route, browserHistory, indexRoute} from 'react-router';

import App from '../components/App';
import Home from '../containers/Home';


export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
</Router>
);