'use strict';

angular.module('circleManagementApp')
  .controller('LoginCtrl', function ($scope, $window, LoginService) {

    //set window height
    var windowHeight;

    if ($window.innerHeight >= 600) {
      windowHeight = $window.innerHeight;
    } else {
      windowHeight = 600;
    }

    $scope.loginStyle = {
      'height': windowHeight,
      'padding-top': (windowHeight - 276)/2,
      'padding-bottom': (windowHeight - 276)/2
    };

    $scope.userLogin = function() {
      LoginService.userLogin();
    };

  });
