import { Button } from '@mui/material'
import React from 'react'
import Header from '../../common/header/header'
import BasicTable from '../../common/table/table'

let rows=[
    {
        heading: "Username",
        property: "Username"  
    },
    {
        heading:"Category",
        property:"Category"
    },
        
    {
        heading:"Proof",
        property:"FileUpload"

        },
        {
         heading:"Date",
         property:"Date"
        },
        {
        heading:"Department",
        property:"Department"
        },
        {
            heading:"Approval",
            property:"Approval"
        },{
            heading:"Rejection",
            property:"Rejection"
        }
]

let columns=JSON.parse(localStorage.getItem("reimbursedetails")||"[]")
console.log(columns)
type stateprop={
    showTable:boolean
}

export default class ManagerPage extends React.Component<{},stateprop>{
    constructor(props:any){
    super(props)
      this.state={
          showTable:false
      }
    }
   
    appove(data:any){
   console.log(data)
    }

    render(){
        return(
            <>
            <Header/>
            <Button  onClick={()=>{this.setState({
                showTable:true
            })}} variant="contained" style={{marginTop:120,marginLeft:40}}>My Approvals</Button>
            {this.state.showTable && <BasicTable rows={rows} approve={this.appove} columns={columns}/>}
            
            </>
            
        )
    }
}