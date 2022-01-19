import React from "react";
import { Route, Navigate,Outlet } from "react-router-dom";
import Loginform from "../../pages/login/login-form";


export default function PrivateRoute() {
    
   return localStorage.getItem("username")!==null ? <Outlet/>:<Navigate to="/"/>
         
   
  }

  export function PreventLogin(){
     let pathname = window.location.pathname
   return localStorage.getItem("username")===null ? <Outlet/>:<Navigate to="/homepage"/>
         
  }

  export function Adminprivate(){
     return localStorage.role==="Admin"?<Outlet/>:<Navigate to="/homepage"/>
  }

  export function Managerprivate(){
     return localStorage.role==="Manager"?<Outlet/>:<Navigate to="/homepage"/>
  }