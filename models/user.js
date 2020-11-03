const mongoose = require('mongoose');
const { type } = require('os');
const { schema } = require('./restaurantes');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    nombre:String,
    email: String,
    password: String,
    restaurantes: [{
      type: Schema.Types.ObjectId , 
      ref: 'Restaurante'
    } ]
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;