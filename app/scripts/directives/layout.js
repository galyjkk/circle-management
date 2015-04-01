'use strict';

angular.module('circleManagementApp')
  .directive('headerView', function(){
    return {
      templateUrl: 'views/header.html',
      restrict: 'E',
      replace: true
    };
  });
