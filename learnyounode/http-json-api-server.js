var http = require('http');
var url = require('url');

var server = http.createServer( function (request, response) {
  
  var parsed_url = url.parse(request.url, true); 
  var time = new Date(parsed_url.query.iso);
  var result;

  if (parsed_url.pathname == '/api/parsetime') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    result = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
    response.end(JSON.stringify(result));

  } else if (parsed_url.pathname == '/api/unixtime') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    result = {
      unixtime: time.getTime()
    }
    response.end(JSON.stringify(result));

  } else {
    response.writeHead(404);
    response.end();
  }

});

server.listen(8000);
