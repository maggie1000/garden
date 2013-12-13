var http = require('http');
var map = require('through2-map');

var server = http.createServer( function (request, response) {
  // inspect request to make sure only POST is accepted
  if (request.method == 'POST') {
    // upper-case data and respond
    request.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(response);
    
  } else {
    return response.end('a POST is required\n');
  }

});

server.listen(8000);
