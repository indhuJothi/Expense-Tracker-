import React from "react";
import EmpTable from './Components/Admin/Emp_Table';
import { BrowserRouter as Router,Switch,Route,Routes } from "react-router-dom";
import EditableRow from "./Components/EditableRow";



function App() {
return(
  <div>
    <EmpTable/>
<EditableRow/>
    <Router>
      <Routes>
        <Route path="/edit" component={EditableRow}>
        </Route></Routes>
    </Router>
  </div>
)
  
}

export default App