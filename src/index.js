import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';


import   './global.js'

import Appointment from './Appointment';
import Product from './Product';
import ManageProduct from './ManageProduct';
import Counter from './Counter';
import { Provider } from 'react-redux';
import store from './store/store';
import UserR from './UserR';
import MyUser from './MyUser';
import MyCounterSaga from './MyCounterSaga';
import SagaUser from './SagaUser';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <SagaUser/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
