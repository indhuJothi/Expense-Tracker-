import React from 'react'
import data from './category-data.json'
import BasicTable from '../../common/table/table'
import Menu from '../../common/menu/menu'

type stateprop = {
    showform: boolean,
    id: string,
    Category: string,
    MinimumLimit: string
}
class Data extends React.Component<{}, stateprop>{
    constructor(props: any) {
        super(props)
        this.state = {
            showform: false,
            id: "",
            Category: "",
            MinimumLimit: ""
        }
    }
    componentDidMount() {
        if (localStorage.getItem("editedcolumns")) {
            let editedcolumns = JSON.parse(localStorage.getItem("editedcolumns") || "[]")
            let rolekeys = Object.keys(Object.assign({}, ...data))
            let editkeys = Object.keys(Object.assign({}, ...editedcolumns))
            if (JSON.stringify(rolekeys) === JSON.stringify(editkeys)) {
                localStorage.setItem("categorydetails", JSON.stringify(editedcolumns))
            }

            else {
                localStorage.setItem("categorydetails", JSON.stringify(data))
            }
        }
        else if (localStorage.getItem("categorydetails")) {
            let roledetails = JSON.parse(localStorage.getItem("categorydetails") || "[]")
            localStorage.setItem("categorydetails", JSON.stringify(roledetails))
        }
        else {
            localStorage.setItem("categorydetails", JSON.stringify(data))
        }


    }


    render() {
        const rows = [
            {
                heading: "id",
                property: "id"
            },
            {
                heading: "Category",
                property: "Category"
            },
            {
                heading: "MinimumLimit",
                property: "MinimumLimit"
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
        localStorage.getItem("categorydetails") !== null ? columns = JSON.parse(localStorage.getItem("categorydetails") || '[]') : columns = data
        console.log(columns)
        return (
            <>
                <Menu />
                <BasicTable rows={rows} columns={columns} />

            </>

        )
    }
}

export default Data


