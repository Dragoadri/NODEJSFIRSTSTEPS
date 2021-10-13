'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectShema = Schema({
    name: String,
    descripcion: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

module.exports = mongoose.model('Proyect', ProjectShema);
//Proyect -> proyects, pluraliza y todo en minusculas