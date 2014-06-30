var http = require('http');
var server = http.createServer()

var onRequest = function handleRequest(req, res) {
  var fs = require('fs');

  // if url is / or /index then render index.html
  if (req.url === '/') {
    fs.readFile('./index.html', function(err, page) {
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.write(page);
      res.end();
    });
  // if url is /subpage then render subpage.html
  } else if (req.url === '/subpage') {
    fs.readFile('./subpage.html', function(err, page) {
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.write(page);
      res.end();
    });
    // if url is /assets/styles.css then render styles.css
  } else if (req.url === '/assets/styles.css') {
    fs.readFile('./assets/styles.css', function(err, page) {
      res.writeHead(200, { 'Content-Type': 'text/css'});
      res.write(page);
      res.end();
    });
  // if url is /assets/javascript.js then render javascript.js
  } else if (req.url === '/assets/javascript.js') {
    fs.readFile('./assets/javascript.js', function(err, page) {
      res.writeHead(200, { 'Content-Type': 'text/js'});
      res.write(page);
      res.end();
    });
  // if url is another than / or /supage or index.html then send a 404
  } else {
    res.end('there is no stuff in here');
  };
};

server.listen(3000).on('request', onRequest);
