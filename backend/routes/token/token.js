let jwt = require("jsonwebtoken");


function verifyToken(req, res, next) {
     
    let token = req.header("access-token");
    if (!token) {
      
      res.send("We need a token");
    } else {
      jwt.verify(token, "secret", (err, decoded) => {
        if (err) {
          
          res.send("credentials are not correct");
        } else {
          req._id = decoded._id;
          console.log("I am working")
      
          next();
        }
      });
    }
  }

module.exports = {verifyToken}