import React from 'react'
import Menu from '../../common/menu/menu'
import Routing from '../../common/routing/routing'
import { Button } from '@mui/material'
import { Navigate } from 'react-router-dom'


export default class AdminPage extends React.Component<{}, {}>{


    render() {
        return (
            <>
                <Menu />
                <div style={{ "marginLeft": "30%", "marginTop": "10%" }}>
                    <Button  variant='contained' onClick={()=>{window.location.replace("/homepage")}}>Homepage</Button>
                    < a style={{ "textDecoration": "none" }} href="/employee"> <Button style={{ "marginRight": "5px" }} variant="contained"  >Add Employee</Button></a>
                    < a style={{ "textDecoration": "none" }} href="/category"><Button style={{ "marginRight": "5px" }} variant="contained">Add Category</Button></a>
                    < a style={{ "textDecoration": "none" }} href="/department"><Button style={{ "marginRight": "5px" }} variant="contained">Add Department</Button></a>
                    < a style={{ "textDecoration": "none" }} href="/role"><Button style={{ "marginRight": "5px" }} variant="contained">Add Role</Button></a>
                </div>
            </>
        )
    }
}