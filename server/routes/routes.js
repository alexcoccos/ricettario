module.exports = function(app,express){
  //rotta utenti
  app.use('/utenti',require('./../risorse/utenti'));

  //rotta ricette
  app.use('/ricette',require('./../risorse/ricette'));

  //rotta
}
