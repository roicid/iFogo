var express = require('express');
var router = express.Router();
const restaurantes =require('../models/restaurantes')
const withAuth = require('../helpers/middleware')
const User =require('../models/user')

/*restaurantes.find()
  .then((restaurantes) => {
    console.log(restaurantes)
  }).catch((err) => {
    console.log(err)
  });*/ 

  

    router.get('/books' ,(req , res , next ) => {
    
      restaurantes.find().limit(10)
      .then((result) => {
          console.log(result)
          res.render('dale', {data: result})
      }).catch((err) => {
          console.log(err)
      });
  })




/* GET home page. */
router.get('/', withAuth, (req, res, next) => {
  res.render('home') 
})
 



module.exports = router;
