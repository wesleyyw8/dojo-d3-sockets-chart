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
__webpack_require__(2);
module.exports = __webpack_require__(4);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sockets__ = __webpack_require__(3);


__WEBPACK_IMPORTED_MODULE_0__config_config__["app"].controller('homeController', ['$scope', '$timeout', function ($scope, $timeout) {

  const onReceive = (data) => {
    if ($scope.receivingData) {
      $scope.data = data;
      $timeout(() => {
        $scope.$apply();
      }, 0);
    }
  };

  let socketObj = new __WEBPACK_IMPORTED_MODULE_1__services_sockets__["a" /* default */](onReceive);

  $scope.generateData = () => {
    $scope.receivingData = true;
    if (socketObj.socket.readyState !== socketObj.socket.CLOSED) {
      socketObj.sendData();
    }
  };

  $scope.closeConnection = () => {
    $scope.receivingData = false;
  }

}]);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Sockets { 
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
/* harmony export (immutable) */ __webpack_exports__["a"] = Sockets;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(0);


__WEBPACK_IMPORTED_MODULE_0__config_config__["app"].directive('chart', function () {
  return {
    replace: true,
    restrict: 'E',
    scope: {
      data: '='
    },
    templateUrl: 'directives/chart/template.html',
    link: function (scope, element, attrs) { 
      const options = {
        margin: {
          top: 50,
          right: 50,
          bottom: 50,
          left: 50
        },
        width: element[0].clientWidth,
        height: element[0].clientHeight,
      };

      const svg = d3
        .select(".chart")
        .append("svg")
        .attr('width', options.width)
        .attr('height', options.height);

      const loadScaleX = data => {
        return d3.scale
          .linear()
          .range([options.margin.left, options.width - options.margin.right])
          .domain([0,data.length -1]);
      };

      const loadScaleY = data => {
        return d3.scale
          .linear()
          .range([options.height - options.margin.bottom, options.margin.top])
          .domain([0,d3.max(data, (d) => {
            return d.y;
          })]); 
      };

      const createAxeY = (data, yScale) => {
        const yAxis = d3.svg
          .axis()
          .scale(yScale)
          .orient("left")
          .ticks(data.length);

        if (d3.select('.yaxis')[0][0] === null) {
          svg.append("g")
            .attr("transform", "translate(" + (options.margin.left) + ","+0+")")
            .attr("class","yaxis")
            .call(yAxis);
        }
        else {
          svg.select(".yaxis").transition().duration(750).call(yAxis);
        }
      };

      const createAxeX = (data, xScale) => {
        const xAxis = d3.svg.axis().scale(xScale);

        if (d3.select('.xaxis')[0][0] === null) {
          svg.append("g")
            .attr("transform", "translate(0," + (options.height - options.margin.bottom) + ")")
            .attr("class","xaxis")
            .call(xAxis);
        } else {
          svg.select(".xaxis").transition().duration(750).call(xAxis);
        }
      };
      
      const drawLine = (data, xScale, yScale) => {
        const lineGen = d3.svg.line()
          .x(function(d, i) {
            return xScale(i);
          })
          .y(function(d) {
            return yScale(d.y);
          })
          .interpolate("linear");

        if (d3.select('.linePath')[0][0] === null) {
          svg.append('path')
            .attr('d', lineGen(data))
            .attr('class', 'linePath');
        }
        else {
          svg.select(".linePath")   // change the line
            .transition()
            .duration(750)
            .attr("d", lineGen(data));
        }
      };

      scope.$watch(() => scope.data, newVal => {
        if (newVal) {
          const scaleX = loadScaleX(newVal);
          const scaleY = loadScaleY(newVal);
          createAxeX(newVal, scaleX);
          createAxeY(newVal, scaleY);
          drawLine(newVal, scaleX, scaleY);
        }
      });
    }
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map