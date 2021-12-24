import React from "react";
import logo from './logo.png'
import { AppBar, Toolbar, Typography, makeStyles, Button, MenuItem } from "@material-ui/core"
import { Link } from "react-router-dom";
import './header.css'



const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "white",
    width: "100%",
    display: "inline"
  },
  logoImg: {
    width: "80px",
    borderRight: "2px solid grey"
  },
  logoStyle: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 90,
    color: "black",
    textAlign: "left",
    display: "inline"
  },

  title: {
    marginLeft: "6px",
    display: "inline",
    width: "1000px",
    fontSize: "large",
  },

  profile: {
    marginLeft: "1000px",
    display: "inline"

  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    color: "Black"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}))

function gotologin(){
    localStorage.removeItem("username")
    window.location.replace('/')
}

function Header() {
  const { header, logoStyle, logoImg, toolbar, title, menuButton } = useStyles()
  const displayTitle = () => {
    return <Toolbar className={toolbar}>
      {AspireLogo}
     {localStorage.getItem("username") !==null?
     <div className={menuButton}>
         <>{localStorage.username}</>
         
     <Button>MyProfile</Button>
     <Link to='/category'>Logout</Link>
    </div>:<div></div>
     }
    </Toolbar>
  }

  const AspireLogo = (
    <Typography variant="h5" component="h1" className={logoStyle}>
      <img src={logo} className={logoImg}></img>
      <p className={title}>Reimbursement Requisition System</p>
    </Typography>
  )
  return (
    <AppBar className={header}><Toolbar className={toolbar}>
    {AspireLogo}
   {localStorage.getItem("username") !==null?
   <div className={menuButton}>
       <>{localStorage.username}</>
       
   <Button>MyProfile</Button>
   <Button onClick={()=>{gotologin()}}>Logout</Button>
  </div>:<div></div>
   }
  </Toolbar></AppBar>
  )
}

export default Header


