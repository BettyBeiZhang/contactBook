import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {routes}
  </Provider>
  , document.getElementById('root'));
