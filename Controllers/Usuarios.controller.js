const Producto = require("../Models/Usuarios.model"); 
let response=
{
    msj:"",
    exito:false
}

exports.create=function(req,res)
{
    let producto = new Producto(
    {
        usr_login: req.body.usr_login,
        usr_nombre: req.body.usr_nombre,
        usr_activo: req.body.usr_activo,
        usr_logo: req.body.usr_logo,
        usr_img_perfil: req.body.usr_img_perfil
    } 
    )
}

exports.save=function(err)
{
    if(err)
    {
        Console.log =false,
        response.exito =false,
        response.msj ="Error al guardar el usuario"
        res.json(err)
        return;
    }
    response.exito=true,
    response.msj="usuario guardado con exito"
    res.json(response)

}

