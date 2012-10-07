var express = require('express');
var md5 = require('cryptojs').Crypto.MD5;
var R = require('request');
var fs = require('fs');
var program = require('commander');
var app = express();

program
  .version('0.0.1')
  .option('-p --port <n>', 'Proxy port', parseInt)
  .option('-O --offline', 'Offline mode')
  .option('-c --cache <path>', 'Cache directory')
  .parse(process.argv);

function merge(a, b) {
  if (a && b) {
    for (var key in a) {
      if (typeof b[key] !== 'undefined') {
        a[key] = b[key];
      }
    }
  }
  return a;
};

var config = {
  offline: false,
  port: 8080,
  cacheDir: 'cache/'
};

merge(config, program);

function download(url, filename, next) {
  R({ uri: url, encoding: null }, function(err, resp, data) {
    if (err) {
      return next(err);
    }
    fs.writeFile(filename, data, next);
  });
}

app.get('/?', function(req, res) {
  var url = req.url.substring(2);
  var filename = config.cacheDir + md5(url);
//  console.log(url + ' => ' + filename);
  fs.exists(filename, function(exists) {
    if (exists) {
      res.sendfile(filename);
    } else if (!config.offline) {
      download(url, filename, function(err) {
        if (err) {
          res.send('File not found', 404);
          return;
        }
        res.sendfile(filename);
      });
    } else {
      res.send('File not found', 404);
    }
  });

});

app.listen(config.port);
console.log('Listening on port ' + config.port);
