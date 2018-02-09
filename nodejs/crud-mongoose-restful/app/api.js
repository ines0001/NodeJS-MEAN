'use strict';

var mongoose = require('mongoose');


module.exports = function(models){
  this.models = models;
  
  this.list_all_tasks = function(req, res) {
    
    this.models.find({}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
  this.create_a_task = function(req, res) {
    var new_task = new this.models(req.body);
    new_task.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  this.read_a_task = function(req, res) {
    this.models.findById(req.params.id, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
  this.update_a_task = function(req, res) {
    this.models.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
  
  this.delete_a_task = function(req, res) {
    this.models.remove({
      _id: req.params.id
    }, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'models successfully deleted' });
    });
  };
}

