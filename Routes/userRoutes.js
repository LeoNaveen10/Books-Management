const userController = require("../controller/userController");

const { validateUserSignup, validateSignIN } = require("../middleware/validateRequest");

module.exports =(app)=>{

    app.post("/books/v1/newwebsite/signup",[validateUserSignup],userController.signUp);
    app.post("/books/v1/newwebsite/signin",[validateSignIN],userController.signIn);

}