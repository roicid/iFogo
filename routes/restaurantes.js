var express = require('express');
var router = express.Router();
const restaurantes =require('../models/restaurantes')
const withAuth = require('../helpers/middleware');


router.get('/buscadorPrincipal:/id' ,(req , res , next ) => {
        restaurantes.find(req.query.search)
        .then((result) => {
            console.log(result.body.nombre[0])
        }).catch((err) => {
            console.log(err)
        });


}) 


module.exports = router