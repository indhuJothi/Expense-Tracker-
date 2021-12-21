import React from 'react'
import data from '../mockdata.json'
import FullFeaturedCrudGrid from '../table'
export default class EmployeeTable extends React.Component{
    render(){
        console.log(data)
        return(
          <div>
          <FullFeaturedCrudGrid/>
            
          </div>
        )
    }
}