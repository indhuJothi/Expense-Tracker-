const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
   id:String,
   Category:String,
   MinimumLimit:String

    
})

const categories =mongoose.model('categories',categorySchema)

module.exports=categories