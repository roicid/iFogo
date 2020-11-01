const { url } = require('inspector');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restauranteSchema = new Schema(
  {
    Nombre: String,
    Dirección: String,
    Email: String,
    Foto_1: String,
    Foto_2: String,

  },
  {
    timestamps: true
  }
);

const Restaurante = mongoose.model('Restaurantes', restauranteSchema);

module.exports = Restaurante;