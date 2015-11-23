'use strict';

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const delays = {
  'script.js': 0,
  'styles.css': 0
};

function getMimeType(ext) {
  if (ext === '.css') {
    return 'text/css';
  } else if (ext === '.js') {
    return 'text/javascript';
  }
}

function onRequest(req, resp) {
  const pathname = url.parse(req.url).pathname;
  if (pathname === '/') {
    fs.createReadStream('index.html').pipe(resp);
  } else {
    const filename = pathname.substr(1);
    try {
      if (fs.statSync(filename).isFile()) {
        setTimeout(function() {
          resp.setHeader("Content-Type", getMimeType(path.extname(filename)));
          fs.createReadStream(filename).pipe(resp);
        }, delays[filename]);
      }
    } catch (e) {
      console.log(e);
      resp.end();
    }
  }
}

var server = http.createServer(onRequest);
server.listen(8080, function() {
  console.log('Listening on port 8080');
});
