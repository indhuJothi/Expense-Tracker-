import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routing from  '../src/components/routing/routing'
import Data from '../src/components/table/datasentfile'
import FormDialog from './components/table/editdetails';
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    {/* <Routing/> */}
    <Data/>
    {/* <FormDialog/> */}
    {/* <Router>
    <Header/>
    </Router>
     */}
 
   
  
   
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
