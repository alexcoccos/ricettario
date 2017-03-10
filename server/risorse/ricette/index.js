var express = require('express');
var router = express.Router();
var Ricette = require('./ricette.controller.js');

//Rotta che mi restitutisce le ricette del mondo
router.get('/',Ricette.getRicette);









module.exports = router;
