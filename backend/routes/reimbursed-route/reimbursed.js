
const reimburse = require("../../model/reimbursed-model")
const users = require("../../model/login-model")
const reimbursed = async (req, res) => {
  
    let { mydata } = req.body
  let findManager=await users.find({Role:"Manager",Department:mydata.Department})
  let data={     Username: mydata.Username,
    Date: mydata.Date,
    Department: mydata.Department,
    FileUpload: mydata.FileUpload,
    Amount:mydata.Amount,
    Result: mydata.Result}
    console.log(findManager)
   
  if(findManager){
      var addreimburse={$addToSet:{Request:data}}
      console.log(findManager)
      console.log(mydata.Department)
      users.updateOne({Role:"Manager",Department:mydata.Department},addreimburse,(err,res)=>{
        if(err){
            // res.send("err")
        }
        else{
            // res.send("success")
        }
      })
  }
    await reimburse.create({

        Username: mydata.Username,
        Date: mydata.Date,
        Department: mydata.Department,
        FileUpload: mydata.FileUpload,
        Amount:mydata.Amount,
        Category:mydata.Category,
        Result: mydata.Result
    }).then((result) => {
        res.send("success");
      });
}

module.exports = { reimbursed }