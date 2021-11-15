const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductosSchema = new Schema
(
{
    p_id:{type: Number, required: true,unique:true,integer:true},
    p_codigo:{type: String, required: true,max:60},
    p_nombre:{type: String, required: true,max:60},
    p_activo:{type: String, required: true,max:60},
    p_cod_alterno:{type: String, required: true,max:60},
    p_precio:{type: Number, required: true}
}
);

module.exports = mongoose.model("empleados",ProductosSchema);


