export default class Sockets { 
  constructor() {
    this.socket = new WebSocket('ws://localhost:3000');
    this.socket.addEventListener('open', function (event) {
      console.log('WebSocket connected');
    });
    this.socket.addEventListener('message', function (event) {
      console.log('Message from server ', event.data);
    });
    this.socket.addEventListener('close', function (event) {
      console.log('WebSocket disconnected');
    });
  }
  sendData(){
    new Promise
    this.socket.send('oi');
  }
  closeWebSocketConnection(){
    this.socket.close();
  }
}