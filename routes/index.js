var express = require('express');
var router = express.Router();
const restaurantes =require('../models/restaurantes')
const withAuth = require('../helpers/middleware')
const uploadCloud = require('../config/cloudinary')

/*restaurantes.find()
  .then((restaurantes) => {
    console.log(restaurantes)
  }).catch((err) => {
    console.log(err)
  });*/ 

  

   



/* GET home page. */
router.get('/', withAuth, (req, res, next) => {
  res.render('home') 
})
 



module.exports = router;
