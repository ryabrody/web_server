var http = require('http');
var server = http.createServer()

var onRequest = function handleRequest(req, res) {
  var fs = require('fs');

  // if url is / or /index then render index.html
  if (req.url === '/') {
    res.end('this is the homepage');
  } else if (req.url === '/subpage') {
    res.end('this is the supage');
  };


  // if url is /subpage then render subpage.html
  // if url is another than / or /supage or index.html then send a 404
  res.end('you requested '+ req.url);
};

server.listen(3000).on('request', onRequest);

