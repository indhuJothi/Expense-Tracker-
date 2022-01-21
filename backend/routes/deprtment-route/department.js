let users = require('../../model/login-model')
let departments = require('../../model/department-model')


async function getDepartments(req, res){
    console.log("I'm department")
    users.findOne({ _id: req._id }).then((response) => {
      if (response) {
        departments.find({}, (err, result) => {
          if (err) {
            res.send("error");
          } else {
            console.log(result)
            res.send(result);
           
          }
        });
      }
    });
  }

module.exports ={getDepartments}