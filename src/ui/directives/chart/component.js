import { app } from './../../config/config';

app.directive('chart', function () {
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
          top: 10,
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
        .attr('height', options.height)
        .style("background-color", 'white');

      const loadScaleX = (data) => {
        return d3.scale
          .linear()
          .range([options.margin.left, options.width - options.margin.right])
          .domain([0,data.length -1]);
      }

      const loadScaleY = (data) => {
        return d3.scale
          .linear()
          .range([options.height - options.margin.bottom, options.margin.top])
          .domain([0,d3.max(data, (d) => {
            return d.y;
          })]); 
      }

      const createAxeY = (data, yScale) => {
        const yAxis = d3.svg
          .axis()
          .scale(yScale)
          .orient("left")
          .ticks(data.length);

        svg.append("g")
          .attr("transform", "translate(" + (options.margin.left) + ","+0+")")
          .attr("class","yaxis")
          .call(yAxis);
      }

      const createAxeX = (data,xScale) => {
        const xAxis = d3.svg.axis().scale(xScale);
        svg.append("g")
          .attr("transform", "translate(0," + (options.height - options.margin.bottom) + ")")
          .attr("class","xaxis")
          .call(xAxis);
      }
      
      const drawLine = (data, xScale, yScale) => {
        const lineGen = d3.svg.line()
          .x(function(d, i) {
            return xScale(i);
          })
          .y(function(d) {
            return yScale(d.y);
          })
          .interpolate("linear");

        svg.append('path')
          .attr('d', lineGen(data))
          .attr('class', 'linePath')
          .attr('stroke', 'black')
          .attr('stroke-width', 1)
          .attr('fill', 'none');
      }

      scope.$watch('data', (newVal) => {
        if (newVal) {
          console.log(newVal);
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