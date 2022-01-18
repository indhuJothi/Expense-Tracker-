import { Button } from '@mui/material'
import React from 'react'
import Header from '../../common/header/header'
import ManagerTable from '../../common/table/managertable/manager-table'
import BasicTable from '../../common/table/table'

let columns = [
    {
        heading: "Username",
        property: "Username"
    },
    {
        heading: "Category",
        property: "Category"
    },

    {
        heading: "Proof",
        property: "FileUpload"

    },
    {
        heading: "Date",
        property: "Date"
    },
    {
        heading: "Department",
        property: "Department"
    },
    {
        heading: "Approval",
        property: "Approval"
    }, {
        heading: "Rejection",
        property: "Rejection"
    }
]


type stateprop = {
    showTable: boolean
}

export default class ManagerPage extends React.Component<{}, stateprop>{
    constructor(props: any) {
        super(props)
        this.state = {
            showTable: false
        }
    }

    approve(data: any) {

        let reimbursedata = JSON.parse(localStorage.getItem("reimbursedetails") || "[]")
        let approved: { Username: any; Category: any; Date: any, Department: any; Amount: any; Result: string }[] = []
        let approveRequest: { Username: any; Category: any; Department: any; Amount: any; Date: any; Result: string }
        let approvedDetails = JSON.parse(localStorage.getItem("approved") || "[]")
        reimbursedata.map((res: any) => {
            if ((data.Username === res.Username && data.Date === res.Date && data.Category === res.Category)) {

                approveRequest = {
                    Username: data.Username,
                    Category: data.Category,
                    Department: data.Department,
                    Amount: data.Amount,
                    Date: data.Date,
                    Result: "Approved"
                }
                if(approvedDetails.length>0){
                approvedDetails.map((approveres:any)=>{
                    if(!(data.Username===approveres.Username && data.Category===approveres.Category && data.Date===approveres.Date)){
                        approvedDetails.push(approveRequest)
                        }
                })}
                else{
                approvedDetails.push(approveRequest)}
                let filtered = reimbursedata.filter((res: any) => {
                    return !((data.Username === res.Username && data.Date === res.Date && data.Category === res.Category))
                })
                localStorage.setItem("reimbursedetails", JSON.stringify(filtered))
            }
            else {
                
                approveRequest = {
                    Username: res.Username,
                    Category: res.Category,
                    Department: res.Department,
                    Amount: res.Amount,
                    Date: res.Date,
                    Result: "Pending"
                }
                approvedDetails.map((data:any)=>{
                    if(!(data.Username===res.Username && data.Category===res.Category && data.Date===res.Date)){
                    approvedDetails.push(approveRequest)
                    }
                     })
                    
                let filtered = reimbursedata.filter((res: any) => {
                    return !((data.Username === res.Username && data.Date === res.Date && data.Category === res.Category))
                })
                localStorage.setItem("reimbursedetails", JSON.stringify(filtered))
            
        }

        })

        // }

        localStorage.setItem("approved", JSON.stringify(approvedDetails))
        window.location.reload()
    }

    reject(data: any) {

        // let approvedData = JSON.parse(localStorage.getItem("approved") || "[]")
        // let reimbursedata = JSON.parse(localStorage.getItem("reimbursedetails") || "[]")
        // let rejected: { Username: any; Category: any; Date: any, Department: any; Amount: any; Result: string }[] = []
        // let rejectedRequest


        // reimbursedata.map((res: any) => {
        //     if ((data.Username === res.Username && data.Date == res.Date && data.Category === res.Category)) {

        //         rejectedRequest = {
        //             Username: data.Username,
        //             Category: data.Category,
        //             Department: data.Department,
        //             Amount: data.Amount,
        //             Date: data.Date,
        //             Result: "Rejected"
        //         }
        //         approvedData.push(rejectedRequest)
        //         let filtered = reimbursedata.filter((res: any) => {
        //             return !((data.Username === res.Username && data.Date === res.Date && data.Category === res.Category))
        //         })
        //         localStorage.setItem("reimbursedetails", JSON.stringify(filtered))
        //     }

        //     else {
        //         console.log(res)
        //         console.log(data)
        //         rejectedRequest = {
        //             Username: res.Username,
        //             Category: res.Category,
        //             Department: res.Department,
        //             Amount: res.Amount,
        //             Date: res.Date,
        //             Result: "Pending"
        //         }
        //         approvedData.push(rejectedRequest)
        //         let filtered = reimbursedata.filter((res: any) => {
        //             return !((data.Username === res.Username && data.Date === res.Date && data.Category === res.Category))
        //         })
        //         localStorage.setItem("reimbursedetails", JSON.stringify(filtered))

        //     }

        // })

        // // }


        // localStorage.setItem("approved", JSON.stringify(approvedData))
        // window.location.reload()

    }

    render() {



        let rows = JSON.parse(localStorage.getItem("reimbursedetails") || "[]")

        return (
            <>
                <Header />
                <Button onClick={() => {
                    this.setState({
                        showTable: true
                    })
                }} variant="contained" style={{ marginTop: 120, marginLeft: 40 }}>My Approvals</Button>
                {this.state.showTable &&
                    <>
                        <Button variant="contained" onClick={() => window.location.replace('/homepage')} style={{ marginTop: 120, marginLeft: 40 }}>Homepage</Button>
                        <ManagerTable approve={this.approve} reject={this.reject} rows={rows} columns={columns} />
                    </>
                }
            </>

        )
    }
}