const { url } = require('inspector');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restauranteSchema = new Schema(
  {
<<<<<<< HEAD
    
    Email: String,
    password: String
=======
    Nombre: String,
    Dirección: String,
    Email: String,
    Foto_1: String,
    Foto_2: String,

>>>>>>> d0a24d45f18a28cfc0fc6da57ff23bce7763ac32
  },
  {
    timestamps: true
  }
);

const Restaurante = mongoose.model('Restaurantes', restauranteSchema);

module.exports = Restaurante;