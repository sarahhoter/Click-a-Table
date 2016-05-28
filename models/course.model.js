var mongoose = require('mongoose');
var Schema = mongoose.Schema; //to create Schema

var courseSchema = new Schema({
    id : Number,
    courseTypeId : Number,
    label : String,
    image : String
});


module.exports = courseSchema;