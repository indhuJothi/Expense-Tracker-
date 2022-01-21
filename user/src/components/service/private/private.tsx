
import {  Navigate,Outlet } from "react-router-dom";



export default function PrivateRoute() {
    
   return localStorage.getItem("authtoken")!==null ? <Outlet/>:<Navigate to="/"/>
         
   
  }

  export function PreventLogin(){
 
   return localStorage.getItem("authtoken")===null ? <Outlet/>:<Navigate to="/homepage"/>
         
  }

  export function Adminprivate(){
   let userdetails= JSON.parse(localStorage.getItem("userdetails")||"{}")
    console.log(userdetails.Role)
     return userdetails.Role==="Admin"?<Outlet/>:<Navigate to="/homepage"/>
  }

  export function Managerprivate(){
   let userdetails= JSON.parse(localStorage.getItem("userdetails")||"{}")
  
  
     return userdetails.Role==="Manager"?<Outlet/>:<Navigate to="/homepage"/>
  }