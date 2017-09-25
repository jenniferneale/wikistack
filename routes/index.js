var express = require('express');
var router = express.Router();
module.exports = router;

const models = require('../models/index.js');
const wikiRouter = require('./wiki');
const userRouter = require('./user');
router.use('/wiki', wikiRouter);
router.use('/user', userRouter);

router.get('/',function(req,res,next){
	models.Page.findAll()
	.then(function(p){    
	res.render('index',{pages:p});
  })
  .catch(next);
	
	
	
});






