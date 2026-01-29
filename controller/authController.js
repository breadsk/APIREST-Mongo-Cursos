const Usuario = require('../models/usuario_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async(req,res) => {

    try{

        const {email,password} = req.body;

        //1. Buscar usuario por el email
        const usuario = await Usuario.findOne({email});

        //2.Si no existe el usuario
        if(!usuario){
            return res.status(404).json({
                success:false,
                error:'Usuario o contraseña incorrecta'
            });
        }

        //3.Verificar password
        const passwordValido = await bcrypt.compare(password,usuario.password);

        if(!passwordValido){
            return res.status(400).json({
                success:false,
                error:'Usuario o contraseña incorrecta'
            });
        }

        const jwToken = jwt.sign({
            usuario:{_id:usuario._id,nombre:usuario.nombre,email:usuario.email}
        },process.env.JWT_SECRET,{expiresIn:'1h'})

        //4.Si todo es correcto , devolver usuario ( sin password)
        return res.status(200).json({
            success:true,
            id:usuario._id,
            nombre:usuario.nombre,
            email:usuario.email,
            jwToken
        });

    }catch(error){
        return res.status(500).json({
            success:false,
            error:'Errro interno del servidor'
        })
    }

}

module.exports = login;