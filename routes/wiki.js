var express = require('express');
var router = express.Router();
module.exports = router;

router.get('/',function(req,res){
	console.log('got here');
	res.send('got to GET /wiki/');
});

router.get('/add',function(req,res){
	res.render('addpage');
});

router.get('/wiki/:url',function(req,res){
	var url = req.params.url;
	//var output = models.Page.route.get();
	//console.log("\n\nroute.get: " + output);
});