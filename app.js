'use strict';
$(function () { // wrapper function

  var util = {

    getParams: function () {
      var url = location.href.replace(/\/$/, '');
      var urlParts = url.split('?');
      if (urlParts[1] === undefined) {
        return {};
      }
      var params = urlParts[1].split('&');
      var paramsObj = {};
      var i, pair;
      for (i = 0; i < params.length; i += 1) {
        pair = params[i].split('=');
        paramsObj[pair[0]] = pair[1];
      }
      return paramsObj;
    },

    ajaxGet: function () {
      var defer = new $.Deferred();
      $.ajax({
        type: 'GET',
        url: '',
        cache: false
      }).then(function (data) {
        defer.resolve(data);
      }, function () {
        defer.reject('Ajax request failed.');
      });
      return defer.promise();
    }

  }; //util END.


  var app = {

    init: function () {
      this.cacheElements();
      this.bindEvents();
    },

    cacheElements: function () {
      this.$app = $('#app');
    },

    bindEvents: function () {
      this.$app.on('click', '.someButton', this.clickBtn.bind(this));
      //this.$app.on('click', '.someButton', $.proxy(this.clickBtn, this));
    },

    clickBtn: function (e) {
      var $clicked = $(e.currentTarget);
      console.log($clicked);
    }

  }; //app END.

  console.log(util.getParams());
  app.init();

});
