'use strict';

angular.module('circleManagementApp')
  .service('MainService', function ($http) {
    var configUrl = 'http://123.57.223.25:8080/CircleServer/CircleServlet';
    var me = this;
    // Service logic

    this.onSendMessageToServer = function (data) {
      console.log('callback+'+data);
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

      // add item to a tub
      sendMessageToServer: function (params) {
        me.Get('', params, me.onSendMessageToServer);
      },

    };

  });
