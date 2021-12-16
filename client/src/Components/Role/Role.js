import React from "react";
import RoleTable from './Role-Table'
import Header from "../Header/Header";



class Role extends React.Component {
    render() {
        return (
            <>
                <Header />
                <RoleTable />

            </>
        )
    }
}

export default Role