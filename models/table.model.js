var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tableSchema = new Schema({
    restaurantId: Number,
    tableNo: Number,
    minSeats: Number,
    maxSeats: Number,
    userId: { type: Schema.Types.ObjectId, ref: 'Users' }, //Number,// 
    date: Date,
    status: Number
});

module.exports = tableSchema;