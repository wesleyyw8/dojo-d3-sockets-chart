
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

let arr = [{
    'x':0,'y':9
  },{
    'x':1,'y':6
  },{
    'x':2,'y':2
  }];

wss.on('connection', function(ws) {
    //connection is up, let's add a simple simple event
    ws._socket.setKeepAlive(true);
    ws.on('message', (message) => {
      function generateValues(){
        arr.push({
          x: (arr.length),
          y: parseInt(Math.random()*100)
        });
        try {
          ws.send(JSON.stringify(arr));
        } catch(err) {
          console.log('Websocket error: %s', err);
        }
        if (arr.length == 30) {
          arr = [];
        }
        setTimeout(generateValues, 1000);
      }
      generateValues();
    });

    ws.on('close', function () {
      console.log('stopping client interval');
    });
});

//start our server
app.get('*', function(req, res) {
  res.sendfile('./src/ui/views/index.html');
});

server.listen(3000, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});