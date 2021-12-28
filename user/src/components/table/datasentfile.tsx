import React from  'react'
import data from '../user/category/category-data.json'
import BasicTable from './table'

class Data extends React.Component{
    componentDidMount(){
        localStorage.setItem("datas",JSON.stringify(data))
    }
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
        let columns 
        localStorage.getItem("datas")!==null?columns=JSON.parse(localStorage.getItem("datas")||'{}'):columns=data
        return(
            <BasicTable rows={rows} columns ={columns}/>
        )
    }
}

export default Data