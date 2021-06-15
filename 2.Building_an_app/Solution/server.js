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