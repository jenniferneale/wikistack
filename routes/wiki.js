var express = require('express');
var router = express.Router();
module.exports = router;
var models = require('../models');

router.get('/',function(req,res,next){
	res.redirect('/');
});

router.get('/add',function(req,res){
	res.render('addpage');
});

router.get('/:url',function(req,res){
	var url = req.params.url;
	//var output = models.Page.route.get();
	//console.log("\n\nroute.get: " + output);
});

router.post('/add',function(req,res){
	console.log("req.body.pageStatus " + req.body.pageStatus);
	var page = models.Page.build({
		title: req.body.title,
		urlTitle: generateUrlTitle(req.body.title),
		content: req.body.content,
		status: req.body.pageStatus? "open" : "closed"
	});
	page.save().then(res.redirect('/'));
});

