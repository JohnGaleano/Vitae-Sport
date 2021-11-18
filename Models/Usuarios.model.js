const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema
(
{
    usr_login:{type: String, required: true,max:90},
    usr_nombre:{type: String, required: true,max:600},
    usr_activo:{type: Boolean, required: true},
    usr_logo:{type: String, required: true,max:900},
    usr_img_perfil:{type: String, required: true,max:900}
}
);

module.exports = mongoose.model("Usuarios",UsuariosSchema);


