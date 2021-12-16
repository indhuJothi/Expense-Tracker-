import React from 'react'
import { Table } from 'antd'
import roledata from './Role-Mockdata.json'
import './Role-Table.css'


class RoleTable extends React.Component {
    render() {
        let columns = [
            {
                key: 1,
                title: "Id",
                dataIndex: "Id"
            },
            {
                Key: 2,
                title: "Role",
                dataIndex: "Role"
            }
        ]
        console.log(roledata)
        return (
            <div className="App">
                <header className="App-header">
                    <Table className='RoleTable' columns={columns} dataSource={roledata} ></Table>
                </header>
            </div>
        )
    }
}

export default RoleTable