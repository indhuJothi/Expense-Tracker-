let express = require("express");
let router = express.Router();
let {verifyToken} = require("./token/token")
let {login} = require('./login-route/login')
let {getDepartments} = require("./deprtment-route/department")
let {getCategories} = require('./category-route/category')
let {reimbursed} = require("./reimbursed-route/reimbursed")
let {getreimburse} = require('./getreimburse/getreimbursed')
let {getapprove} = require('./reimbursed-route/approve')
  
router.post("/login",login);
router.get("/departments",verifyToken,getDepartments)
router.get("/categories",verifyToken,getCategories)
router.post("/reimbursed",verifyToken,reimbursed)
router.post('/getreimburse',verifyToken,getreimburse)
router.post('/getapprove',verifyToken,getapprove)
module.exports = router;