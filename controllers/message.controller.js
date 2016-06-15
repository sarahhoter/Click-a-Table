var express = require('express');
var router = express.Router();

var config = require('config.json');
var mongoose = require('mongoose'); //get DB
var connection = mongoose.createConnection(config.connectionString);//connect to the db server

// var messageSchema = require('../models/message.model');
// var Message = connection.model('Message', messageSchema);

var userCallSchema = require('../models/userCall.model');
var UserCall = connection.model('UserCall', userCallSchema);
var orderItemSchema = require('../models/orderItem.model');
var OrderItem = connection.model('OrderItem', orderItemSchema);
var courseSchema = require('../models/course.model');
var Course = connection.model('Course', courseSchema);
var orderSchema = require('../models/order.model');
var Order = connection.model('Order', orderSchema);

// routes
// router.post('/addMessage', addMessage);
router.post('/closeMessage', closeMessage);
router.post('/closeOrderItem', closeOrderItem);
router.get('/viewOpenUserCallMessages', getOpenUserCallMessages);
router.get('/viewOpenOrders', getOpenOrders);

// var async = require('async');
module.exports = router;
function getOpenUserCallMessages(req, res) {
    UserCall.find({status: 1}).sort({date: 1}).exec(function(err, messages) {
        if (err)
            return handleError(res, err);
        res.json(messages);
    });
}
function getOpenOrders(req, res) {
    var courses = [];
    OrderItem.find({status: 1}).sort({orderTime: 1}).exec(function(err, items) {
        if (err)
            return handleError(res, err);

        var index = 0;
        items.forEach(function(item) {
            console.log("order items: " + item);

            Order.findOne({id : item.orderId}, function(err, order) {
                //console.log("start Course findOne err:" + err);
                if (err)
                    return handleError(res, err);

                Course.findOne({courseId: item.courseId}, function (err, course) {
                    //console.log("start Course findOne err:" + err);
                    if (err)
                        return handleError(res, err);

                    //console.log("start Course findOne course: " + course);

                    if (course != null) {
                        courses.push({
                            orderId: order.id,
                            tableNo: order.tableNo,
                            courseId: course.courseId,
                            label: course.label,
                            price: course.price,
                            amount: item.amount
                        });

                    }

                    index++;

                    if (index == items.length)
                        res.json(courses);
                });
            });
        });
    });

}
/*
function addMessage(req, res) {
    var tableNo = req.body.tableNo;
    var type = req.body.type;
    Message.count({ userId: req.session.user, tableNo: tableNo, type: type, status: 1}, function (err, count) {
        if (count <= 0) {
            var obj = new Message({ userId: req.session.user, tableNo: tableNo, type: type, status: 1, createTime: 0 });
            obj.save(function (err, newItem) {
                if (err)
                    return handleError(res, err);
                res.json({isDone: true, messages: "מלצר בדרך"});
            });
        }
    });
}*/

function closeMessage(req, res) {
    var tableNo = req.body.tableNo;
    var type = req.body.type;
    var restaurantId = req.body.restaurantId;


    UserCall.update({ /*userId: req.session.user._id,*/ restaurantId: restaurantId, tableNo: tableNo, callType: type, status: 1}, {status: 0},
        function(err, numAffected) {
            if (err)
                res.send(err);
            res.json({isDone: true, messages: "קריאה נסגרה"});
        }
    );
}

function closeOrderItem(req, res) {
    var courseId = req.body.courseId;
    var orderId = req.body.orderId;

    OrderItem.update({ orderId: orderId, courseId: courseId, status: 1}, {status: 0},
        function(err, numAffected) {
            if (err)
                res.send(err);
            res.json({isDone: true, messages: "הזמנה נסגרה"});
        }
    );
}

function closeOrder(req, res) {
    var tableNo = req.body.tableNo;
    var orderId = req.body.orderId;
    var date = new Date();
    date.setHours(0,0,0,0);


    Order.update({ id: orderId, tableNo: tableNo, date: date, status: 1}, {status: 0},
        function(err, numAffected) {
            if (err)
                res.send(err);
            res.json({isDone: true, messages: "הזמנה נסגרה"});
        }
    );
}

function handleError(res, err) {
    console.log(err);
    return res.send(err);
}