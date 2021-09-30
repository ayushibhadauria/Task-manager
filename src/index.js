import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store'
import {Provider} from 'react-redux'
import { Router, Route } from 'react-router-dom';
import  history from './history'

console.log(store.getState());

ReactDOM.render(
  <Provider store = {store} >
    <Router history = {history}>
      <Route component = {App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
