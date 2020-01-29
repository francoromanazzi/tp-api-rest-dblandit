require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cursosRouter = require('./cursosCRUD/cursosRouter');

const app = express();

// Config
const port = process.env.PORT || 8080;
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/cursos";

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/cursos', cursosRouter);

// Start server
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        app.listen(port, () => { console.log(`Corriendo en port ${port}`) })
    })
    .catch(err => {
        console.log(err);
    });