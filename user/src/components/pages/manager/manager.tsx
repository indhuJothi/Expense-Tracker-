import { Button } from '@mui/material'
import React from 'react'
import Header from '../../common/header/header'
import ManagerTable from '../../common/table/managertable/manager-table'
import BasicTable from '../../common/table/table'

let columns=[
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
   
    approve(data:any){
        console.log(data)
      let reimbursedata = JSON.parse(localStorage.getItem("reimbursedetails")||"[]")
      let approved: { Username: any; Category: any; Date:any,Department: any; Amount: any; Result: string }[]=[]
      let approveRequest
      let approvedDetails = JSON.parse(localStorage.getItem("approved")||"[]")
      if(localStorage.getItem("approved")!==null){
     
         
         approvedDetails.map((res:any)=>{
             console.log(data)
             console.log(res)
            if((data.Username===res.Username && data.Date==res.Date && data.Category===res.Category))
            {
              
                approveRequest={
                    Username:data.Username,
                    Category:data.Category,
                    Department:data.Department,
                    Amount:data.Amount,
                    Date:data.Date,
                    Result:"Approved"
                }
                approved.push(approveRequest) 
            }
            else{
                
                approveRequest={
                    Username:res.Username,
                    Category:res.Category,
                    Department:res.Department,
                    Amount:res.Amount,
                    Date:res.Date,
                    Result:res.Result
                }
                approved.push(approveRequest) 
            }
         })
         
      }
      else{
        
      reimbursedata.map((res:any)=>{
        if((data.Username===res.Username && data.Date==res.Date && data.Category===res.Category)){
            
            approveRequest={
                Username:data.Username,
                Category:data.Category,
                Department:data.Department,
                Amount:data.Amount,
                Date:data.Date,
                Result:"Approved"
            }
            approved.push(approveRequest)
        }
        else{
            console.log(res)
            console.log(data)
            approveRequest={
                Username:res.Username,
                Category:res.Category,
                Department:res.Department,
                Amount:res.Amount,
                Date:res.Date,
                Result:"Pending"
            }
            approved.push(approveRequest)

        }
        
      })
      
    }
    let rows
    if(localStorage.getItem("filteredrows")!==null){
        rows= JSON.parse(localStorage.getItem("filteredrows")||"[]")
    }
    else{
     rows=JSON.parse(localStorage.getItem("reimbursedetails")||"[]") 
    }
   let filteredrows=rows.filter((resdata:any)=>{
        return !(resdata.Username===data.Username && resdata.Date===data.Date && resdata.Category===data.Category)

        
    })
    localStorage.setItem("filteredrows",JSON.stringify(filteredrows))
    localStorage.setItem("approved",JSON.stringify(approved))
    window.location.reload()
}

    render(){
        
        let rows
        if(localStorage.getItem("filteredrows")!==null){
            rows= JSON.parse(localStorage.getItem("filteredrows")||"[]")
        }
        else{
         rows=JSON.parse(localStorage.getItem("reimbursedetails")||"[]") 
        }
        return(
            <>
            <Header/>
            <Button  onClick={()=>{this.setState({
                showTable:true
            })}} variant="contained" style={{marginTop:120,marginLeft:40}}>My Approvals</Button>
            {this.state.showTable && <ManagerTable approve={this.approve} rows={rows}  columns={columns}/>}
            
            </>
            
        )
    }
}