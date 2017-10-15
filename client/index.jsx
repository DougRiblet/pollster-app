import { render } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/root_reducer';
import logger from 'redux-logger';
import promise from 'redux-promise';

const store = createStore(reducer, {}, applyMiddleware(logger, promise));

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
