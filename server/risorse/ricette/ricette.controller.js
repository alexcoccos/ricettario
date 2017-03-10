var mongoose = require('mongoose');
var Ricetta = require('./ricette.model.js');



module.exports = (function(){

  var getRicette = function(req,res){
    res.send("Speriamo ricette buone");
  }

  var dettaglioRicetta = function(req,res){
    var id = req.params.id;
    res.send("dettaglio ricetta");
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
