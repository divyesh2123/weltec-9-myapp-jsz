import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyDisplay from './MyDisplay';
import MyCounter from './MyCounter';
import Employee from './Employee';
import { User } from './User';
import Registraion from './Registraion';
import Login from './Login';
import ManageEmployee from './ManageEmployee';
import ListAccount from './ListAccount';
import   './global.js'
import ListWithAuthorization from './ListWithAuthorization';
import FormikWithValidation from './FormikWithValidation';
import BasicWithoutField from './BasicWithoutField';
import SignupForm from './FormikWithHook';
import EmployeeWithYup from './EmployeeWithYup';
import MyEmp from './MyEmp';
import DynamicForm from './DynamicForm';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DynamicForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
