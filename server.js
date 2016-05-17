require('rootpath')();
var express = require('express'); //for routing
var app = express(); //init the server
var config = require('config.json');
var path = require('path');

//initalization for using POST calls
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));//read URL encoded
app.use(bodyParser.json()); //read json data

//static routes init
//app.use('/app', require('./controllers/app.controller'));
app.use('/app', express.static('app'));
app.use('/api/menu', require('./controllers/api/menu.controller'));

// make '/app' default route
app.get('/', function (req, res) {
    //res.sendFile(path.join(__dirname + "/app/index.html"));
    return res.redirect('/app');
});

//listen on port
app.listen(3000, function(){
    console.log("listening on port 3000");
});
