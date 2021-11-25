const Usuario = require("../Models/Usuarios.model"); 
let response=
{
    msj:"",
    exito:false
}

exports.create=function(req,res)
{
    let usuario = new Usuario(
    {
        usr_login: req.body.login,
        usr_nombre: req.body.nombre,
        usr_password: req.body.password,
        usr_activo: req.body.activo,
        usr_logo: req.body.logo,
        usr_img_perfil: req.body.imagen
    } 
    )

    usuario.save(function(err)
    {
        if(err)
        {
            console.log =false,
            response.exito =false,
            response.msj ="Error al guardar el usuario"
            res.json(err)
            return;
        }
        response.exito=true,
        response.msj="Usuario guardado con exito"
        res.json(response)
    })
}


exports.find = function(req,res)
{
    Usuario.find(function(err,usuario)
    {
        res.json(usuario)
    })
    
}

exports.findOne = function(req,res)
{
    Usuario.findOne({_id: req.params.id},function(err,usuario)
    {
        res.json(usuario)
    })
}

exports.update = function(req,res)
{
    let usuario = 
    {
        usr_login: req.body.login,
        usr_nombre: req.body.nombre,
        usr_password: req.body.password,
        usr_activo: req.body.activo,
        usr_logo: req.body.logo,
        usr_img_perfil: req.body.imagen
    }
    Usuario.findByIdAndUpdate(req.params.id,{$set: usuario},function(err)
    {
        if(err)
        {
            console.error(err),
            response.exito=false,
            response.msj="Error al actualizar usuario"
            res.json(response)
            return;
        }
        responde.exito=true,
        response.msj="usuario actualizado con exito"
        res.json(response)
    })
}