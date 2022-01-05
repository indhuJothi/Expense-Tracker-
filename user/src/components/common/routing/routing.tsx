import react from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import EmployeeTable from  '../../pages/employee/employee'
import CategoryTable from '../../pages/category/category'
import DepartmentTable from '../../pages/department/department'
import Roletable from '../../pages/role/role'
import Header from '../header/header'
import Loginform from '../../pages/login/login-form'



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