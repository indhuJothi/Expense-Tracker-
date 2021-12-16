import React from "react";
import { Table, Button, header, Modal, Input } from 'antd';
import categoryData from './category-mockdata.json'
import './category-Table.css'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

class categoryTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Id: "",
            Category: "",
            MinimumLimit: "",
            showForm: false,
            EditId: "",
            EditCategory: "",
            EditMinimumLimit: "",
            showEdit: false,
            DeleteId: "",
            DeleteCategory: "",
            DeleteMinimumLimit: "",
            shoeDelete: false
        }
    }
    addData() {
        this.setState({
            showForm: true

        })
    }
    EditRecord(record) {
        this.setState({
            showEdit: true,
            EditId: record.Id,
            EditCategory: record.Category,
            EditMinimumLimit: record.MinimumLimit
        })
    }
    Edit() {


        let storedData = JSON.parse(localStorage.getItem("AddCategory"))
        storedData.map((data) => {
            if (data.Id === this.state.EditId) {
                data.Category = this.state.EditCategory
                data.MinimumLimit = this.state.EditMinimumLimit
                data.Id = this.state.EditId
            }

        })

        this.setState({
            showEdit: false
        })
        localStorage.setItem("AddCategory", JSON.stringify(storedData))
    }

    addCategory() {
        let add = {
            Id: this.state.Id,
            Category: this.state.Category,
            MinimumLimit: this.state.MinimumLimit
        }
        let data = categoryData
        data.push(add)
        this.setState({
            showForm: false,
            Id: "",
            Category: "",
            MinimumLimit: ""
        })
        localStorage.setItem("AddCategory", JSON.stringify(data))
    }


    DeleteRecord(record) {
        // Modal.confirm({
        //     title: "Are you sure you want to delete this record?",
        //     onOk: () => {


        //         // window.location.reload()
        //     }
        // })

        this.setState({
            showDelete: true,
            DeleteId: record.Id,
            DeleteCategory: record.Category,
            DeleteMinimumLimit: record.MinimumLimit
        })



    }

    Delete() {
        let prevData = JSON.parse(localStorage.getItem("AddCategory"))
        let result = prevData.filter((data) => { return (data.Category != this.state.DeleteCategory) })
        localStorage.setItem("AddCategory", JSON.stringify(result))
        this.setState(
            {
                showDelete: false,
                DeleteId: "",
                DeleteCategory: "",
                DeleteMinimumLimit: ""
            }
        )
    }
    componentDidMount() {
        localStorage.setItem("AddCategory", JSON.stringify(categoryData))
    }
    render() {
        let columns = [
            {
                key: 1,
                title: "Id",
                dataIndex: "Id"
            },
            {
                key: 2,
                title: "Category",
                dataIndex: "Category"
            },
            {
                key: 3,
                title: "MinimumLimit",
                dataIndex: "MinimumLimit"
            },
            {
                key: 4,
                title: "Edit",
                render: (record) => {
                    return (
                        <>
                            <EditOutlined onClick={() => { this.EditRecord(record) }}></EditOutlined>
                        </>

                    )
                }

            },
            {
                key: 5,
                title: "Delete",
                render: (record) => {
                    return (
                        <>
                            <DeleteOutlined style={{ color: "red", marginLeft: 14 }} onClick={() => { this.DeleteRecord(record) }}></DeleteOutlined>
                        </>

                    )
                }
            }
        ]

        let categorydata
        localStorage.getItem("AddCategory") !== null ? categorydata = JSON.parse(localStorage.getItem("AddCategory")) : categorydata = categoryData
        return (
            <div className="App">
                <header className="App-header">
                    <Table
                        columns={columns}
                        dataSource={categorydata}
                        className="categoryTable"
                    >
                    </Table>
                    <Button style={{ marginLeft: 20, textAlign: "center" }} onClick={() => { this.addData() }}>Add Category</Button>
                    <Modal
                        title="Add Category"
                        visible={this.state.showForm}
                        okText="Add"
                        onCancel={() => {
                            this.setState({
                                showForm: false
                            })
                        }}
                        onOk={() => { this.addCategory() }}
                    >
                        <Input value={this.state.Id} placeholder="Id" onChange={(event) => { this.setState({ Id: event.target.value }) }}></Input>
                        <Input value={this.state.Category} placeholder="Category" onChange={(event) => { this.setState({ Category: event.target.value }) }}></Input>
                        <Input value={this.state.MinimumLimit} placeholder="MinimumLimit" onChange={(event) => { this.setState({ MinimumLimit: event.target.value }) }}></Input>

                    </Modal>
                    <Modal
                        title="Edit Record"
                        visible={this.state.showEdit}
                        onOk={() => { this.Edit() }}
                        okText="Save"
                        onCancel={() => { this.setState({ showEdit: false }) }}
                    >
                        <Input value={this.state.EditId} placeholder="Id" onChange={(event) => { this.setState({ EditId: event.target.value }) }}></Input>
                        <Input value={this.state.EditCategory} onChange={(e) => { this.setState({ EditCategory: e.target.value }) }}></Input>
                        <Input value={this.state.EditMinimumLimit} onChange={(e) => { this.setState({ EditMinimumLimit: e.target.value }) }} />
                    </Modal>
                    <Modal
                        title="Are You Sure You Want to Delete this Record?"
                        okText="Delete"
                        okType="Danger"
                        visible={this.state.showDelete}
                        onOk={() => { this.Delete() }}
                        onCancel={() => { this.setState({ showDelete: false }) }}
                    >
                        <table>
                            <thead>
                                <th>Id</th>
                                <th>Category</th>
                                <th>MinimumLimit</th>
                            </thead>
                            <tbody>
                                <td>{this.state.DeleteId}</td>
                                <td>{this.state.DeleteCategory}</td>
                                <td>{this.state.DeleteMinimumLimit}</td>
                            </tbody>
                        </table>
                    </Modal>

                </header>
            </div>
        )
    }
}

export default categoryTable