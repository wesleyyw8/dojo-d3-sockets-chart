export const app = angular.module('wesjs',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/home', {
      templateUrl: '../views/home.html',
      controller: 'homeController'
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);

// app.factory('Config', [function() {
//   var baseUrl = '/endpoints/';
//   return {
//     base_url: baseUrl,
//     endpoints: {
//       search: 'search',
//     }
//   };
// }]);