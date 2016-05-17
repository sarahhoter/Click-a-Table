var config = require('config.json');
var mongoose = require('mongoose'); //get DB
var connection = mongoose.createConnection(config.connectionString);//connect to the db server

var service = {};

service.getAll = getAll;

module.exports = service;

var Course = connection.model('Course', {
    id : Number,
    courseTypeId : Number,
    label : String,
    image : String
});

// routes ======================================================================

function getAll() {
    Course.find(function (err, courses) {
        if (err)
            return err;
        return courses; // return all courses in JSON format
    });
}

