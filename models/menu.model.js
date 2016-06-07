var mongoose = require('mongoose');
var Schema = mongoose.Schema; //to create Schema

var menuSchema = new Schema({
    id: Number,
    name: String,
    image: String,
    parentId: Number,
    path: String,
    onClick: String
});


module.exports = menuSchema;
