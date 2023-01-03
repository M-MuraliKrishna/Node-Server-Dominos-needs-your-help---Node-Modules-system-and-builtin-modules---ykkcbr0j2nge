var http = require("http");

const PORT = 8081;

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {

res.writeHead(200);

switch(req.url){

case "/welcome":

res.end("Welcome to Dominos !");

break;

case "/contact":

res.end({

phone: '18602100000',

email: 'guestcaredominos@jublfood.com'

});

break;

default:

res.writeHead(404);

}

}

httpServer.listen(PORT);

module.exports = httpServer;
