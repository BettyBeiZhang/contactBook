import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import reducers from "./reducers";
import routes from './router/index';


const myStore = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={myStore(reducers)}>
      {routes}
  </Provider>
  , document.getElementById('root'));
