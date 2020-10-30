const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restauranteSchema = new Schema(
  {
    email: String,
    password: String
  },
  {
    timestamps: true
  }
);

const Restaurante = mongoose.model('Restaurantes', restauranteSchema);

module.exports = Restaurante;