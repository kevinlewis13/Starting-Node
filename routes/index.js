var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Hullo' });
});

router.get('/poop', function(req, res) {
  res.render('app', {title: 'Wokka Wokka'});
});

module.exports = router;
