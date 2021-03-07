let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to Book model
let books = require('../models/book');

module.exports.displayBookList = (req, res, next) => {
    books.find((err, BookList) => {
        if (err) {
            return console.error(err);
        }
        else {
            //    console.log(BookList);
            res.render('book/list',
             { title: 'books', 
             BookList: BookList, 
             displayName: req.user ? req.user.displayName: ''});
        }

    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('book/add', { title: 'Add Book',
    displayName: req.user ? req.user.displayName: '' });

}

module.exports.processAddPage = (req, res, next) => {
    let newbooks = books({
        "title": req.body.title,
        'author': req.body.author,
        "price": req.body.price,
        "overview": req.body.overview,
        "published": req.body.published
    
  
    });
    books.create(newbooks, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the Book list.
            res.redirect("/books-list");
        }
    });

}
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    books.findById(id, (err, BookToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('book/edit', { title: 'Edit Book', books: BookToEdit,
            displayName: req.user ? req.user.displayName: '' });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    
    let updatedBook = books({
        '_id' : id,
        "title": req.body.title,
        'author': req.body.author,
        "price": req.body.price,
        "overview": req.body.overview,
        "published": req.body.published
    });
    books.updateOne({_id: id}, updatedBook, (err) =>{
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the Book-list
            res.redirect("/books-list");
        }

    });

}
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    books.remove({_id: id}, (err)=> {

        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //refresh the Book-list
            res.redirect("/books-list");
        }


    });


}



