
import React from 'react'
import role from './role-data.json'
import BasicTable from '../../common/table/table'
import Menu from '../../common/menu/menu'

export default class Roletable extends React.Component {
    componentDidMount() {
        if (localStorage.getItem("editedcolumns")) {
            let editedcolumns = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
            let rolekeys = Object.keys(Object.assign({}, ...role))
            let editkeys = Object.keys(Object.assign({}, ...editedcolumns))
            if (JSON.stringify(rolekeys) === JSON.stringify(editkeys)) {
                localStorage.setItem("Roledetails", JSON.stringify(editedcolumns))
            }

            else {
                localStorage.setItem("Roledetails", JSON.stringify(role))
            }
        }
        else if (localStorage.getItem("Roledetails")) {
            let roledetails = JSON.parse(localStorage.getItem("Roledetails") || "[]")
            localStorage.setItem("Roledetails", JSON.stringify(roledetails))
        }
        else {
            localStorage.setItem("Roledetails", JSON.stringify(role))
        }


    }


    render() {
        const rows = [
            {
                heading: "id",
                property: "id"
            },
            {
                heading: "Role",
                property: "Role"
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
        { localStorage.getItem("Roledetails") !== null ? columns = JSON.parse(localStorage.getItem("Roledetails") || "{}") : columns = role }
        return (

            <>
                <Menu />
                <BasicTable rows={rows} columns={columns} />
            </>


        )
    }
}