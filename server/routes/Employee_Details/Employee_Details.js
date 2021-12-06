const employee = require('../../model/Employee_Details')

async function employeeDetails (req,res){
    let {EmployeeName,Department,Role,Email,Username,Password} = req.body
    let CreateEmployee = await employee.create({
        EmployeeName,
        Department,
        Role,
        Email,
        Username,
        Password
    })
    if(CreateEmployee){
        res.status(200);
        res.json({
            _id = CreateEmployee._id
        })
    }

}

module.exports = {employeeDetails}