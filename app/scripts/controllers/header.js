'use strict';

angular.module('circleManagementApp')
  .controller('HeaderCtrl', function ($scope) {

    $scope.showSidebar = true;

    $scope.changeSidebarState = function() {
      $scope.showSidebar = !$scope.showSidebar;
    };

  });
