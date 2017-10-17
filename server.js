
const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

process.env.PORT = 80;
var port = process.env.PORT || 5000;
server.listen(port);

console.log("webserver started on port: "+port);