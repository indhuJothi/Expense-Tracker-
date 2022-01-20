let express = require("express");
let user = require("../../model/login-model");
let jwt = require("jsonwebtoken");




const login = async (req,res)=>{
       
        let { username, password } = req.body;
        let userAuth = await user.findOne({ Username: username });
        if (userAuth) {
          await user.findOne({password:password})
            .then((result) => {
              if (result) {
                let token = jwt.sign(
                  { _id: userAuth._id },
                  "secret",
                  (err, token) => {
                    res.json({
                      token: token,
                      username: userAuth.Username,
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