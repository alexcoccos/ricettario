var express = require('express');
var app = express();
const PORT = 3000;


//traduzione del oggetto in json
var bodyParser = require('body-parser');
/////////////////////////////////////////

//creiamo le rotte

//////////////////

//file configurazione del db
require('./config/database.js');//servere per fare la connsessione
require('./config/logger.js')(app);
require('./routes/routes.js')(app,express,bodyParser);
////////////////////////////////////////////


//start del server
app.listen(PORT,function(){
  console.log("listening on http://localhost:" + PORT);
});
///////////////////////////////////////
