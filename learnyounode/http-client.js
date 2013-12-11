var http = require('http');

var url = process.argv[2];

var request = http.get(url, function (response) {
  // response is a Node Stream object
  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log(data); 
  });

  response.on('error', function (error) {
    console.log(error);
  });

  response.on('end', function () {
    // nada
  });

});
