const express = require('express');
const ruta = express.Router();
const { 
    listarUsuariosActivos,
    crearUsuario,
    listarUsuarioPorEmail
} = require('../controller/usuariosController');


ruta.get('/', listarUsuariosActivos);

ruta.get('/:email',listarUsuarioPorEmail);

ruta.post('/', crearUsuario);

module.exports = ruta;