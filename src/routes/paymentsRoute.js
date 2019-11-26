var express = require('express');
var router = express.Router();

var payment_checkout = require('../controllers/paymentsController');

// Home page route.
router.get('/', function (req, res) {
  res.send('Wiki home page');
});

// About page route.
router.get('/checkout/:id/:email/:description/:amount', payment_checkout.checkout);

router.get('/success', function(req, res) {  
    res.render('success_screen');
});

module.exports = router;