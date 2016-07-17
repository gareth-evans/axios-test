//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=8181; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    if(request.url === '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;
    }
    var responseCode = new Number(request.url.substring(1));
    console.log(responseCode);
    response.writeHead(responseCode);
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});