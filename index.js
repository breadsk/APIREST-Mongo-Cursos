const express = require('express');
const usuarios = require('./routes/usuarios');
const auth = require('./routes/auth');
require('dotenv').config();
const connectDB = require('./config/database');

//Routers


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Se esta conectando
connectDB();
//Rutas
app.use('/api/usuarios',usuarios);
app.use('/api/auth',auth);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor corriendo correctamente en puerto: ${port}`);
});