import React from "react";
import CategoryTable from './category-Table'
import Header from "../Header/Header";

class Category extends React.Component {
    render() {
        return (
            <>
                <Header />
                <CategoryTable />
            </>
        )
    }
}

export default Category