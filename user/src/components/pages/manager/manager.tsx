import React from 'react'
import BasicTable from '../../common/table/table'

let rows=[
    {
        heading: "EmployeeName",
        property: "EmployeeName"  
    },
    {
        heading:"Category",
        property:"Category"
    },
        
    {
        heading:"Proof",
        property:"Proof"

        },{
            heading:"Approval",
            property:"Approval"
        },{
            heading:"Rejection",
            property:"Rejection"
        }
]

let columns

class ManagerPage extends React.Component<{},{}>{
    render(){
        return(
            <>
            {/* <BasicTable rows={rows} columns={undefined}/> */}
            <p>Check</p>
            </>
            
        )
    }
}