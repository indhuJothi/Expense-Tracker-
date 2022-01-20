const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
   id:Number,
   EmployeeName:String,
   Department:String,
   Role:String,
   Username:String,
   Password:String,
   Email:String

    
})

const user =mongoose.model('user',userSchema)

module.exports=user