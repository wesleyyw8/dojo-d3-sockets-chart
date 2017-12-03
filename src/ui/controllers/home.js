import { app } from './../config/config';
import { test } from './../services/data';
app.controller('homeController',
['$scope', 'dataService', function ($scope, dataService) {
  console.log(dataService.getPeople);

}]);