var express = require('express');
var router = express.Router();
const restaurantes =require('../models/restaurantes')
const withAuth = require('../helpers/middleware');

// consultar a dani para mostrar varios !! 
//problemas con el json 


router.get('/buscadorPrincipal' ,(req , res , next ) => {
  //  const {Nombre , Direccion} = req.body
        restaurantes.find().limit(3)
        
        .then((result) => {
          
    
            res.render('index' , {data : result} )
           console.log(result);
        }).catch((err) => {
            console.log(err)
        });


})    

router.get('/restaurantes' ,(req , res , next) => {
    try {
        res.render('restaurantes'); 
        
    } catch (error) {
        console.log(error)
        
    }
})

router.post('/restaurantesform', (req,res,next) => {

    const { nombre , direccion , url , Foto} = req.body;

try { 
    const resta = new restaurantes(nombre,direccion,url,Foto)
    resta.save(resta)
    
    res.redirect('/index')
} catch (error) {
    console.log(error )
    
}
})



module.exports = router