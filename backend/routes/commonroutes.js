let express = require("express");
let router = express.Router();
let {verifyToken} = require("./token/token")
let {login} = require('./login-route/login')
let {getDepartments} = require("./deprtment-route/department")
let {getCategories} = require('./category-route/category')

router.post("/login",login);
router.get("/departments",verifyToken,getDepartments)
router.get("/categories",verifyToken,getCategories)


module.exports = router;