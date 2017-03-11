var express = require('express');
var router = express.Router();

var Utente = require('./utenti.controller.js');

//Rotta che mi restitutisce le ricette del mondo
router.get('/',Utente.getUtente);
//Rotta che restituisce i dettagli delle ricette
router.get('/:id([0-9a-f]{24})',Utente.dettaglioUtente);
// //Rotta per la icerca delle ricette
router.post('/',Utente.creaUtente);
// //Rotta per eliminare le ricette
router.delete('/:id([0-9a-f]{24})',Utente.deleteUtente);






module.exports= router;
