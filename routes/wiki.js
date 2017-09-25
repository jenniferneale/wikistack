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

router.get('/:urlTitle',function(req,res,next){
	models.Page.findOne({
		where: {
			urlTitle: req.params.urlTitle
		}
	})
	.then(function(foundPage){
    console.log("foundPage.keys " + Object.keys(foundPage));	
	res.render('wikipage',{title:foundPage.title,content:foundPage.content,authorName:foundPage.author});
  })
  .catch(next);
});

router.post('/add',function(req,res){
	var page = models.Page.build({
		title: req.body.title,
		author: req.body.author,
		content: req.body.content,
		status: req.body.pageStatus? "open" : "closed"
	});
	page.save().then(function(page){
		res.redirect(page.urlTitle);
	}
	
	);
});

