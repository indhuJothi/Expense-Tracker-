import React from 'react'
import data from '../mockdata.json'
import FullFeaturedCrudGrid from '../table'
export default class EmployeeTable extends React.Component{
    render(){
        const rowsproperty =[ 
          { field: 'id', 
          headerName: 'id', 
          width: 180,
           editable: true },
        { field: 'EmployeeName', headerName: 'EmployeeName',width:180, editable: true },
        {
          field: 'Department',
          headerName: 'Department',
          width: 180,
    
          editable: true,
        },
        {
          field: 'Role',
          headerName: 'Role',
          width: 220,
          editable: true,
        },
    
        {
          field: 'Email',
          headerName: 'Email',
          width: 220,
          editable:true
        },
        {
          field: 'Username',
          headerName: 'Username',
          width: 220,
          editable: true,
        },
        {
          field: 'Password',
          headerName: 'Password',
          width: 220,
          editable: true,
        }
        
      ]
        return(
      
          <FullFeaturedCrudGrid names={rowsproperty}/>
    
        )
    }
}