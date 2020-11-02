
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restauranteSchema = new Schema(
  {
<<<<<<< HEAD
<<<<<<< HEAD
    
    Email: String,
    password: String
=======
=======
    
>>>>>>> master
    Nombre: String,
    Direccion: String,
    Email: String,
    Foto1: String,
    URLReal:String
    

>>>>>>> d0a24d45f18a28cfc0fc6da57ff23bce7763ac32
  },
  {
    timestamps: true
  }
);

const Restaurante = mongoose.model('Restaurante', restauranteSchema);

module.exports = Restaurante;