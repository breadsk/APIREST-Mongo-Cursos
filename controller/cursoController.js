const Curso = require('../models/curso_model');

const listarCursosActivos = async(req,res) => {
    try{

        let cursos = await Curso
            .find({estado:true})
            .populate('autor','nombre email -_id');

        res.json({
            success:true,
            cursos
        });


    }catch(error){
        return res.status(500).json({
            success:false,
            error:'Error interno del servidor'
        });
    }
}

const crearCurso = async(req,res) => {
    try{
        let curso = new Curso({
            titulo: req.body.titulo,
            autor: req.usuario,
            descripcion: req.body.descripcion
        });

        const cursoGuardado = await curso.save();

        return res.status(200).json({
            success:true,
            cursoGuardado
        });

    }catch(error){
        return res.status(500).json({
            success:false,
            error:'Error interno en el servidor'
        })
    }
}

module.exports = {
    crearCurso,
    listarCursosActivos,
}