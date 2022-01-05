import react from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Role from './role/role'
import Category from './category/category'
import Departmenttable from './department/department'
import Employeetable from './employee/employee'
import Header from '../common/header/header'

export default class RouteTable extends react.Component {
    render(): react.ReactNode {
        return (
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Role />} />
                    <Route path='/category' element={<Category />} />
                    <Route path='/department' element={<Departmenttable />} />
                    <Route path='/employee' element={<Employeetable />} />
                </Routes>
            </Router>
        )
    }
}