import React from 'react'
import './menu.css'

export default class Menu extends React.Component{
    render(){
        return(
    <div className="sidenav">
  <a href="/department">Department</a>
  <a href="category">Category</a>
  <a href="/role">Role</a>
  <a href="/employee">EmployeeList</a>
</div>
        )
    }
}