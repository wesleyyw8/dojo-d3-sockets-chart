/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const app = angular.module('wesjs',['ngRoute']);
/* harmony export (immutable) */ __webpack_exports__["app"] = app;


app.config(['$routeProvider', ($routeProvider) => {
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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sockets__ = __webpack_require__(3);


__WEBPACK_IMPORTED_MODULE_0__config_config__["app"].controller('homeController', ['$scope', '$timeout', function ($scope, $timeout) {

  const socketObj = new __WEBPACK_IMPORTED_MODULE_1__services_sockets__["a" /* default */]();
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

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Sockets { 
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Sockets;


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map