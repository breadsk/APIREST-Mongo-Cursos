const express = require('express');
const ruta = express.Router();
const validarToken = require('../middleware/validarToken');
const { crearCurso , listarCursosActivos } = require('../controller/cursoController');

ruta.get('/',validarToken,listarCursosActivos);

ruta.post('/',validarToken, crearCurso);

module.exports = ruta;