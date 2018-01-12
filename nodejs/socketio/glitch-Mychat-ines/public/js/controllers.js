'use strict'
/* Controllers */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('ngChat.controllers',[]).controller('MainController', function ($scope,socket) {
  
  
  socket.on('welcome',function(data){
    $scope.message=data;
    $scope.message+='-';
  });
  
  socket.on('user joined',function(data){
    $scope.message+=data.username+' a rejoint le salon';
    $scope.message+='-';
  });
  
  $scope.Login = function(){
    console.log($scope.nickname);
    socket.emit('login',{nickname : $scope.nickname} );
     
  }
});