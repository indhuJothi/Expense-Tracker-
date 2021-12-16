import React from "react";
import logo from './logo.png'
import { AppBar, Toolbar, Typography, makeStyles, Button, MenuItem } from "@material-ui/core"
import { Link } from "react-router-dom";
import './Header.css'

const headersData = [
  {
    label: "My Profile",
    href: "/profile"
  },
  {

    label: "Log Out",
    href: "/"
  }
]

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

const getMenuButtons = () => {
  return headersData.map(({ label, href }) => {
    return (
      <Button
        {...{
          key: label,
          color: "inherit",
          to: href,
          component: Link,

        }}
      >
        {label}
      </Button>
    );
  });
};


function Header() {
  const { header, logoStyle, logoImg, toolbar, title, menuButton } = useStyles()
  const displayTitle = () => {
    return <Toolbar className={toolbar}>
      {AspireLogo}
      <div className={menuButton}>{getMenuButtons()}</div>
    </Toolbar>
  }

  const AspireLogo = (
    <Typography variant="h5" component="h1" className={logoStyle}>
      <img src={logo} className={logoImg}></img>
      <p className={title}>Reimbursement Requisition System</p>
      {/* <div className={profile}>Profile</div> */}
    </Typography>
  )
  return (
    <AppBar className={header}>{displayTitle()}</AppBar>
  )
}

export default Header

