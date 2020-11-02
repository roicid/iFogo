var express = require('express');
var router = express.Router();
const restaurantes =require('../models/restaurantes')
const withAuth = require('../helpers/middleware');

// consultar a dani para mostrar varios !! 
//problemas con el json 

<<<<<<< HEAD
=======

router.get('/buscadorPrincipal' ,(req , res , next ) => {
  //  const {Nombre , Direccion} = req.body
        restaurantes.find().limit(3)
        
        .then((result) => {
          
    
            res.render('index' , {data : result} )
           console.log(result);
        }).catch((err) => {
            console.log(err)
        });
>>>>>>> d0a24d45f18a28cfc0fc6da57ff23bce7763ac32


<<<<<<< HEAD
=======
})    

router.get('/restaurantes' ,(req , res , next) => {
    try {
        res.render('restaurantes'); 
        
    } catch (error) {
        console.log(error)
        
    }
})


>>>>>>> ac47d63da614a24f112ff2f4dbcbc4b5ecca85a9


module.exports = router