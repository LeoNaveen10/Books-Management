


module.exports = (sequelize,Sequelize)=>{

     const books = sequelize.define("books",{
            
        title : {
            type : Sequelize.STRING, 
            allowNull : false
        },
        author : {
            type : Sequelize.STRING,
            allowNull : false
        },
        release_date : {
            type : Sequelize.STRING,
            allowNull : false
        },
        
     })
     return books;

}