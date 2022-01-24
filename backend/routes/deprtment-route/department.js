let users = require('../../model/login-model')
let departments = require('../../model/department-model')


async function getDepartments(req, res){
    
    users.findOne({ _id: req._id }).then((response) => {
      if (response) {
        departments.find({}, (err, result) => {
          if (err) {
            res.send("error");
          } else {
           
            res.send(result);
           
          }
        });
      }
    });
  }

module.exports ={getDepartments}