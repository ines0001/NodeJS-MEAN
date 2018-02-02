Testing via Postman
Now that everything is now connected, let’s test each of the routes and the respective methods.

Open your postman and type:

http://localhost:3000/tasks in the enter request URL section and press enter.
Screen Shot 2017-03-03 at 8.15.35 PM.png
On enter, you should see “[]” because there is nothing in the database yet.
On the same address, change the method to POST, click body and select “x-www-form-urlencoded”.
Then, enter name as the key and the corresponding task name as value.
After this, click on send button.
This should give you a response 200 ok
Screen Shot 2017-03-03 at 8.12.55 PM.png

Adding a middleware
Having done all these, what happens if we entered a wrong route? say you entered 'http://localhost:3000/task', It responds with a message “Cannot GET /task”. Let’s add express middleware which could be used to return more interactive messages.

Middlewares basically intercepts incoming http request and as such you can use them to perform several operations ranging from authentication to validations etc.

To do this, open your server.js file and paste the code snippet into it.
