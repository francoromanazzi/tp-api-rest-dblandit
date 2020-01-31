require('dotenv').config();

const mongoose = require('mongoose');
const fs = require('fs');
const path = require("path");

const Curso = require('../models/Curso');
const Auth = require('../models/Auth');

// Conectar a la BD
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/cursos", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// Leer JSON
const cursos = JSON.parse(fs.readFileSync(path.resolve(__dirname, './cursos.json'), 'utf-8'));
const users = JSON.parse(fs.readFileSync(path.resolve(__dirname, './users.json'), 'utf-8'));

(async () => {
  try {
    await Curso.deleteMany();
    await Auth.deleteMany();

    await Curso.create(cursos);
    await Auth.create(users);

    console.log('Datos importados correctamente');
    process.exit();
  } catch (err) {
    console.error(err);
  }
})();