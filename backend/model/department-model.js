const mongoose = require('mongoose')
const departmentSchema = new mongoose.Schema({
   id:String,
   Department:String,
   TotalAmount:String

    
})

const departments =mongoose.model('department',departmentSchema)

module.exports=departments