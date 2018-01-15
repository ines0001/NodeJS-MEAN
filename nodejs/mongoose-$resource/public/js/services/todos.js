angular.module('todoService', ['ngResource'])

	// super simple service
	// each function returns a promise object 
	.factory('TodosHttp', ['$http',function($http) {
		return {
			get : function() {
        
				return $http.get('/api/todos');
			},
			create : function(todoData) {
          
				return $http.post('/api/todos', todoData);
			},
			delete : function(id) {
          
				return $http.delete('/api/todos/' + id);
			}
		}
	}]).factory('Todos',['$resource',function($resource){
  
  var action_parameters =   {'update': {  method: 'PUT'},
                             
                             // the $resource service expects a response that receives an array AND NOT an object
                             // the server return all the todos after you create a record
                             'save':   {method:'POST', isArray:true},
                             'get':   {method:'GET', isArray:true},
                             'delete':   {method:'DELETE', isArray:true}
                            };
  return $resource('/api/todos/:id',
                   // paramètre résolue automatiquement sur $save(), $update(), $delete()
                   {id: '@_id',metafields:'true'},
                   action_parameters);
 
}])