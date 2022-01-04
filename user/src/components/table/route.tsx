import react from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Role from './roledatafile'
import Category from './datasentfile'

export default class RouteTable extends react.Component{
    render(): react.ReactNode {
        return(
            <Router>
                <Routes>
                <Route path='/' element={<Role/>}/>
                <Route path='/category' element={<Category/>}/>
                </Routes>
            </Router>
        )
    }
}