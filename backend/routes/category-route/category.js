let users = require('../../model/login-model')
let categories = require('../../model/category-model')


async function getCategories(req, res){
    console.log("I'm department")
    users.findOne({ _id: req._id }).then((response) => {
      if (response) {
        categories.find({}, (err, result) => {
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

module.exports ={getCategories}