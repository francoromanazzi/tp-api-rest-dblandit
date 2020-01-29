const mongoose = require('mongoose');

const Cliente = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: String,
    direccion: String,
    nota: Number
}, { _id: false });

module.exports = Cliente;