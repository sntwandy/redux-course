import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

// Component
import App from './containers/App';

// Global /style
import './assets/styles/Global.scss';

// Initial state
const initialState = {
  "users": [],
  "posts": [],
  "loading": false,
  "error": ""
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.App'));