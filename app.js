 // requires
var express = require('express');
var fs = require('fs');
var http = require('http');

var config = JSON.parse(fs.readFileSync('config.json'));
var routes = require('./routes.js');

// create the express server
var app = express();
var server = http.createServer(app);

// set up the express server
app.use(app.router);
routes.attachHandlers(app, config);
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + config.public_dir));

// start the http server
console.log('[+] Starting server on ' + config.http_host + ':' + config.http_port);
server.listen(config.http_port, config.http_host);
