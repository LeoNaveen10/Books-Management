const db = require("../models");
const bcrypt = require("bcrypt");
const User = db.user;
const jwt = require("jsonwebtoken");
const secretKey = require("../configs/secret");

exports.signUp = (req, res) => {

    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 6)
    }
    User.create(newUser).then(data => {
        
        res.status(200).send({
            message : "user created successfully"
        });
    }).catch(err => {
        message: "error while signup"
    })
}

exports.signIn = (req, res) => {

    User.findOne({ where: { email: req.body.email } }).then(user => {

        if (!user) {
            res.status(400).send({
                message : "user not found"
            })
        }
        else{
            var validatePassword = bcrypt.compareSync(req.body.password,user.password);

            if(!validatePassword){
                res.status(401).send({
                    message : "invalid password"
                })
            }

            var token = jwt.sign({id : user.id},secretKey.secret,{
                expiresIn : 500
            })

            res.status(200).send({
                message : "successfully signed in",
                id : user.id,
                name : user.name,
                email : user.email,
                AccessToken : token
            })
        }
    })
}