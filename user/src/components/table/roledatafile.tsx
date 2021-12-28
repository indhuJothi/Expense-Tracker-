import React from 'react'
import role from '../user/role/role-data.json'
import BasicTable from './table'
export default class Roletable extends React.Component{
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
    let columns= role
       return(
        <BasicTable rows={rows} columns={columns}/>
       )
   }
}