import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from '../components/App';
import Home from '../containers/Home';
import Add from '../containers/Add';


export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <IndexRoute path="/add"  component={Add} />
  </Route>
</Router>
);
