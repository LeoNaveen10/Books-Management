


const config = require("../configs/db.configs");
const Sequelize = require("sequelize");


const sequelize=new Sequelize ( config.DB,config.USER,config.PASSWORD,
    {
        HOST : config.HOST,
        dialect : config.dialect,
            pool : {
                max : config.pool.max,
                min : config.pool.min,
                idle : config.pool.idle,
                acquire : config.pool.acquire
            }
    })



const db={};

db.Sequelize=Sequelize;
db.sequelize = sequelize;
db.books =  require("../models/books")(sequelize,Sequelize);
db.user = require("./user")(sequelize,Sequelize);
/**
 * we had established one to many relationship here between user and books
 */

db.user.hasMany(db.books);

module.exports=db;