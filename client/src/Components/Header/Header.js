import React from "react";
import logo from './logo.png'
import './Header.css'
function Header() {
    return(
    <div className="container">
        <img src={logo}></img>
        <p className="title">Reimbursement Requisition System</p>
        <div className="profile">Profile</div>
    </div>
    )
}

export default Header

