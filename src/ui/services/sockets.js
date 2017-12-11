export default class Sockets { 
  constructor(callback) {
    this.socket = new WebSocket('ws://localhost:3000');
    this.socket.addEventListener('open', function (event) {
      console.log('WebSocket connected');
    });
    this.socket.addEventListener('message', function (event) {
      callback(JSON.parse(event.data));
    });
    this.socket.addEventListener('close', function (event) {
      console.log('WebSocket disconnected');
    });
  }
  sendData(){
    if (this.socket.readyState !== this.socket.CLOSED) {
      this.socket.send('oi');
    }
  }
  closeWebSocketConnection(){
    this.socket.close();
  }
}