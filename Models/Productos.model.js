const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema
(
{
    p_codigo:{type: String, required: true,max:60},
    p_nombre:{type: String, required: true,max:600},
    p_activo:{type: Boolean, required: true},
    p_cod_alterno:{type: String, required: true,max:120},
    p_imagen:{type: String, required: true,max:900}
}
);


module.exports = mongoose.model("Productos",ProductosSchema);


