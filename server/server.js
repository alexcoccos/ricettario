var express = require('express');
var app = express();
const PORT = 3000;

//creiamo le rotte


//file configurazione del db
require('./config/database.js');//servere per fare la connsessione

require('./routes/routes.js')(app,express);

//start del server
app.listen(PORT,function(){
  console.log("listening on http://localhost:" + PORT);
});
