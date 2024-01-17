var express = require("express");
var app = express();
var ExpressPeerServer = require("peer").ExpressPeerServer;
var peerServer = ExpressPeerServer(server, { debug: true });

var server = require("http").createServer(app);
app.use(
  "/",
  ExpressPeerServer(server, {
    debug: true,
  })
);

server.listen(3002, function () {
  console.log("listening on *:3002");
});
server.on("connection", function (id) {
  console.log("New client connected with id " + id);
  console.log(id);
});
