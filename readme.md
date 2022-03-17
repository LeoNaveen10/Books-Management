INTRODUCTION:
-------------
        In this application, I have created a environment where author can publish their book and customer can buy the book which is updated by author.

TECHNOLOGIES USED : 
-----------------

    * Java Script
    * NODE JS
    * Express ( framework )
    * Sequelize ( ORM tool)

DEPENDENCIES Needed :
------------------------
    * body parser
    * express
    * mysql2
    * sequelize
    * bcrypt
    * jsonwebtoken

MODELS : 
--------
    * USER : 
        -> It contains fields of name, email and password of the user who wants to access the application.
    * BOOK : 
        -> It contains fields of Title, author and Release Date of the book to list on the application.

Controllers :
-------------
    * USER :
        --> Sign Up : Used to do signing up when the first time user wants to access the application.
        --> Sign In : when user wants to sign in once he registered as a customer, Every time user signs in Token will be provided for every activity that the user wants to do.
    * BOOk :
        --> This section has the codes to Create, find One book, Find all book, Delete and Update the book by the user with the authorized token.

MIDDLEWARE :
------------
    * Validation : 
        --> Every API request is validated as per the configuration of the user and book controller.
    * Authorization and Authentication : 
        --> All the API request must be only sent by the authorised user with correct access token Access token and authorisation of user is tested in this part.

SERVER :
-------
    I have connected every level of the application in this server file and used as a place to link Java Script obejcts with DB using Sequelize( ORM TOOL ). The PORT in which this file is running is given in this file only.