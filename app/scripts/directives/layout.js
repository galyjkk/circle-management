'use strict';

angular.module('circleManagementApp')
  .directive('headerView', function(){
    return {
      templateUrl: 'views/header.html',
      restrict: 'E',
      replace: true
    };
  })
  .directive('sidebarView', function(){
    return {
      templateUrl: 'views/sidebar.html',
      restrict: 'E',
      replace: true
    };
  });
