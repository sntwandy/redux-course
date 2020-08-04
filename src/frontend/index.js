import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router'
import reduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

// Component
import App from './routes/App';
import reducers from './reducers';

// Global /style
import './assets/styles/Global.scss';

const history = createBrowserHistory();
const preloadedState = window.__PRELOADED_STATE__;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(reduxThunk)));

delete window.__PRELOADED_STATE__;

ReactDOM.hydrate(
  <Provider store={store}>
  <Router history={history}>
      <App />
  </Router>
  </Provider>,
  document.getElementById('app')
);