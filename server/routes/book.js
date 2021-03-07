// BookList
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');


//connect to book model
// let Books = require('../models/book');
let bookscontroller = require('../controllers/book');
const { rawListeners } = require('../models/book');

// helper functions for guard purpose
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

//get router for the book list
router.get('/', bookscontroller.displayBookList);

//get router for displaying the Add page- create operation
router.get('/add', requireAuth, bookscontroller.displayAddPage);

//post router for processing the Add page- create operation
router.post('/add', requireAuth, bookscontroller.processAddPage );

//get router for displaying the Edit page- Update operation
router.get('/edit/:id', requireAuth, bookscontroller.displayEditPage);

//post router for processing the Edit page- Update operation
router.post('/edit/:id', requireAuth, bookscontroller.processEditPage);

//get router to perform -Delete operation
router.get('/delete/:id', requireAuth, bookscontroller.performDelete );

    
module.exports = router;

