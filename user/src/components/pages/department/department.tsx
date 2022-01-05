
import React from 'react'
import departmentdata from './department-data.json'
import BasicTable from '../../common/table/table'
import Menu from '../../common/menu/menu'

export default class Departmenttable extends React.Component {
    componentDidMount() {
        if (localStorage.getItem("editedcolumns")) {
            let editedcolumns = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
            let rolekeys = Object.keys(Object.assign({}, ...departmentdata))
            let editkeys = Object.keys(Object.assign({}, ...editedcolumns))
            if (JSON.stringify(rolekeys) === JSON.stringify(editkeys)) {
                localStorage.setItem("departmentdetails", JSON.stringify(editedcolumns))
            }

            else {
                localStorage.setItem("departmentdetails", JSON.stringify(departmentdata))
            }
        }
        else if (localStorage.getItem("departmentdetails")) {
            let departmentdetails = JSON.parse(localStorage.getItem("departmentdetails") || "[]")
            localStorage.setItem("departmentdetails", JSON.stringify(departmentdetails))
        }
        else {
            localStorage.setItem("departmentdetails", JSON.stringify(departmentdata))
        }


    }


    render() {
        const rows = [
            {
                heading: "id",
                property: "id"
            },
            {
                heading: "Department",
                property: "Department"
            },
            {
                heading: "TotalAmount",
                property: "TotalAmount"
            },

            {
                heading: "Edit",
                property: "Edit"
            },
            {
                heading: "Delete",
                property: "Delete"
            }
        ]
        let columns
        { localStorage.getItem("departmentdetails") !== null ? columns = JSON.parse(localStorage.getItem("departmentdetails") || "{}") : columns = departmentdata }
        return (

            <>
                <Menu />
                <BasicTable rows={rows} columns={columns} />
            </>


        )
    }
}