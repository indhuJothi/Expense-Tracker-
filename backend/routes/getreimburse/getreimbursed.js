let express = require("express");
let users = require("../../model/login-model");
let jwt = require("jsonwebtoken");




const getreimburse = async (req,res)=>{
       
        let { username } = req.body;
        let userAuth = await users.findOne({ Username: username });
        console.log(userAuth)
        if (userAuth) {
          await users.findOne({Username:username})
            .then((result) => {
              if (result) {
                let token = jwt.sign(
                  { _id: userAuth._id },
                  "secret",
                  (err, token) => {
                    console.log(typeof(token))
                    res.json({
                     reimbursedetails:userAuth.Request
                      
                    });
                    res.status(200);
                  }
                );
              } else {
                res.send("error");
              }
            })
            .catch((error) => {
              res.send("Not found");
            });
        } else {
          res.send("Not found");
        }
      }


module.exports = {getreimburse}