Welcome to the second assignment which is centered around building your first JavaScript application.
With the help of Node.js and Server.js, we are able to host our application on localhost.

1. Open the Visual Studio Code terminal and navigate to /JSTraining/2.Building_an_app/Solution

2.Run npm install within the folder, then run npm init. once complete, this will create your package.json file

3. Create a file named 'server.js'. within this file, paste the following code:

const http = require('http'),
url = require('url'),
 
makeServer = function (request,response){
   let path = url.parse(request.url).pathname;
   console.log(path);
   if(path === '/'){
      response.writeHead(200,{'Content-Type':'text/plain'});
      response.write('Welcome to the home page');
   }
   else if(path === '/about'){
     response.writeHead(200,{'Content-Type':'text/plain'});
     response.write('Welcome to the about page');
   }
   else if(path === '/contact'){
     response.writeHead(200,{'Content-Type':'text/plain'});
     response.write('Welcome to the contact page');
   }
   else{
     response.writeHead(404,{'Content-Type':'text/plain'});
     response.write('Error page');
   }
   response.end();
 },
server = http.createServer(makeServer);
server.listen(3000,()=>{
 console.log('Your application is being hosted at localhost:3000');
});


This creates the server port for your application. const http and const server are both required for server.js to work properly.
Server.on 

4. Within your package.json, you need to change the start command to properly run the app. change the start script to: 
    "start": "node server.js"
   This will allow you to enter npm start to run the application instead of having to type out the file name each time you want to run your app.

5. In the terminal, run 'npm start' or 'node server.js' and navigate to  localhost:3000 to view your application in action.

6. Once running, you'll see the home page message is the only content on the screen. it you click in the search bar and add '/about', you'll be 
redirected to the about page. if you try and go to a page that isn't listed in the server.js file, you'll get an error because you've only specified
routing for a few pages. this concept is how you would build out the server file that would contain all of the routing for your application. in the next
assignment we will flesh this out further.
