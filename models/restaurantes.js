const mongoose = require('mongoose');
const Schema = mongoose.Schema;

<<<<<<< HEAD
const restauranteSchema = new Schema(
  {

   
    password: String,
    Nombre: String,
    Direccion: String,
    Email: String,
    Foto1: String,
    URLReal:String
    
=======
const restauranteSchema = new Schema({
>>>>>>> 99689b02fdafc34a0bac1bd1c38113329a1f971c


  Password: String,
  Nombre: String,
  Direccion: String,
  Email: String,
  Foto1: String,
  URLReal: String


}, {
  timestamps: true
});

const Restaurante = mongoose.model('Restaurante', restauranteSchema);

module.exports = Restaurante;