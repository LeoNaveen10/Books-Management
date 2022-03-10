

module.exports = {
    USER : "root",
    PASSWORD : "1234",
    DB : "book_db",
    HOST : "localhost",
    dialect : "mysql",
    pool : {
        max : 5,
        min : 0,
        idle : 1000,
        acquire : 30000
    }
}