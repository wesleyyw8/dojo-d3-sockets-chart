import { app } from './../config/config';
import Sockets from './../services/sockets';
app.controller('homeController', ['$scope', '$timeout', function ($scope, $timeout) {

  const socketObj = new Sockets();
  $timeout(() => {
    socketObj.sendData();
  }, 1000);
  // const socket = new WebSocket('ws://localhost:3000');
  // socket.addEventListener('open', function (event) {
  //   console.log('WebSocket connected');
  // });
  // socket.addEventListener('message', function (event) {
  //   console.log('Message from server ', event.data);
  // });

  // socket.addEventListener('close', function (event) {
  //   console.log('WebSocket disconnected');
  // });

  // $scope.generateData = () => {
  //   socket.send('oi');
  // };

  // $scope.closeWebSocketConnection = () => {
  //   socket.close();
  // }
}]);