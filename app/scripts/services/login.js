'use strict';

angular.module('circleManagementApp')
  .service('LoginService', function ($http, $rootScope, $location) {
    var configUrl = 'http://127.0.0.1:8080/CircleServer/CircleServlet';
    var me = this;
    // Service logic

    this.onLoginSuccess = function() {
      $location.path('/home');
      var fakeData = {
        'username': 'galy'
      };
      $rootScope.$broadcast('onLoginSuccess', fakeData);
    };

    /**
     * Get data from backend side.
     */
    this.Get = function(action, params, callback) {
      params = typeof params !== 'undefined' ? params : {};
      action = action.length > 0 ? action + '/' : action;
      $http({
        method: 'GET',
        url: configUrl + action,
        params: params
      })
      .success(function(data, status) {
        if (status === 200) {
          callback(data);
        }
      })
      .error(function() {});
    };


    // Public API here
    return {

      userLogin: function() {
        me.onLoginSuccess();
      }

    };

  });
