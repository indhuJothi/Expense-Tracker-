
import React from 'react'
import role from '../user/role/role-data.json'
import BasicTable from './table'
export default class Roletable extends React.Component{
    componentDidMount(){
       localStorage.setItem("Roledetails",JSON.stringify(role))
        // localStorage.removeItem("editedcolumns")
        let alreadyaditeddata
        if(localStorage.getItem("editedcolumns")){
            alreadyaditeddata = JSON.parse(localStorage.getItem("editedcolumns")||"[]")
            alreadyaditeddata.map((item:any)=>{
                if(item.Category)
                {
                    localStorage.removeItem('editedcolumns')

                }
            })
        }
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
    {localStorage.getItem("Roledetails")!==null?columns=JSON.parse(localStorage.getItem("Roledetails")||"{}"):columns=role}
       return(
          
       
        <BasicTable rows={rows} columns={columns}/>
       
       )
   }
}