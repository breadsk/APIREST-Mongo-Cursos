const express = require('express');
const ruta = express.Router();
const validarToken = require('../middleware/validarToken');
const { 
    listarUsuariosActivos,
    crearUsuario,
    listarUsuarioPorEmail
} = require('../controller/usuariosController');

              //middleware
ruta.get('/', validarToken,listarUsuariosActivos);

ruta.get('/:email',validarToken,listarUsuarioPorEmail);

ruta.post('/', crearUsuario);

module.exports = ruta;