var express = require('express');
var router = express.Router();
module.exports = router;

router.get('/', function (req, res) {
    res.send('got to GET /users/');
});

router.get('/add', function (req, res) {
    res.render('adduser');
});

router.get('/:url', function (req, res) {
    var url = req.params.url;
    //var output = models.Page.route.get();
    //console.log("\n\nroute.get: " + output);
});