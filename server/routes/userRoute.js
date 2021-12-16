const express = require("express")
const router = express.Router()
const {employeeDetails} = require('./Employee_Details/Employee_Details')

router.post('/addempployee',employeeDetails)

module.exports =router;