'use strict';

angular.module('circleManagementApp')
  .controller('HeaderCtrl', function ($scope) {

    $scope.showSidebar = true;

    $scope.changeSidebarState = function() {
      if ($scope.showSidebar === true) {
        $scope.showSidebar = !$scope.showSidebar;
        document.getElementById("main-style").style['padding'] = '80px 30px 0 30px';
      } else {
        $scope.showSidebar = !$scope.showSidebar;
        document.getElementById("main-style").style['padding'] = '80px 30px 0 280px';
      }

    };

  });
