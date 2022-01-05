import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routing from  './components/common/routing/routing'
import Data from './components/pages/category/category'
import Table from './components/pages/role/role'
import FormDialog from './components/common/table/editdetails';
import { BrowserRouter as Router } from 'react-router-dom'
import EmployeeTable from  '../src/components/user/employeee/usertable'
import  RouteTable from './components/pages/route'

ReactDOM.render(
  <React.StrictMode>
    <Routing/>
    {/* <Data/> */}
    {/* <EmployeeTable/> */}
    {/* <Table/> */}
    {/* <FormDialog/> */}
    {/* <Router>
    <Header/>
    </Router>
     */}
     {/* <RouteTable/> */}
 
   
  
   
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
