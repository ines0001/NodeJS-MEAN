// server.js
// where your node app starts

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  router = require('mongoose-express-router'),
  bodyParser = require('body-parser');
 
/// configuration ===============================================================

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:ines1970@ds239117.mlab.com:39117/nodejs-test'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Testing module mongoose-express-router'
var schema_person = require('./models/Person'),
    schema_task = require('./models/Task')

var User = mongoose.model('User', schema_person.plugin(router));
var Task = mongoose.model('Task', schema_task.plugin(router));

app
  .get('/users', User.router('find'))
  .get('/tasks', Task.router('find'))
  .post('/users', User.router('create'))
  .get('/users/:id', User.router('findOne'))
  .patch('/users/:id', User.router('update'))
  .delete('/users/:id', User.router('delete'));



/*


var routes = require('./app/route'); //importing route
var Person = require('./models/Person'),
    Task = require('./models/Task');
    
routes(app,
       {  models: Task,
          route: {
              root:'/tasks',
              node:'/tasks/:id'
          }
       }); //register the route

routes(app,
       {  models: Person,
          route: {
              root:'/persons',
              node:'/persons/:id'
          }
       }); //register the route
*/

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


