var express = require('express');
var app = express();
var router = express.Router();

var config = require('config.json');

var mongoose = require('mongoose'); //get DB
var connection = mongoose.createConnection(config.connectionString);//connect to the db server

var userSchema = require('../models/user');
var User = connection.model('User', userSchema);

var request = require('request');
/*clientSessions = require("client-sessions");
app.use(clientSessions({
    secret: '0GBlXA9EsBt2ZFidf3RPvztczCewBxXK' 
}));*/

// routes
router.post('/register', function (req, res) {
    var user = new User(req.body);
    User.count({ userName: user.userName }, function (err, count) {
        if (count > 0)
        {
            res.json({ isAdded: false, message: "שם משתמש  כבר  קיים במערכת", user: user });
            flagAdded = false;
        }
        else
        {
            console.log(count);
            User.count({ email: user.email }, function (err, count) {
                if (count > 0) {
                    res.json({ isAdded: false, message: "כתובת המייל קיימת במערכת למשתמש אחר", user: user });
                    flagAdded = false;
                }
                else {
                    user.save();
                    res.json({ isAdded: true, message: "משתמש נוסף בהצלחה", user: user });

                }
        
            });
        }
        
    });
});

router.post('/login', function (req, res) {
    var user = new User(req.body);
    //do init just in first time
    User.count({ password: user.password, userName: user.userName }, function (err, count) {
        if (count > 0)
        {
            res.json({ isLogged: true, message: "כניסה בוצעה בהצלחה", user: user });
        }
        else
        {
            res.json({ isLogged: false, message: "הכניסה נכשלה. נתונים שגויים", user: user });
        }
    });

    
});


router.post('/logout', function (req, res) {

    //req.session_state.reset();
    //res.redirect('/');

    
});
router.post('/getuser', function (req, res) {

   


});


module.exports = router;
