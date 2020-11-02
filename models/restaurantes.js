
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restauranteSchema = new Schema(
  {
    
    Nombre: String,
    Direccion: String,
    Email: String,
    Foto1: String,
    URLReal:String
    

  },
  {
    timestamps: true
  }
);

const Restaurante = mongoose.model('Restaurante', restauranteSchema);

module.exports = Restaurante;