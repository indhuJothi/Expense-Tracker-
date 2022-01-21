let express = require("express");
let users = require("../../model/login-model");
let jwt = require("jsonwebtoken");




const login = async (req,res)=>{
       console.log("I'm working")
        let { username, password } = req.body;
        let userAuth = await users.findOne({ Username: username });
        console.log(userAuth)
        if (userAuth) {
          await users.findOne({Username:username,Password:password})
            .then((result) => {
              if (result) {
                let token = jwt.sign(
                  { _id: userAuth._id },
                  "secret",
                  (err, token) => {
                    res.json({
                      token: token,
                      username: userAuth.Username,
                      role:userAuth.Role,
                      userdetails:userAuth
                      
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


module.exports = {login}