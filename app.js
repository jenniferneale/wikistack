const express = require('express');
const app = express();
// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

var models = require('./models');

models.User.sync({})
.then(function (){
  return models.Page.sync({})
})
.then(function() {
  app.listen(3000, function(){
    console.log('Server is listening on port 3000!')
  });
})
.catch(console.error);
