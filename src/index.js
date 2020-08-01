import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; // eslint-disable-line

// Component
import App from './containers/App';

// Global /style
import './assets/styles/Global.scss';

const store = createStore(); // eslint-disable-line

ReactDOM.render(<App />, document.querySelector('.App'));