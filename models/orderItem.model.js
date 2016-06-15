var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderItemSchema = new Schema({
    orderId: Number,
    courseId: Number,
    amount: Number,
    orderTime: Number,
    closeTime: Number,
    status: String
});

// orderItemSchema.index({orderId: 1, courseId: 1}, {unique: true});

module.exports = orderItemSchema;