var mongoose = require('mongoose');
var Ricetta = require('./ricette.model.js');



module.exports = (function(){

  var getRicette = function(req,res){
    Ricetta.find().exec().then(function(data){
      res.status(200).json(data);
    }).catch(function(err){
      res.status(500).send(err);
    });
  }

  var dettaglioRicetta = function(req,res){
    var id = req.params.id;
    Ricetta.findById(id).exec().then(function(data){
      res.status(200).json(data);
    }).catch(function(err){
      res.status(500).send(err);
    });
  }


  var creaRicetta = function(req,res){
    var nuovaRicetta = new Ricetta(req.body);
    nuovaRicetta.save().then(function(data){
      res.status(200).json(data);
    }).catch(function(err){
      res.status(500).send(err);
    });
  }

  var deleteRicetta = function(req,res){
    var id = req.params.id;
    Ricetta.findByIdAndRemove(id).exec().then(function(data){
      res.status(200).json(data);
    }).catch(function(err){
      res.status(500).send(err);
    });
  }

  var ricercaPerCategoria = function(req,res){
    var categoria = req.query.categoria;
    Ricetta.find({"categoria":categoria}).exec().then(function(data){
      res.status(200).json(data)
    }).catch(function(err){
      res.status(500).send(err);
    });
  }
  var ricercaPerIngredienti = function(req,res){
    var ingredienti = req.query.ingredienti;
    Ricetta.find({"ingredienti":ingredienti}).exec().then(function(data){
      res.status(200).json(data)
    }).catch(function(err){
      res.status(500).send(err);
    });
  }
  var votaRicetta = function(req,res){
    var id = req.params.id;
    var voto = req.body.voto;
    Ricetta.findById(id).exec().then(function(ricetta){
      ricetta.voto.numerovoti+=1;
      ricetta.voto.sommavoti+=voto;
      return ricetta.save();
    }).then(function(data){
      res.status(200).json(data);
    }).catch(function(err){
      res.status(500).send(err);
    })
  }

  var commentaRicetta = function(req,res){
    var id = req.params.id;
    Ricetta.findById(id).exec().then(function(ricetta){
      ricetta.commenti.push(req.body);
      return ricetta.save();
    }).then(function(data){
      res.status(200).json(data);
    }).catch(function(err){
      res.status(500).send();
    });
  }






  return{
    getRicette: getRicette,
    dettaglioRicetta: dettaglioRicetta,
    creaRicetta: creaRicetta,
    deleteRicetta: deleteRicetta,
    ricercaPerCategoria: ricercaPerCategoria,
    ricercaPerIngredienti: ricercaPerIngredienti,
    votaRicetta: votaRicetta,
    commentaRicetta: commentaRicetta
  }
})();
