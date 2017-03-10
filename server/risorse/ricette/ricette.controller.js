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
      res.status(500).json(err);
    });
  }






  return{
    getRicette: getRicette,
    dettaglioRicetta: dettaglioRicetta,
    creaRicetta: creaRicetta
  }
})();
