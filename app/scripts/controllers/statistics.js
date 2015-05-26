 'use strict';

angular.module('circleManagementApp')
  .controller('StatisticsCtrl', function ($scope) {
    //pie chart phone model
    $scope.pieMobileOptions = {
        chart: {
            type: 'pieChart',
            height: 300,
            x: function(d){return d.key;},
            y: function(d){return d.y;},
            showLabels: true,
            transitionDuration: 500,
            labelThreshold: 0.01,
            legend: {
                margin: {
                    top: 5,
                    right: 35,
                    bottom: 5,
                    left: 0
                }
            }
        }
    };

    $scope.pieMobileData = [
        {
            key: '北京',
            y: 15.4
        },
        {
            key: '上海',
            y: 13.5
        },
        {
            key: '广州',
            y: 10.8
        },
        {
            key: '河北',
            y: 10.7
        },
        {
            key: '辽宁',
            y: 8.3
        },
        {
            key: '河南',
            y: 6.9
        },
        {
            key: '山西',
            y: 4.4
        },
        {
            key: '其他地区',
            y: 30.0
        }
    ];

    //multi chart user active
    $scope.multiBarOptions = {
          chart: {
              type: 'multiBarChart',
              height: 450,
              margin : {
                  top: 20,
                  right: 20,
                  bottom: 60,
                  left: 45
              },
              clipEdge: true,
              staggerLabels: true,
              transitionDuration: 500,
              stacked: true,
              xAxis: {
                  axisLabel: '日期',
                  showMaxMin: true,
                  tickFormat: function(d){
                      return d3.format(',f')(d);
                  }
              },
              yAxis: {
                  axisLabel: '用户数量（万）',
                  axisLabelDistance: 40,
                  tickFormat: function(d){
                      return d3.format(',0.1f')(d);
                  }
              }
          }
      };

      /* Random Data Generator (took from nvd3.org) */
      function generateData() {
          return streamLayers(3,50+Math.random()*50, 0.1).map(function(data, i) {
              return {
                  key: 'Stream' + i,
                  values: data
              };
          });
      }

      /* Inspired by Lee Byron's test data generator. */
      function streamLayers(n, m, o) {
          if (arguments.length < 3) {
            o = 0;
          }
          function bump(a) {
              var x = 1 / (0.1 + Math.random()),
                  y = 2 * Math.random() - 0.5,
                  z = 10 / (0.1 + Math.random());
              for (var i = 0; i < m; i++) {
                  var w = (i / m - y) * z;
                  a[i] += x * Math.exp(-w * w);
              }
          }
          return d3.range(n).map(function() {
              var a = [], i;
              for (i = 0; i < m; i++) {
                a[i] = o + o * Math.random();
              }
              for (i = 0; i < 5; i++) {
                bump(a);
              }
              return a.map(stream_index);
          });
      }

      /* Another layer generator using gamma distributions. */
      function stream_waves(n, m) {
          return d3.range(n).map(function(i) {
              return d3.range(m).map(function(j) {
                  var x = 20 * j / m - i / 3;
                  return 2 * x * Math.exp(-0.5 * x);
              }).map(stream_index);
          });
      }

      function stream_index(d, i) {
          return {x: i, y: Math.max(0, d)};
      }

      $scope.multiBarData = generateData();

    //total active user
    $scope.totalActiveUserOptions = {
          chart: {
              type: 'lineChart',
              height: 300,
              margin : {
                  top: 20,
                  right: 20,
                  bottom: 40,
                  left: 55
              },
              x: function(d){ return d.x; },
              y: function(d){ return d.y; },
              useInteractiveGuideline: true,
              xAxis: {
                  axisLabel: '日期（3月）'
              },
              yAxis: {
                  axisLabel: '用户数量（万）',
                  tickFormat: function(d){
                      return d3.format('.02f')(d);
                  },
                  axisLabelDistance: 30
              },
              callback: function(chart){
                //callback
              }
          }
      };

      /*Random Data Generator */
      function sinAndCos() {
          var cos = [];

          //Data is represented as an array of {x,y} pairs.
          for (var i = 1; i <= 31; i++) {
              cos.push({x: i, y: 0.5 * Math.cos(i/10+ 2) + Math.random() / 10 + 5});
          }

          //Line chart data should be sent as an array of series objects.
          return [
              {
                  values: cos,
                  key: 'DAU',
                  color: '#ff7f0e'
              }
          ];
      }

      $scope.totalActiveUserData = sinAndCos();

      //download && total user
      $scope.totalUserOptions = {
          chart: {
              type: 'linePlusBarWithFocusChart',
              height: 500,
              margin: {
                  top: 30,
                  right: 75,
                  bottom: 50,
                  left: 75
              },
              bars: {
                  forceY: [0]
              },
              bars2: {
                  forceY: [0]
              },
              color: ['#2ca02c', 'darkred'],
              x: function(d,i) { return i },
              xAxis: {
                  axisLabel: '日期',
                  tickFormat: function(d) {
                      var dx = $scope.totalUserData[0].values[d] && $scope.totalUserData[0].values[d].x || 0;
                      if (dx > 0) {
                          return d3.time.format('%x')(new Date(dx))
                      }
                      return null;
                  }
              },
              x2Axis: {
                  tickFormat: function(d) {
                      var dx = $scope.totalUserData[0].values[d] && $scope.totalUserData[0].values[d].x || 0;
                      return d3.time.format('%b-%Y')(new Date(dx))
                  },
                  showMaxMin: false
              },
              y1Axis: {
                  axisLabel: '总下载数量（次）',
                  tickFormat: function(d){
                      return d3.format(',f')(d);
                  }
              },
              y2Axis: {
                  axisLabel: '总用户数量',
                  tickFormat: function(d) {
                      return d3.format(',.2f')(d)
                  }
              },
              y3Axis: {
                  tickFormat: function(d){
                      return d3.format(',f')(d);
                  }
              },
              y4Axis: {
                  tickFormat: function(d) {
                      return d3.format(',.2f')(d)
                  }
              }
          }
      };

      $scope.totalUserData = [
          {
              "key" : "总下载数量" ,
              "bar": true,
              "values" : [ [ 1136005200000 , 1271.0] , [ 1138683600000 , 1271.0] , [ 1141102800000 , 1271.0] , [ 1143781200000 , 1282] , [ 1146369600000 , 1290] , [ 1149048000000 , 1300] , [ 1151640000000 , 2581] , [ 1154318400000 , 2323] , [ 1156996800000 , 3275] , [ 1159588800000 , 3899.0] , [ 1162270800000 , 3899.0] , [ 1164862800000 , 3899.0] , [ 1167541200000 , 3564.0] , [ 1170219600000 , 3564.0] , [ 1172638800000 , 3564.0] , [ 1175313600000 , 2648.0] , [ 1177905600000 , 2648.0] , [ 1180584000000 , 2648.0] , [ 1183176000000 , 2522.0] , [ 1185854400000 , 2522.0] , [ 1188532800000 , 2522.0] , [ 1191124800000 , 2906.0] , [ 1193803200000 , 2906.0] , [ 1196398800000 , 2906.0] , [ 1199077200000 , 2206.0] , [ 1201755600000 , 2206.0] , [ 1204261200000 , 2206.0] , [ 1206936000000 , 2287.0] , [ 1209528000000 , 2287.0] , [ 1212206400000 , 2287.0] , [ 1214798400000 , 2732.0] , [ 1217476800000 , 2732.0] , [ 1220155200000 , 2732.0] , [ 1222747200000 , 2599.0] , [ 1225425600000 , 2599.0] , [ 1228021200000 , 2599.0] , [ 1230699600000 , 1924.0] , [ 1233378000000 , 1924.0] , [ 1235797200000 , 1924.0] , [ 1238472000000 , 1756.0] , [ 1241064000000 , 1756.0] , [ 1243742400000 , 1756.0] , [ 1246334400000 , 1743.0] , [ 1249012800000 , 1743.0] , [ 1251691200000 , 1743.0] , [ 1254283200000 , 1519.0] , [ 1256961600000 , 1519.0] , [ 1259557200000 , 1519.0] , [ 1262235600000 , 1591.0] , [ 1264914000000 , 1591.0] , [ 1267333200000 , 1591.0] , [ 1270008000000 , 1543.0] , [ 1272600000000 , 1543.0] , [ 1275278400000 , 1543.0] , [ 1277870400000 , 1309.0] , [ 1280548800000 , 1309.0] , [ 1283227200000 , 1309.0] , [ 1285819200000 , 1331.0] , [ 1288497600000 , 1331.0] , [ 1291093200000 , 1331.0] , [ 1293771600000 , 1331.0] , [ 1296450000000 , 1154.0] , [ 1298869200000 , 1154.0] , [ 1301544000000 , 1194.0] , [ 1304136000000 , 1194.0] , [ 1306814400000 , 1194.0] , [ 1309406400000 , 1194.0] , [ 1312084800000 , 1194.0] , [ 1314763200000 , 1244.0] , [ 1317355200000 , 475.0] , [ 1320033600000 , 475.0] , [ 1322629200000 , 475.0] , [ 1325307600000 , 690.0] , [ 1327986000000 , 690.0] , [ 1330491600000 , 690.0] , [ 1333166400000 , 514.0] , [ 1335758400000 , 514.0]]
          },
          {
              "key" : "总用户数量" ,
              "values" : [ [ 1136005200000 , 71.89] , [ 1138683600000 , 75.51] , [ 1141102800000 , 68.49] , [ 1143781200000 , 62.72] , [ 1146369600000 , 70.39] , [ 1149048000000 , 59.77] , [ 1151640000000 , 57.27] , [ 1154318400000 , 67.96] , [ 1156996800000 , 67.85] , [ 1159588800000 , 76.98] , [ 1162270800000 , 81.08] , [ 1164862800000 , 91.66] , [ 1167541200000 , 84.84] , [ 1170219600000 , 85.73] , [ 1172638800000 , 84.61] , [ 1175313600000 , 92.91] , [ 1177905600000 , 99.8] , [ 1180584000000 , 121.191] , [ 1183176000000 , 122.04] , [ 1185854400000 , 131.76] , [ 1188532800000 , 138.48] , [ 1191124800000 , 153.47] , [ 1193803200000 , 189.95] , [ 1196398800000 , 182.22] , [ 1199077200000 , 198.08] , [ 1201755600000 , 135.36] , [ 1204261200000 , 125.02] , [ 1206936000000 , 143.5] , [ 1209528000000 , 173.95] , [ 1212206400000 , 188.75] , [ 1214798400000 , 167.44] , [ 1217476800000 , 158.95] , [ 1220155200000 , 169.53] , [ 1222747200000 , 113.66] , [ 1225425600000 , 107.59] , [ 1228021200000 , 92.67] , [ 1230699600000 , 85.35] , [ 1233378000000 , 90.13] , [ 1235797200000 , 89.31] , [ 1238472000000 , 105.12] , [ 1241064000000 , 125.83] , [ 1243742400000 , 135.81] , [ 1246334400000 , 142.43] , [ 1249012800000 , 163.39] , [ 1251691200000 , 168.21] , [ 1254283200000 , 185.35] , [ 1256961600000 , 188.5] , [ 1259557200000 , 199.91] , [ 1262235600000 , 210.732] , [ 1264914000000 , 192.063] , [ 1267333200000 , 204.62] , [ 1270008000000 , 235.0] , [ 1272600000000 , 261.09] , [ 1275278400000 , 256.88] , [ 1277870400000 , 251.53] , [ 1280548800000 , 257.25] , [ 1283227200000 , 243.1] , [ 1285819200000 , 283.75] , [ 1288497600000 , 300.98] , [ 1291093200000 , 311.15] , [ 1293771600000 , 322.56] , [ 1296450000000 , 339.32] , [ 1298869200000 , 353.21] , [ 1301544000000 , 348.5075] , [ 1304136000000 , 350.13] , [ 1306814400000 , 347.83] , [ 1309406400000 , 335.67] , [ 1312084800000 , 390.48] , [ 1314763200000 , 384.83] , [ 1317355200000 , 381.32] , [ 1320033600000 , 404.78] , [ 1322629200000 , 382.2] , [ 1325307600000 , 405.0] , [ 1327986000000 , 456.48] , [ 1330491600000 , 542.44] , [ 1333166400000 , 599.55] , [ 1335758400000 , 583.98]]
          }
      ].map(function(series) {
              series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
              return series;
      });

  });
