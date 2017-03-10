module.exports = function(app,express,bodyParser){

  //traduzione del body dell oggetto
  app.use(bodyParser.json());
  //////////////////////

  //rotta utenti
  app.use('/utenti',require('./../risorse/utenti'));
  ///////////////////

  //rotta ricette
  app.use('/ricette',require('./../risorse/ricette'));
  /////////////////////

  //rotta
}
