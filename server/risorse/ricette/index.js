var express = require('express');
var router = express.Router();
var Ricetta = require('./ricette.controller.js');

//Rotta che mi restitutisce le ricette del mondo
router.get('/',Ricetta.getRicette);
//Rotta che restituisce i dettagli delle ricette
router.get('/:id([0-9a-f]{24})',Ricetta.dettaglioRicetta);
//Rotta per la icerca delle ricette
router.post('/',Ricetta.creaRicetta);
//Rotta per eliminare le ricette
router.delete('/:id([0-9a-f]{24})',Ricetta.deleteRicetta);
//Rotta ricerca per categoria
router.get('/categoria',Ricetta.ricercaPerCategoria);
//Rotta ricerca per ingredienti
router.get('/ingredienti',Ricetta.ricercaPerIngredienti);











module.exports = router;
