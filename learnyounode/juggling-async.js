var http = require('http');

var urls = [];
urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);

var results = [];
var results_count = 0;

function getUrl(i, url) {
  http.get(url, function (response) {
    response.setEncoding('utf8');

    response.on('error', function(e) {
      console.log("error: " + e);
    });

    response.on('data', function(data) {
      // console.log("getting i: " + i);
      results[i] += data;
    });

    response.on('end', function() {
      // console.log("ended");
      results_count++;
      if (results_count == 3) {
        printUrls();
      }
    });

  });
}

function printUrls() {
  for (var i = 0; i < results.length; i++) {
    // console.log("printing i: " + i);
    console.log(results[i]);
  }
}

function getUrls() {
  var i = 0;
  urls.forEach(function (url) {
    results[i] = ''; // init the response string
    getUrl(i, url);
    i++;
  });
}

getUrls();
