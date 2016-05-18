var config = require('./../../config.json');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //get DB
var Schema = mongoose.Schema; //to create Schema
var connection = mongoose.createConnection(config.connectionString);//connect to the db server
var courseService = require('./../../services/course.service');

// routes
router.post('/init', initData);
router.get('/', getAll);
router.get('/:courseTypeId', getByCourseItem);

module.exports = router;

var course = new Schema({
    id : Number,
    courseTypeId : Number,
    label : String,
    image : String
});

var Course = connection.model('Course', course);

function initData() {
    Course.update({id: 3}, {courseTypeId: 1, label: "עוף3", image: "food1.jpg"},
        {upsert: true}, //insert if not exists
        function(err, numAffected) {
            if (err)
                res.send(err);
        }
    );

    Course.update({id: 4}, {courseTypeId: 1, label: "עוף1", image: "food2.jpg"},
        {upsert: true}, //insert if not exists
        function(err, numAffected) {
            if (err)
                res.send(err);
        }
    );

    Course.update({id: 5}, {courseTypeId: 2, label: "סושי", image: "food2.jpg"},
        {upsert: true}, //insert if not exists
        function(err, numAffected) {
            if (err)
                res.send(err);
        }
    );
}

function getAll(req, res) {
    initData();
    Course.find(function(err, courses) {
        if (err)
            res.send(err);

        res.json(courses); // return all courses in JSON format
    });
}

function getByCourseItem(req, res) {
    if (req.params.courseTypeId == "0") //TODO for init - maybe should find another way
        getAll(req, res);
    else {
        Course.find({courseTypeId: req.params.courseTypeId}, function (err, courses) {
            if (err)
                res.send(err);

            res.json(courses); // return all courses in JSON format
        });
    }
}
