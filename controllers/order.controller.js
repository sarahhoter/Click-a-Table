var express = require('express');
var router = express.Router();

var config = require('config.json');
var mongoose = require('mongoose'); //get DB
var connection = mongoose.createConnection(config.connectionString);//connect to the db server

var orderSchema = require('../models/order.model');
var Order = connection.model('Order', orderSchema);
var orderItemSchema = require('../models/orderItem.model');
var OrderItem = connection.model('OrderItem', orderItemSchema);
var courseSchema = require('../models/course.model');
var Course = connection.model('Course', courseSchema);


var orderService = require('../services/order.service');
// routes
router.post('/addOrderItem', orderItem);
 router.get('/viewOrder', viewOrder);
// router.get('/:courseTypeId', getByCourseItem);

// var async = require('async');
module.exports = router;

function viewOrder(req, res) {
    var date = new Date();
    date.setHours(0,0,0,0);
/*    Course.find().populate('orderitems').populate('order', null, {userId: 1, restaurantId: 1, date: date}).exec(function(err, docs) {
        if (err) throw err;

        res.json(docs);
    });*/

   /* Course
        .find({})
        .populate({
            path: 'orderitems'
        })
        .populate({
            path: 'order',
            match: {userId: 1, restaurantId: 1, date: date}
        })
        .exec(function(err, docs) {
            if (err) throw err;

            res.json(docs);
        })*/
    Order.find({userId: 1, restaurantId: 1, date: date})
        .populate('orderitems')
        .populate('course')
        .exec(function(err, docs) {
            if (err) throw err;

            res.json(docs.courses);
        });
}

function orderItem(req, res) {

    var date = new Date();
    date.setHours(0,0,0,0);
    var order = new Order({userId: 1, restaurantId: 1, date: date, status: 1});
    var orderId;

   /* var res_order = orderService.findByExample(order);
    if (res_order == null) {
        order.orderId = 1;
        order.date = date;
        order.createTime = Date.now();
        orderId = orderService.create(order);
    } else {
        orderId = order.id;
    }*/

    Order.findOne(order, function(err, res_order) {
        if (err)
            res.send(err);

        if (res_order == null) {
            order.orderId = 1;//orderService.getNextId();
            order.date = date;
            order.createTime = Date.now();
           orderId = orderService.create(order);
           var newOrder = new Order({orderId: 1,
               userId: 1,
               restaurantId: 1,
               tableNo: 1,
               date: date,
               createTime: Date.now(),
               status: 1 /*open*/ });
            newOrder.save(function(err, newItem) {
                if (err)
                    return console.error(err);
                console.dir(newItem);
                orderId = newItem._id;
            });
        } else {
            orderId = order.id; 
        }
        var orderCourse = new OrderItem({orderId: orderId,
            courseId: req.body.courseId,
            amount: req.body.amount,
            orderTime: 0,
            status: 1 /*open*/});
        orderCourse.save();

        res.json({ isOrdered: true, messages: "ההזמנה בוצעה בהצלחה"});

    });

}

