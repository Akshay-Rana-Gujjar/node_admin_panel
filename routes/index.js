  
"use strict";

let express = require("express");
let router = express.Router();
// let authService = require("tdg-auth");
let webUrl = require("../constants/routeConstants");
let home = require("../home/controller");
let admin = require("../admin/controller");

router.get("/home", home.index);
router.get("/homeandreturn", home.return);

//router.get("/home/:tagId", home.index);
router.get("/admin",admin.index);
router.get("/admin/:tagId",admin.getAll);
router.get("/multicity",home.multicity);
router.get("/return/:tagId/:tagId2",home.return);
router.get("/return/",home.return);
router.get("/byclass/:tagId",home.byclass);
router.get("/home/:tagId",home.byprice);

//router.post("/submit",admin.submitData);

router.get("/health", function (req, res, next) {
  res.send();
});

module.exports = router;
