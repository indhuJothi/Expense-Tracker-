let express = require("express");
let router = express.Router();
let {login} = require('./login-route.js/login')


router.post("/login",login);



module.exports = router;