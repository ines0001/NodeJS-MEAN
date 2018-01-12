// server.js
// where your node app starts
const Welcome_msg ='Bienvenue vous êtes actuellement connecté..';
// init project
var express = require('express');
var app = express();
var http = require('http');

var numUser = 0;


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

var server = http.createServer(app)

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(express.static('node_modules'));
// 

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


//Chargement de la socket.io
var io = require('socket.io')(server);

//Quand un client se connecte
io.on('connection', function(client){
  var login = false;
  console.log('nouvelle connexion socket.io:');
  
  client.on('login',function(data){
    login=true;
    ++numUser;
    // session nickname
    client.username  = data.nickname;
    // message de bienvenue
    client.emit('welcome',Welcome_msg);
    // broadcast arrivée nouvelle personne
    client.broadcast.emit('user joined', {username:client.username,numUser:numUser});
    console.log('login de '+client.username);
    
  });
  
  
  
  client.on('error', function(data){console.error(data)});
  client.on('disconnect', function(){
    console.log('deconnexion socket.io');
    if(login) numUser--;
  });
});



// listen for requests :)
var listener = server.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

