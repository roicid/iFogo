const { url } = require('inspector');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restauranteSchema = new Schema(
  {
    Nombre: String,
    Direccion: String,
    Email: String,
    Foto1: String,
    Foto2: String,

  },
  {
    timestamps: true
  }
);

const Restaurante = mongoose.model('Restaurantes', restauranteSchema);

module.exports = Restaurante;