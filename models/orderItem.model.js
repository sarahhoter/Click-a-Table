var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderItemSchema = new Schema({
    orderId: {type: Schema.Types.ObjectId, ref: 'Order' },
    courseId: {type: Schema.Types.ObjectId, ref: 'Course' },
    amount: Number,
    orderTime: Number,
    closeTime: Number,
    status: String
});

module.exports = orderItemSchema;