import React from  'react'
import data from '../user/category-data.json'
import BasicTable from './table'

class Data extends React.Component{
    render(){
        const rows=[
            {
                heading:"id",
                property:"id"
            },
            {
                heading:"Category",
                property:"Category"
            },
            {
                heading:"MinimumLimit",
                property:"MinimumLimit"
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
        let columns=data
        return(
            <BasicTable rows={rows} columns ={columns}/>
        )
    }
}

export default Data