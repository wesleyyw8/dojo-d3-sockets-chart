import { app } from './../config/config';
import { test } from './../services/data';
app.controller('homeController', ['$scope', function ($scope) {
  const socket = new WebSocket('ws://localhost:3000');
  socket.addEventListener('open', function (event) {
    console.log('WebSocket connected');
    //socket.send('Hello Server!');
  });
  socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
  });

  $scope.generateData = () => {
    socket.send('oi');
  };
}]);