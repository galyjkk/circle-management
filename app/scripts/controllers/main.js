'use strict';

angular.module('circleManagementApp')
  .controller('MainCtrl', function ($scope, MainService) {

    $scope.message = '';

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sendMessages = function() {
      console.log($scope.message);

      MainService.sendMessageToServer($scope.message);
    };
  });
