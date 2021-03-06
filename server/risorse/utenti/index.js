var express = require('express');
var router = express.Router();

var Utente = require('./utenti.controller.js');

//Rotta che mi restitutisce le ricette del mondo
router.get('/',Utente.getUtente);
//Rotta che restituisce i dettagli delle ricette
router.get('/:id([0-9a-f]{24})',Utente.dettaglioUtente);
//Rotta per la icerca delle ricette
router.post('/',Utente.creaUtente);
//Rotta per eliminare le ricette
router.delete('/:id([0-9a-f]{24})',Utente.deleteUtente);
//Rotta ricerca per categoria
router.get('/categoria',Utente.ricercaPerCategoria);
//Rotta ricerca per username
router.get('/username',Utente.ricercaPerUsername);
//Rotta aggiungi categoria
router.put('/categoria/:id([0-9a-f]{24})',Utente.aggiungiCatergoria);
//Rotta elimina categoria
router.put('/eliminac/:id([0-9a-f]{24})',Utente.eliminaCategoria);







module.exports= router;
