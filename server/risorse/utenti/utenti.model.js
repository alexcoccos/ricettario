var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UtenteSchema = new Schema({
  username:
  {
    type: String,
    unique: true,
    required: [true, "devi mettere il titolo"]
  },
  password:
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
  avatar:
  {
    type: String,
    default: "https://us.123rf.com/450wm/yupiramos/yupiramos1608/yupiramos160808361/61073241-chef-profile-avatar-isolated-flat-icon-design.jpg?ver=6"
  },
  ricettepreferite:
  [{
    type: Schema.Types.ObjectId,
    ref: 'Ricette'
  }]

});

var Utente = mongoose.model('Utente',UtenteSchema);
module.exports = Utente;
