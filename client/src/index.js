import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Department from '../src/Components/Department/Department'
import { BrowserRouter as Router } from 'react-router-dom'
import Role from './Components/Role/Role';
import Category from './Components/Category/category';
import Login from './Components/Login/Login';
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>

    {/* <App/> */}
    <Router>
      <Department/>
      {/* <Role/> */}
      {/* <Category /> */}
      {/* <Login/> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
