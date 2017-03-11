var mongoose = require('mongoose');
var Utente = require('./utenti.model.js');



module.exports = (function(){

  var getUtente = function(req,res){
    Utente.find().populate('ricettepreferite').exec().then(function(data){
      res.status(200).json(data);
    }).catch(function(err){
      res.status(500).send(err);
    });
  }

  var dettaglioUtente = function(req,res){
    var id = req.params.id;
    Utente.findById(id).exec().then(function(data){
      res.status(200).json(data);
    }).catch(function(err){
      res.status(500).send(err);
    });
  }


  var creaUtente = function(req,res){
    var nuovoUtente = new Utente(req.body);
    nuovoUtente.save().then(function(data){
      res.status(200).json(data);
    }).catch(function(err){
      res.status(500).send(err);
    });
  }

  var deleteUtente = function(req,res){
    var id = req.params.id;
    Utente.findByIdAndRemove(id).exec().then(function(data){
      res.status(200).json(data);
    }).catch(function(err){
      res.status(500).send(err);
    });
  }

  var ricercaPerCategoria = function(req,res){
    var categoria = req.query.categoria;
    Utente.find({"categoria":categoria}).exec().then(function(data){
      res.status(200).json(data)
    }).catch(function(err){
      res.status(500).send(err);
    });
  }

  var ricercaPerUsername = function(req,res){
    var username = req.query.username;
    Utente.find({"username":username}).exec().then(function(data){
      res.status(200).json(data)
    }).catch(function(err){
      res.status(500).send(err);
    });
  }

  var aggiungiCatergoria = function(req,res){
    var id = req.params.id;
    var categoria = req.body.categoria;
    Utente.findById(id).exec().then(function(Utente){
      console.log(Utente);
      Utente.categoria.push(categoria);
      return Utente.save();
    }).then(function(data){
      res.status(200).json(data);
    }).catch(function(err){
      res.status(500).send(err);
    });
  }



  return{
    getUtente: getUtente,
    dettaglioUtente: dettaglioUtente,
    creaUtente: creaUtente,
    deleteUtente: deleteUtente,
    ricercaPerCategoria: ricercaPerCategoria,
    ricercaPerUsername: ricercaPerUsername,
    aggiungiCatergoria: aggiungiCatergoria
  }
})();
