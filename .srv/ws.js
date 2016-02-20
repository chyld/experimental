'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const WebSocketServer = require("ws").Server;

const app = (0, _express2.default)();
const server = _http2.default.createServer(app);
const wss = new WebSocketServer({ server: server });

wss.on("connection", function (ws) {
  console.log("websocket connection open");
  ws.send('a');
  ws.send(JSON.stringify({ a: 3, b: 2 }));
  ws.on('message', function (data, flags) {
    console.log('***RX***:', data, '---FL---:', flags);
  });
});

server.listen(8080, function () {
  console.log("http server listening on %d", 8080);
});

app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.static(__dirname + '/../public'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));