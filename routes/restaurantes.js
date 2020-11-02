var express = require('express');
var router = express.Router();
const Restaurante =require('../models/restaurantes')
const withAuth = require('../helpers/middleware');

// consultar a dani para mostrar varios !! 
//problemas con el json 

<<<<<<< HEAD
=======

router.get('/buscadorPrincipal' , async (req , res , next ) => {
  //  const {Nombre , Direccion} = req.body
      
        
        try {
            const consulta = await Restaurante.find({Nombre : {$regex: req.query.buscador, $options:"i"}});
            console.log(req.query.buscador)
            console.log(consulta);
            res.render('index' , {data : consulta} )
           
        
            
        } catch (error) {
            console.log(error)
            
        }
          
    
<<<<<<< HEAD
            res.render('index' , {data : result} )
           console.log(result);
        }).catch((err) => {
            console.log(err)
        });
>>>>>>> d0a24d45f18a28cfc0fc6da57ff23bce7763ac32
=======
            
>>>>>>> master


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

router.post('/restaurantesform', async(req,res,next) =>  {

    const { Nombre , Direccion , URLReal , Foto1 , Email} = req.body;

try { 
     await Restaurante.create({Nombre,Direccion,URLReal,Foto1, Email})
    
    
    res.redirect('/')
} catch (error) {
    console.log(error)
    
}
})

>>>>>>> ac47d63da614a24f112ff2f4dbcbc4b5ecca85a9


module.exports = router