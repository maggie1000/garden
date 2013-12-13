var http = require('http');
var fs = require('fs');

var port = Number(process.argv[2]); // make sure it's numeric
var file = process.argv[3];

var server = http.createServer( function (request, response) {
  // stream file as response
  fs.createReadStream(file).pipe(response);
});

server.listen(port);
