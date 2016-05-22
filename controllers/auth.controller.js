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
    //do init just in first time
    User.count({email: user.email,userName: user.userName}, function(err, count){
        if (count > 0)
        {
            res.json({ isAdded: false, Messages: "שם משתמש  / כתובת המייל קיימים במערכת", user: user });
        }
        else
        {
            user.save();
            res.json({ isAdded: true, Messages: "המשתמש נוסף בהצלחה", user: user });
        }
    });
});

router.post('/login', function (req, res) {
    var user = new User(req.body);
    //do init just in first time
    User.count({ password: user.password, userName: user.userName }, function (err, count) {
        if (count > 0)
        {
            res.json({ isLogged: true, Messages: "כניסה בוצעה בהצלחה", user: user });
        }
        else
        {
            res.json({ isLogged: false, Messages: "הכניסה נכשלה. נתונים שגויים", user: user });
        }
    });

    
});
module.exports = router;
