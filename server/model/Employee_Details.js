const mongoose = require("mongoose")
const EmployeeSchema = new mongoose.Schema({
    EmployeeName : String,
    Department : String,
    Role : String,
    Email:String,
    Usernamae:String,
    Password:String
})

const Employee = mongoose.model("employee",EmployeeSchema)

module.exports = Employee