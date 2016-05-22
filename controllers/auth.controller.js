var express = require('express');
var router = express.Router();

var config = require('config.json');

var mongoose = require('mongoose'); //get DB
var connection = mongoose.createConnection(config.connectionString);//connect to the db server

var userSchema = require('../models/user');
var User = connection.model('User', userSchema);

var request = require('request');

// routes
router.post('/register', function (req, res) {
    var user = new User(req.body);
    user.save();
    res.json(user);
});

module.exports = router;
