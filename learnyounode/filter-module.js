var fs = require('fs');

module.exports = function(pathName, ext, callback) {
  if (!pathName || !ext) {
    return callback("bad params", []);
  }

  var regex = '\\.' + ext + '$';
  var patt = new RegExp(regex);

  fs.readdir(pathName, function (err, list) {
    if (err) {
      return callback(err, list);
    } else {
      results = [];
      list.forEach(function (filename) {
        if (patt.test(filename)) {
          results.push(filename);
        }
      });
      callback(null, results);
    }
  });
};
