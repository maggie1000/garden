var fs = require('fs');

// filter directory by extension
var filterByExt = function (err, list) {

  list.forEach(function (filename) {
    if (patt.test(filename)) {
      console.log(filename);
    }
  });

  /*
  for (var i = 0; i < list.length; i++) {
    if (patt.test(list[i])) {
      console.log(list[i]);
    }
  }
  */
};

// param 1
var pathName = process.argv[2];

// param 2
var ext = process.argv[3];
var regex = '\\.' + ext + '$';
var patt = new RegExp(regex);

// read directory
fs.readdir(pathName, filterByExt);
