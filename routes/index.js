var express = require("express");
var router = express.Router();
const restaurantes = require("../models/restaurantes");
const withAuth = require("../helpers/middleware");
const uploadCloud = require("../config/cloudinary");


router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET home page. */
router.get("/", withAuth, (req, res, next) => {
  res.render("home");
});

module.exports = router;
