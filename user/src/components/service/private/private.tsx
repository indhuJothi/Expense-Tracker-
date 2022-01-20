
import {  Navigate,Outlet } from "react-router-dom";



export default function PrivateRoute() {
    
   return localStorage.getItem("username")!==null ? <Outlet/>:<Navigate to="/"/>
         
   
  }

  export function PreventLogin(){
   
   return localStorage.getItem("username")===null ? <Outlet/>:<Navigate to="/homepage"/>
         
  }

  export function Adminprivate(){
     return localStorage.role==="Admin"?<Outlet/>:<Navigate to="/homepage"/>
  }

  export function Managerprivate(){
     return localStorage.role==="Manager"?<Outlet/>:<Navigate to="/homepage"/>
  }