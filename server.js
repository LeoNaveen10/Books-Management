
const express = require("express");
const db = require("./models/index");

const app= express();
const bodyParser =require("body-parser");
app.use(bodyParser.json());


db.sequelize.sync({force : true}).then(()=>{
    console.log("tables recreated successfully");
}).catch(err=>{
    console.log("error in creating tables");
})

require("./Routes/books.routes")(app);
require("./Routes/userRoutes")(app);

app.listen(6000,()=>{
    console.log("server started at 6000");
})
