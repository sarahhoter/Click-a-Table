var express = require('express');
var router = express.Router();

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

// routes
router.get('/getMenu', getMenu);

module.exports = router;

function init() {
    //var arr = [];
    //arr.push({ id: 1, name: "test", image: "book.png", parentId: 0});
    //arr.save();

    //Menu.remove({});

    var obj = new Menu({ id: 1, name: "תפריט", image: "book.png", parentId: 0});
    obj.save();

    obj = new Menu({ id: 2, name: "קינוחים", image: "book2.png", parentId: 0});
    obj.save();

    obj = new Menu({ id: 3, name: "שתיה", image: "drink.png", parentId: 0});
    obj.save();

    obj = new Menu({ id: 4, name: "מה הזמנתי", image: "book3.png", parentId: 0});
    obj.save();

    obj = new Menu({ id: 5, name: "test", image: "book3.png", parentId: 1});
    obj.save();

}

function getMenu(req, res) {
    if (Menu.count({}) == 0)
		init();

    //find all menu items in db
    Menu.find({ parentId: 0 }, function(err, menu) {
        var menuMap = {};//return object

        //fill up the object
        menu.forEach(function(item) {
            menuMap[item._id] = item;
        });
        //return the menu object
        res.end(JSON.stringify(menuMap, null, "\t"));
    });
}