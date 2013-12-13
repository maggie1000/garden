var http = require('http');
var fs = require('fs');

var file = process.argv[2];

var server = http.createServer( function (request, response) {
  // stream file as response
  fs.createReadStream(file).pipe(response);
});

server.listen(8000);
