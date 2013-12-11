// http://stackoverflow.com/questions/19739755/nodejs-callbacks-simple-example

var fs = require('fs');

var myCallback = function (err, data) {
  var str = data.toString();
  var lines_count = str.split('\n').length - 1;
  console.log(lines_count);
};

fs.readFile(process.argv[2], myCallback)
