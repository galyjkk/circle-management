'use strict';

angular.module('circleManagementApp')
  .controller('HomeCtrl', function ($scope, $rootScope) {
    $scope.userInfo = [
      {
        'id': 1,
        'username': 'lyc1',
        'registDate': '2015/01/01',
        'role': 'staff',
        'status': 'active'
      },
      {
        'id': 2,
        'username': 'lyc2',
        'registDate': '2015/01/01',
        'role': 'staff',
        'status': 'inactive'
      },
      {
        'id': 3,
        'username': 'lyc3',
        'registDate': '2015/01/01',
        'role': 'staff',
        'status': 'pending'
      },
      {
        'id': 4,
        'username': 'lyc4',
        'registDate': '2015/01/01',
        'role': 'staff',
        'status': 'banned'
      },
      {
        'id': 5,
        'username': 'lyc5',
        'registDate': '2015/01/01',
        'role': 'admin',
        'status': 'active'
      },
      {
        'id': 6,
        'username': 'lyc6',
        'registDate': '2015/01/01',
        'role': 'member',
        'status': 'active'
      },
      {
        'id': 7,
        'username': 'lyc7',
        'registDate': '2015/02/01',
        'role': 'member',
        'status': 'inactive'
      },
      {
        'id': 8,
        'username': 'lyc8',
        'registDate': '2015/01/01',
        'role': 'staff',
        'status': 'active'
      },
      {
        'id': 9,
        'username': 'lyc9',
        'registDate': '2015/01/01',
        'role': 'staff',
        'status': 'inactive'
      },
      {
        'id': 10,
        'username': 'lyc10',
        'registDate': '2015/01/01',
        'role': 'staff',
        'status': 'pending'
      },
      {
        'id': 11,
        'username': 'lyc11',
        'registDate': '2015/01/01',
        'role': 'staff',
        'status': 'banned'
      }
    ];
  });
