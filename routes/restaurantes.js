var express = require('express');
var router = express.Router();
const restaurantes =require('../models/restaurantes')
const withAuth = require('../helpers/middleware');


router.get('/buscadorPrincipal' ,(req , res , next ) => {

    
        restaurantes.find()
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.log(err)
        });


}) 