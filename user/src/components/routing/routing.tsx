import react from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import EmployeeTable from  '../user/usertable'

class Routing extends react.Component{
   render(){
       return(
           <Router>
               <Routes>
                   <Route path='/' element={<EmployeeTable/>} ></Route>
               </Routes>
           </Router>
       )
   }
}


export default Routing