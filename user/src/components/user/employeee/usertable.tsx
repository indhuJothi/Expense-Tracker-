import React from 'react'
import data from '../login/mockdata.json'
import FullFeaturedCrudGrid from './table'
export default class EmployeeTable extends React.Component{
    render(){
        const rowsproperty =[ 
          { field: 'id', 
          headerName: 'id', 
          width: 50,
           editable: true },
        { field: 'EmployeeName', headerName: 'EmployeeName',width:180, editable: true },
        {
          field: 'Department',
          headerName: 'Department',
          width: 50,
    
          editable: true,
        },
        {
          field: 'Role',
          headerName: 'Role',
          width: 50,
          editable: true,
        },
    
        {
          field: 'Email',
          headerName: 'Email',
          width: 50,
          editable:true
        },
        {
          field: 'Username',
          headerName: 'Username',
          width: 50,
          editable: true,
        },
        {
          field: 'Password',
          headerName: 'Password',
          width: 50,
          editable: true,
        }
        
      ]
        return(
      
          <FullFeaturedCrudGrid names={rowsproperty}/>
    
        )
    }
}