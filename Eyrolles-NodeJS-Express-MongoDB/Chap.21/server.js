// server.js
// where your node app starts

// init project
var mongoose = require('mongoose');

var database = 'mongodb://admin:admin1970@ds239117.mlab.com:39117/nodejs-test';

var db = mongoose.connect(database,{
  useMongoClient: true,
  /* other options */});

var messageSchema = mongoose.Schema({
  msg : String,
  priority: Number
});

var Message = mongoose.model("message", messageSchema);

Message.create({msg:'Voici mon premier message',priority:10},function(){
  Message.find(function(err,messages){
    if(err) return console.error(err);
    console.log(messages);
  });
})


