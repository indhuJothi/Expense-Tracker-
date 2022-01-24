const mongoose = require('mongoose')
const reimburseSchema = new mongoose.Schema({
  
Username:String,
Date:String,
Department:String,
FileUpload:String,
Amount:String,
Result:String
    
})

const reimburse =mongoose.model('reimburse',reimburseSchema)

module.exports=reimburse