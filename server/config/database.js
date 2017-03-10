var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds161059.mlab.com:61059/ricettario',function(err){

  if(!err){
    console.log('connesso al dbricettario');
  }else{
    console.log(err);
  }

});
