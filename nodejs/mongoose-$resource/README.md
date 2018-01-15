# Node Todo App

Version adapté d'une application client-server sous Node.js avec utilisation du service mongoose coté server pour l'accès à une BDD MongoDB
Utilisation du framework AngularJS coté Frontend avec le service $resource pour l'accès aux données depuis le serveur via l'api RESTfuly natif

## Requirements

- coté serveur :
```
"body-parser": "^1.18.2",
"mongoose": "^4.10.8",
"express": "^4.10.8",
"method-override": "^2.3.10",
"morgan": "^1.9.0",
```

- coté frondend
```
"angular": "^1.6.8",
"angular-resource": "^1.6.8"
```
## Installation

1. Clone the repository: `git clone xxxx`
2. Install the application: `npm install`
3. Place your own MongoDB URI in `config/database.js`
3. Start the server: `node server.js`
4. View in browser at `http://localhost:8080`

## Tutorial Series

###Frondend

Utisation du service 'Todos' :

```
factory('Todos',['$resource',function($resource){
  
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
```

Note: chaque methode CRUD doivent être redéfinis avec un tableau en retour ( If true then the returned object for this action is an array)

![Todo-aholic](http://i.imgur.com/ikyqgrn.png)
