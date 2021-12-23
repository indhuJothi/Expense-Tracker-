import react from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import EmployeeTable from  '../user/usertable'
import CategoryTable from '../user/category-table'
import DepartmentTable from '../user/department-table'

class Routing extends react.Component{
   render(){
       return(
           <Router>
               <Routes>
                   <Route path='/' element={<EmployeeTable/>} ></Route>
                   <Route path='/category' element={<CategoryTable/>}> </Route>
                   <Route path='/department' element={<DepartmentTable/>}></Route>
               </Routes>
           </Router>
       )
   }
}


export default Routing