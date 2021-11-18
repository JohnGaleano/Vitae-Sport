const Producto = require("../Models/Productos.model"); 
let response=
{
    msj:"",
    exito:false
}

exports.create=function(req,res)
{
    let producto = new Producto(
    {
        p_codigo: req.body.p_codigo,
        p_nombre: req.body.p_nombre,
        p_activo: req.body.p_activo,
        p_cod_alterno: req.body.p_cod_alterno,
        p_imagen: req.body.p_imagen
    } 
    )
}

exports.save=function(err)
{
    if(err)
    {
        Console.log =false,
        response.exito =false,
        response.msj ="Error al guardar el producto"
        res.json(err)
        return;
    }
    response.exito=true,
    response.msj="Producto guardado con exito"
    res.json(response)

}

