var filterModule = require('./filter-module.js')

filterModule(process.argv[2], process.argv[3], function (err, files) {
  if (err) {
    console.log(err);
  } else {
    files.forEach(function (filename) {
      console.log(filename);
    });
  };
});
