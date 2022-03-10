/**
 * this file will contain middleware for validating request
 */

const validateCreateRequest = (req,res,next)=>{
    if(!req.body.title){
        res.status(500).send({
            message : "Title cannot be empty"
        })
        return;
    }

    if(!req.body.author){
        res.status(500).send({
            message : "author cannot be empty"
        })
        return;
    }
    next();
}
/**
 * validating whether the user signup is right or not
 */
const validateUserSignup = (req,res,next)=>{
    if(!req.body.name){
        res.status(400).send({
            message : "Name not provided"
        })
        return;
    }
    if(!req.body.email){
        res.status(400).send({
            message : "mail not provided"
        })
        return;
    }
    if(!req.body.password){
        res.status(400).send({
            message : " password not provided"
        })
        return;
    }

next();
}

/**
 * validate sign in
 */

const validateSignIN = (req,res,next)=>{
    if(!req.body.email){
        res.status(400).send({
            message : "mail not provided"
        })
        return;
    }
    if(!req.body.password){
        res.status(400).send({
            message : " password not provided"
        })
        return;
    }

next();
    
}

module.exports={
    validateCreateRequest : validateCreateRequest,
    validateUserSignup : validateUserSignup,
    validateSignIN : validateSignIN
}