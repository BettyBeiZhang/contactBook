import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from '../components/App';
import Home from '../modules/Home';
import Add from '../modules/Add';
import Edit from '../modules/Edit';


export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="add"  component={Add} />
    <Route path="edit" component={Edit} />
  </Route>
</Router>
);
