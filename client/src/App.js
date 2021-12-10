import React from "react";
import EmpTable from './Components/Admin/Emp_Table';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import EditableRow from "./Components/EditableRow";



function App() {
return(
  <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<EmpTable/>}/>
        <Route path="/edit:id" element={<EditableRow/>}>
        </Route></Routes>
        </Router>
  </div>
)
  
}

export default App