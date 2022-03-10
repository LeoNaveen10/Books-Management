

const book_controller = require("../controller/bookController");
const { verifyToken } = require("../middleware/authjwt");
const { validateCreateRequest } = require("../middleware/validateRequest");


module.exports = (app)=>{

    app.get("/books/v1/newwebsite/",book_controller.findAll);
    app.get("/books/v1/newwebsite/:Id",book_controller.findOne);
    app.get("/books/v1/newwebsite/",book_controller.findOneByDate);    
    app.get("/books/v1/newwebsite/",book_controller.findOneByTitle);

/**
 * we can get the user id from the verifyToken
 */
    app.post("/books/v1/newwebsite/",[validateCreateRequest,verifyToken],book_controller.create);
    
    /**
     * only user with correct userID logged in have the access to do delete or update
     */
    app.delete("/books/v1/newwebsite/:id",[verifyToken],book_controller.delete);
    app.put("/books/v1/newwebsite/:id",[verifyToken],book_controller.update);

}