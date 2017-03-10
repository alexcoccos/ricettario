var express = require('express');
var router = express.Router();
var Ricetta = require('./ricette.controller.js');

//Rotta che mi restitutisce le ricette del mondo
router.get('/',Ricetta.getRicette);

router.get('/:id([0-9a-f]{24})',Ricetta.dettaglioRicetta);

router.post('/',Ricetta.creaRicetta);










module.exports = router;
