var express = require('express');
var router = express.Router();
module.exports = router;

const models = require('../models/index.js');
const wikiRouter = require('./wiki');
const userRouter = require('./user');
router.use('/wiki', wikiRouter);
router.use('/user', userRouter);








