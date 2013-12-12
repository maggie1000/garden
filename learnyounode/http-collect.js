// var concat = require('concat-stream');
var http = require('http');

var url = process.argv[2];
// var msg = concat(function(buff) {});
var msg = '';

var request = http.get(url, function (response) {
  // response is a Node Stream object
  response.setEncoding('utf8');

  // response.pipe(msg);

  response.on('data', function(data) {
    msg += data;
  });

  response.on('end', function () {
    console.log(msg.length);
    console.log(msg);
  });

  response.on('error', function(e) {
    console.log("error occurred: " + e.message);
  });

});
