
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();

//initialize a simple http server
const server = http.createServer(app);

//initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

app.use('/', express.static(__dirname + '/src/ui')); 
app.use('/build', express.static(__dirname + '/build')); 
app.use('/scripts', express.static(__dirname + '/node_modules'));

let arr = [];


wss.on('connection', function(ws) {
    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {
      console.log('received: %s', message);
      arr.push(parseInt(Math.random()*10));
      ws.send(JSON.stringify(arr));
    });

    ws.on('close', function () {
      console.log('stopping client interval');
    });
    //send immediatly a feedback to the incoming connection    
   ws.send('Hi there, I am a WebSocket server');
});

//start our server
app.get('*', function(req, res) {
  res.sendfile('./src/ui/views/index.html');
});

server.listen(3000, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});