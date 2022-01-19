import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loginform from '../../pages/login/login-form'
import Header from '../header/header'
import HomePageContainer from '../../pages/homepage/homepagecontainer'
import AdminPage from '../../pages/admin/adminpage'
import EmployeeTable from '../../pages/employee/employee'
import CategoryTable from '../../pages/category/category'
import DepartmentTable from '../../pages/department/department'
import Roletable from '../../pages/role/role'
import ManagerPage from '../../pages/manager/manager'
import PrivateRoute, { PreventLogin } from '../../service/private/private'
import { Adminprivate } from '../../service/private/private'
import { Managerprivate } from '../../service/private/private'
import path from 'path/posix'



export default class EmployeeRoute extends React.Component {
    render() {
        let path 
        let element
      

        return (
            <Router>
                <Header />
                <Routes>
               <Route element={<PreventLogin/>}>
               <Route path='/' element={<Loginform />}></Route>
               </Route>
                    <Route element={<PrivateRoute />}>
                        <Route path='/homepage' element={<HomePageContainer />}></Route>
                        <Route element={<Managerprivate />}>
                            <Route path='/manager' element={<ManagerPage />} />
                        </Route>
                        <Route element={<Adminprivate />}>
                            <Route path='/adminpage' element={<AdminPage />}></Route>
                            <Route path='/employee' element={<EmployeeTable />} ></Route>
                            <Route path='/category' element={<CategoryTable />}> </Route>
                            <Route path='/department' element={<DepartmentTable />}></Route>
                            <Route path='/role' element={<Roletable />}></Route>
                        </Route>
                    </Route>
                </Routes>
            </Router>
        )
    }
}