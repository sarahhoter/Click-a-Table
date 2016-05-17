var config = require('config.json');
var mongoose = require('mongoose'); //get DB
var Schema = mongoose.Schema; //to create Schema
var connection = mongoose.createConnection(config.connectionString);//connect to the db server
//Schema = document
var menu = new Schema({
    id:  Number,
    name: String,
    image: String,
    parentId: Number
});

//model = collection
var Menu = connection.model('Menu', menu);

var service = {};

service.getMenu = getMenu;

module.exports = service;

function getMenu() {
    //find all menu items in db
    Menu.find({}, function(err, menu) {
        var menuMap = {};//return object

        //fill up the object
        menu.forEach(function(item) {
            menuMap[item._id] = item;
        });
        //return the menu object
        return JSON.stringify(menuMap, null, "\t");
    });
}