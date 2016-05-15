var config = require('config.json');
var express = require('express');
var router = express.Router();
var menuService = require('services/menu.service');

// routes
router.get('/menu', getMenu);

module.exports = router;

function getMenu(req, res) {
    menuService.getMenu()
        .then(function (menu) {
            if (menu) {
                res.send(menu);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}