var express = require('express');
var router = express.Router();

var config = require('config.json');
var mongoose = require('mongoose'); //get DB
var connection = mongoose.createConnection(config.connectionString);//connect to the db server
var initService = require('services/initdb.service');

var tableSchema = require('../models/table.model');
var Table = connection.model('Table', tableSchema);

// var orderService = require('../services/order.service');
// var orderItemService = require('../services/orderItem.service');
// routes
router.post('/takeTable', takeTable);

// var async = require('async');
module.exports = router;

function initTables() {
    //do init just in first time
    Table.count({}, function (err, count) {
        console.log("table count: " + count);

        if (count == 0)
            initService.initTables();

    });
}
function takeTable(req, res) {
    var numSeats = req.body.numSeats;
    if (req.session.user == null) {
        res.json({ isSaved: false, message: "לא ניתן לבצע פעולה זו ללא כניסה למערכת/הרשמה" });
        return;
    }
    initTables();

    Table.findOne({ minSeats: { $lte: numSeats }, maxSeats: { $gte: numSeats }, status: 0 }, function (err, res_table) {
        if (err)
            return handleError(res, err);

        if (res_table == null) {
            res.json({ isSaved: false, message: "מצטערים, לא קיימים מקומות פנויים. נסו אותנו בזמן אחר" });

        }
        else {
            res_table.userId = req.session.user._id;
            res_table.date = new Date();
            res_table.status = 1;
            res_table.save(function (err, res_table) {
                if (err) {
                    console.error(err);
                    return callback(err);
                }
                else {
                    req.session.table = res_table;
                    res.json({ isSaved: true, message: "התקבל מספר שולחן בהצלחה", table: res_table });
                }
            });
            
        }
    });
}

function handleError(res, err) {
    console.log(err);
    return res.send(err);
}