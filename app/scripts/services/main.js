'use strict';

angular.module('circleManagementApp')
  .service('MainService', function ($http, $rootScope) {
    var configUrl = 'http://127.0.0.1:9000/CircleServer/CircleServlet';
    var me = this;
    // Service logic

    this.onSendMessageToServer = function (data) {
      console.log(data);
      $rootScope.$broadcast('onGetUserInfo', data);
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

    /**
     * Post data to backend side.
     */
    this.Post = function(action, data, callback) {
      data = typeof data !== 'undefined' ? data : {};
      action = action.length > 0 ? action + '/' : action;
      $http({
        method: 'POST',
        url: configUrl + action,
        data: data
      })
      .success(function(data) {
        if (status === 200) {
          callback(data);
        }
      })
      .error(function() {
        //MessageService.postError();
      });
    };

    // Public API here
    return {

      // add item to a tub
      sendMessageToServer: function (params) {
        me.Get('', params, me.onSendMessageToServer);
      },

    };

  });
