
const reimburse = require("../../model/reimbursed-model")
const users = require("../../model/login-model")
const getapprove  = async (req, res) => {
    let { mydata } = req.body
  let findUser=await users.find({Username:mydata.Username})

  let data={    
    Username: mydata.Username,
    Date: mydata.Date,
    Department: mydata.Department,
    FileUpload: mydata.FileUpload,
    Amount:mydata.Amount,
    Category:mydata.Category,
    Result: "Approved"
  }
  if(findUser){
      var addreimburse={$addToSet:{Request:data}}
      // console.log(findUser)
      let create = users.find({Request:"Pending"||"Approve"})
     if(create){
      users.updateOne({Username:mydata.Username},addreimburse,(err,res)=>{
        if(err){
            // res.send("err")
            console.log(err)
        }
        else{
            // res.send("success")
            console.log(res.Username)
        }
      })
    }
    else{
      users.updateMany({Username:mydata.Username},{Request:addreimburse},(err,res)=>{
        if(err){
          console.log(err)
        }
        else{
          console.log(res)
        }
      })
    }
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

module.exports = { getapprove }