
const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 80;
server.listen(port);

console.log("webserver started on port: "+port);