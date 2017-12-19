import { app } from './../config/config';
import Sockets from './../services/sockets';
app.controller('homeController', ['$scope', '$timeout', function ($scope, $timeout) {

  const onReceive = (data) => {
    if ($scope.receivingData) {
      $scope.data = data;
      $timeout(() => {
        $scope.$apply();
      }, 0);
    }
  };

  let socketObj = new Sockets(onReceive);

  $scope.generateData = () => {
    $scope.receivingData = true;
    if (socketObj.socket.readyState !== socketObj.socket.CLOSED) {
      socketObj.sendData();
    }
  };

  $scope.closeConnection = () => {
    $scope.receivingData = false;
  };

}]);