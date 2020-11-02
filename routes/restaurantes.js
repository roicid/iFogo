var express = require('express');
var router = express.Router();
const Restaurante =require('../models/restaurantes');
const withAuth = require('../helpers/middleware');

// consultar a dani para mostrar varios !! 
//problemas con el json 


router.get('/buscadorPrincipal' ,(req , res , next ) => {
 
        Restaurante.find().limit(3)
        .then((result) => {
    
            res.render('index' , {data : result} )
           console.log(result);
        }).catch((err) => {
            console.log(err)
        });
    })


module.exports = router