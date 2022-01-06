import React from "react";
import { Route, Navigate,Outlet } from "react-router-dom";


export default function PrivateRoute() {
    
   return localStorage.getItem("username") ? <Outlet/>:<Navigate to="/"/>
  }