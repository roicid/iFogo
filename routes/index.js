var express = require("express");
var router = express.Router();
const restaurantes = require("../models/restaurantes");
const withAuth = require("../helpers/middleware");
const uploadCloud = require("../config/cloudinary");


router.get("/", withAuth ,(req, res, next) => {
  res.render("index");
});



module.exports = router;
