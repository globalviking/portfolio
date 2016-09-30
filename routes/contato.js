var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Portfólio' });
});

module.exports = router;
