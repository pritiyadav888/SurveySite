// Survey
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');


//connect to Survey model
// let Books = require('../models/book');
let surveycontroller = require('../controllers/survey');
const { rawListeners } = require('../models/surveys');

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

//get router for the Survey list
router.get('/', surveycontroller.displaySurvey);

//get router for displaying the Add page- create operation
router.get('/add', requireAuth, surveycontroller.displayAddPage);

//post router for processing the Add page- create operation
router.post('/add', requireAuth, surveycontroller.processAddPage );

//get router for displaying the Edit page- Update operation
router.get('/edit/:id', requireAuth, surveycontroller.displayEditPage);

//post router for processing the Edit page- Update operation
router.post('/edit/:id', requireAuth, surveycontroller.processEditPage);

//get router to perform -Delete operation
router.get('/delete/:id', requireAuth, surveycontroller.performDelete );

    
module.exports = router;

