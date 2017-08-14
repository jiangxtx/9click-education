var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('web-index');
});
router.get('/9clock-manage', function(req, res, next) {
  res.render('index', { title: '后台管理' });
});

module.exports = router;
