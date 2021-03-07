let mongoose = require('mongoose');

//create a model class
let BusinessModel = mongoose.Schema({
    title: String,
    author: String,
    price: String,
    overview: String,
    published: String 
},
{
    collection : "books"

});

module.exports = mongoose.model('books', BusinessModel);