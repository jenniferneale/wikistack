var express = require('express');
var router = express.Router();
module.exports = router;
var models = require('../models');

router.get('/', function (req, res, next) {
    res.redirect('/');
});

router.get('/add', function (req, res) {
    res.render('addpage');
});

router.get('/:urlTitle', function (req, res, next) {
    models.Page.findOne({
        where: {
            urlTitle: req.params.urlTitle
        }
    })
        .then(function (foundPage) {
            console.log("foundPage.keys " + Object.keys(foundPage));
            res.render('wikipage', { title: foundPage.title, content: foundPage.content, authorName: foundPage.author });
        })
        .catch(next);
});

router.post('/add', function (req, res) {
    if (req.body)
        var user = models.User.findOrCreate({
            where: {
                name: req.body.author,
                email: req.body.authorEmail
            }
        })
            .then(function (user) {

                return models.Page.create({
                    title: req.body.title,
                    content: req.body.content,
                    status: req.body.pageStatus ? "open" : "closed"
                })
                    .then(function (page) {
                        console.log(user)
                        return page.setAuthor(user[0])
                    })
            })

            .then(function (page) {
                res.redirect(page.urlTitle);
            });
});
