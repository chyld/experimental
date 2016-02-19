import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import http from 'http';

const WebSocketServer = require("ws").Server

const app = express();
const server = http.createServer(app)
const wss = new WebSocketServer({server: server})

wss.on("connection", function(ws) {
  console.log("websocket connection open");
  ws.send('a');
  ws.send(JSON.stringify({a:3, b:2}));
  ws.on('message', function(data, flags) {
    console.log('***RX***:', data, '---FL---:', flags);
  });
});

server.listen(8080, function(){
  console.log("http server listening on %d", 8080)
});

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
