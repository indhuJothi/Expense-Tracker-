import React from "react";
import Header from "../Header/Header";
import LoginForm from "./LoginForm";

class Login extends React.Component{
    render(){
        return(
            <>
            <Header/>
            <LoginForm/>
            </>
         
        )
    }
}

export default Login