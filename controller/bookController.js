


const db = require("../models");

const book_schema = db.books;

exports.create = (req,res)=>{
     const newBook = {
         title : req.body.title,
         author : req.body.author,
         release_date : req.body.release_date,
         userId :req.userId
     }
      
     book_schema.create(newBook).then(data=>{
         res.status(200).send(data);
     }).catch(err=>{
         console.log(err);
         res.status(500).send({
             message : err
         })
     })
}

//find book by ID
exports.findOne = (req,res)=>{
    const bookId =req.params.Id;
    console.log("the params sent is",bookId);
    book_schema.findByPk(bookId).then(data=>{
        res.status(200).send(data);
    }).catch(err=>{
        res.status(500).send({
            message : "wrong request"
        })
    })
}

//find book by title in query
exports.findOneByTitle = (req,res)=>{
    titleQ = req.query.title;
    
    if(title){
     book_schema.findOne({where : {title : titleQ}}).then(data=>{
         res.status(200).send(data);
     }).catch(()=>{
         message : "cannot find the book from the given title"
     })
    }
}

//find the books by release_date
exports.findOneByDate = (req,res)=>{
    dateQuery=req.query.releaseDate;

    book_schema.findOne({where : {date : dateQuery}}).then(data=>{
        res.status(200).send(data);
    }).catch(err=>{
        res.status(500).send({
            message : "book not found on the given published date"
        })
    })
}


//find all books
exports.findAll = (req,res)=>{
    book_schema.findAll().then(data=>{
        res.status(200).send(data);
    }).catch(err=>{
        res.status(500).send({
            message : "wrong request"
        })
    })
}

/**
 * 
 * only the right userID person can access this
 */

exports.update = (req,res)=>{
    const newDetails = {
        title : req.body.title,
        author : req.body.author,
        release_date : req.body.release_date
       
    }
    const bookId = req.params.id;
    const userId = req.userId;

    book_schema.update(newDetails,{where : {id : bookId},returning : true}).then(()=>{
        book_schema.findByPk(bookId).then(data=>{
            res.status(200).send(data);
        })     
    }).catch(err=>{
        res.status(500).send({
            message : "wrong request"
        })
    })
}

exports.delete = (req,res)=>{
    bookId =req.params.id;

    book_schema.destroy({where : {id : bookId}}).then(data=>{
        res.status(200).send(data);
    }).catch(err=>{
        res.status(500).send({
            message : "wrong request"
        })
    })
}
