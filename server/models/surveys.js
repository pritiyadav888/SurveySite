let mongoose = require('mongoose');

//create a model class
let SurveyModel = mongoose.Schema({
    name: String,
    author: String,
    que1: String,
    que2: String,
    que3: String,
    que4: String 
},
{
    collection : "surveys"

});

module.exports = mongoose.model('surveys', SurveyModel);