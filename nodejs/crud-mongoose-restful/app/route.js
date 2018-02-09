'use strict';
module.exports = function(app,info) {
var Crud_api = require('./api');
var todoList = new Crud_api(info.models);
    
  // todoList Routes
  app.route(info.route.root)
    .get(function(req, res){ todoList.list_all_tasks(req,res);})
    .post(function(req, res){ todoList.create_a_task(req,res);});


  app.route(info.route.node)
    .get(function(req, res){ todoList.read_a_task(req,res);})
    .put(function(req, res){ todoList.update_a_task(req,res);})
    .delete(function(req, res){ todoList.delete_a_task(req,res);});
};
