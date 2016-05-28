var mongoose = require('mongoose');
var Schema = mongoose.Schema; //to create Schema

var courseSchema = new Schema({
    courseId : Number,
    courseTypeId : Number,
    label : String,
    image : String
});


module.exports = courseSchema;