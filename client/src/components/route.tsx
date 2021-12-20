import react from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import table from './user/sample'

class Routing extends react.Component{
   render(){
       return(
           <Router>
               <Routes>
                   <Route path='/' element={<table/>} ></Route>
               </Routes>
           </Router>
       )
   }
}


export default Routing