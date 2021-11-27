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
        p_codigo: req.body.codigo,
        p_nombre: req.body.nombre,
        p_activo: req.body.activo,
        p_cod_alterno: req.body.codigo_alterno,
        p_imagen: req.body.imagen
    } 
    )

    producto.save(function(err)
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
    })
}


exports.find = function(req,res)
{
    Producto.find(function(err,producto)
    {
        res.json(producto)
    })
    
}

exports.findOne = function(req,res)
{
    Producto.findOne({_id: req.params.id},function(err,producto)
    {
        res.json(producto)
    })
}

exports.update = function(req,res)
{
    let producto = 
    {
        p_codigo: req.body.codigo,
        p_nombre: req.body.nombre,
        p_activo: req.body.activo,
        p_cod_alterno: req.body.codigo_alterno,
        p_imagen: req.body.imagen
    }
    Producto.findByIdAndUpdate(req.params.id,{$set: producto},function(err)
    {
        if(err)
        {
            Console.error(err),
            response.exito=false,
            response.msj="Error al actualizar producto"
            res.json(response)
            return;
        }
        response.exito=true,
        response.msj="producto actualizado con exito"
        res.json(response)
    })
}