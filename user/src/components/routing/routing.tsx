import react from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import EmployeeTable from  '../user/usertable'
import CategoryTable from '../user/category-table'
import DepartmentTable from '../user/department-table'
import Roletable from '../user/role-table'
import Header from '../header/header'
import Loginform from '../user/login/loginform'


class Routing extends react.Component{

   render(){
    const Props={
        username:"",
        password:""
    }
       return(
           <Router>
                   <Header/>
               <Routes>
                   <Route path='/' element={<Loginform/>}></Route>
                   <Route path='/employee' element={<EmployeeTable/>} ></Route>
                   <Route path='/category' element={<CategoryTable/>}> </Route>
                   <Route path='/department' element={<DepartmentTable/>}></Route>
                   <Route path='/role' element={<Roletable/>}></Route>
                   
               </Routes>
           </Router>
       )
   }
}


export default Routing