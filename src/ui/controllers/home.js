import { app } from './../config/config';
import Sockets from './../services/sockets';
app.controller('homeController', ['$scope', '$timeout', function ($scope, $timeout) {

  const onReceive = (data) => {
    $scope.data = data;
  };

  const socketObj = new Sockets(onReceive);

  $scope.generateData = () => {
    socketObj.sendData();
  };

}]);