const http = require('http');

const PORT = 8081;

const server = http.createServer((request, response) => {
  if (request.url === '/welcome') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Welcome to Dominos!');
  } else if (request.url === '/contact') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({
      phone: '18602100000',
      email: 'guestcaredominos@jublfood.com'
    }));
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
