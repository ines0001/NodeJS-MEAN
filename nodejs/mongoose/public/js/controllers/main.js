angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all todos and show them
		// use the service to get all the todos
		
		// UPDATE angular 1.6.0
		// $http:
		//remove deprecated callback methods: success()/error() (b54a39)
		//JSONP callback must be specified by jsonpCallbackParam config (fb6634, #15161, #11352)
		//JSONP requests now require a trusted resource URL (6476af, #11352)
		
		Todos.get()
			.then(function(response) {
				$scope.todos = response.data;
        			$scope.loading = false;
			},function(err){console.log('error:'+err);});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createTodo = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.text != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Todos.create($scope.formData)

					// if successful creation, call our get function to get all the new todos
					.then(function(response) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.todos = response.data; // assign our new list of todos
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteTodo = function(id) {
			$scope.loading = true;

			Todos.delete(id)
				// if successful creation, call our get function to get all the new todos
				.then(function(response) {
					$scope.loading = false;
					$scope.todos = response.data; // assign our new list of todos
				});
		};
	}]);
