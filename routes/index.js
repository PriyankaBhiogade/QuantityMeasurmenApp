const express = require('express');
const router = express.Router();
const controller = require('../Controller/UnitsConverstionController')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Welcome To Quantity Measurements App' });
// });
router.post('/lengthConversion',controller.unitConversionController)

module.exports = router;
