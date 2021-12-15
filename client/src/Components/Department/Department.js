import React from "react";
import Header from "../Header/Header";
import { DepartmentTable } from "./DepartmentTable";
class Department extends React.Component{
    render(){
        return(
            <>
              <Header/>
              <DepartmentTable/>
            </>
          

        )
    }
}

export default Department