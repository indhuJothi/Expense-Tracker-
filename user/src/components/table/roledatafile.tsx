import React from 'react'
import role from '../user/role/role-data.json'
import BasicTable from './table'
export default class Roletable extends React.Component{
    componentDidMount(){
       localStorage.setItem("roledetails",JSON.stringify(role))
       localStorage.removeItem("Columns")
    }
   render(){
    const rows=[
        {
            heading:"id",
            property:"id"
        },
        {
            heading:"Role",
            property:"Role"
        },
     
        {
            heading:"Edit",
            property:"Edit"
        },
        {
            heading:"Delete",
            property:"Delete"
        }
    ]
    let columns
    {localStorage.getItem("roledetails")!==null?columns=JSON.parse(localStorage.getItem("roledetails")||"{}"):columns=role}
       return(
        <BasicTable rows={rows} columns={columns}/>
       )
   }
}