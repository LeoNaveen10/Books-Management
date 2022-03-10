const jwt = require("jsonwebtoken");
const config = require("../configs/secret");


const verifyToken = (req,res,next)=>{
    var token = req.headers['x-access-token'];

    if(!token){
        return res.status(403).send({
            message : "No token provided"
        })
    }

    jwt.verify(token,config.secret,(err,decodedToken)=>{
        if(err){
            res.status(401).send({
                message : "unauthorized"
            });
            return;
        }
        req.userId = decodedToken.id;
        next();
    })
}
module.exports ={
    verifyToken : verifyToken
}