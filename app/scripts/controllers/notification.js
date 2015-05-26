'use strict';

angular.module('circleManagementApp')
  .controller('NotificationCtrl', function ($scope) {
    $scope.notifications = [
      {
        'id': 1,
        'notifyContent': 'Circle 1.0版本正式上线啦！欢迎大家推广使用！',
        'notifyDateTime': '2015-01-01 19:00:00',
        'createBy': 'galy'
      }
    ];
  });
