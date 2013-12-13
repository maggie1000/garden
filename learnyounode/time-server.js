var net = require('net');

function padZero(num) {
  if (num < 10) {
    num = '0' + num;
  }
  return num;
}

function prettyDate () { 
  var date = new Date();

  var year = date.getFullYear();
  var month = padZero(date.getMonth() + 1); // starts at 0
  var day = padZero(date.getDate());
  var hour = padZero(date.getHours());
  var minute = padZero(date.getMinutes());

  var pretty_date = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;

  return pretty_date;
}

var server = net.createServer( function (socket) {
  // socket is a Node duple xStream (read/write ok)
  var pretty_date = prettyDate();

  socket.write(pretty_date + '\n');
  socket.end();
} );

server.listen(8000);
