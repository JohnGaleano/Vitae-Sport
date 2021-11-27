const jwt = require("jsonwebtoken")
const auth = (req,res,next) => 
{
    try
    {
        const token = req.headers.autorization.split(" ")[1]
        const decoded = jwt.verify(token,"_recret_")
        request.usuario = decoded
        next()

    }
    catch (error)
    { 
        res.status(401)
        res.json(
            {
            code:401,
            msj:"No tiene permisos para acceder"
            }
        )
    }
}

module.exports= auth