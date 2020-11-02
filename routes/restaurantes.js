var express = require("express");
var router = express.Router();
const Restaurante =require('../models/restaurantes')
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

router.post('/restaurantesform', async(req,res,next) =>  {

    const { Nombre , Direccion , URLReal , Foto1 , Email} = req.body;

try { 
     await Restaurante.create({Nombre,Direccion,URLReal,Foto1, Email})
    
    
    res.redirect('/')
} catch (error) {
    console.log(error)
    
}
})



module.exports = router
