var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ricettaSchema = new Schema({
  titolo:
  {
    type: String,
    required: [true, "devi mettere il titolo"]
  },
  categoria:
  {
    type: String,
    required: [true, "inserisci la categoria"],
    enum: ["Antipasto","Primo","Secondo","Contorni","Dolci"]
  },
  difficoltà:
  {
    type: String,
    enum: ["Facile","Medio", "Difficile"],
    required: [true,"inserire difficoltà"]
  },
  immagini:
  [{
    type: String,
    required: [true, "inserisci immagine"]
  }],
  tempodicottura:
  {
    type: Number,
    required: [true, "inserisci il tempo di cottura"],
    min: [5,""],
    max: [100,""]
  },
  gradicottura:
  {
    type: Number,
    required: [true, "inserisci temperatura di cottura"],
    min: [5,""],
    max: [250,""]
  },
  preparazione:
  {
    type: String,
    required: [true, "inserisci le modlità di preparazione"],
  },
  ingredienti:
  [{
    type: String,
    required: [true, "inserisci gli ingredienti"]
  }],
  voto:
  {
    numerovoti:{type:Number},
    sommavoti: {type: Number}
  },
  commenti:
  [{
    autore: {type: Schema.Types.ObjectId, ref:"Utenti"},
    commento: {
      type:String
    },
    datacreazione: {
      type:Date
    }

  }],

});

var Ricetta = mongoose.model('Ricette',ricettaSchema);
module.exports = Ricetta;
