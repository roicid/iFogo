var express = require('express');
var router = express.Router();
const Restaurante =require('../models/restaurantes');
const withAuth = require('../helpers/middleware');

<<<<<<< HEAD
=======
// consultar a dani para mostrar varios !! 
//problemas con el json 

>>>>>>> intermedia

router.get('/buscadorPrincipal' ,(req , res , next ) => {
 
        Restaurante.find().limit(3)
        .then((result) => {
<<<<<<< HEAD
            res.render('index' , {data : result})
           console.log(result)
        }).catch((err) => {
            console.log(err)
        });
    });
=======
    
            res.render('index' , {data : result} )
           console.log(result);
        }).catch((err) => {
            console.log(err)
        });



>>>>>>> intermedia

module.exports = router