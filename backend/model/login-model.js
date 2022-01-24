const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
   id:Number,
   EmployeeName:String,
   Department:String,
   Role:String,
   Username:String,
   Password:String,
   Email:String,
   Request:Array

    
})

const users =mongoose.model('users',userSchema)

module.exports=users