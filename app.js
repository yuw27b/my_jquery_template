$(function () { // wrapper function

  var util = {

    getParams: function () {
      var url = location.href.replace(/\/$/, '');
      var url_parts = url.split('?');
      if (url_parts[1] === undefined) {
        return false;
      }
      var params = url_parts[1].split('&');
      var params_obj = {};
      var i, pair;
      for (i = 0; i < params.length; i += 1) {
        pair = params[i].split('=');
        params_obj[pair[0]] = pair[1];
      }
      return params_obj;
    },

    ajaxGet: function () {
      var defer = $.Deferred();
      $.ajax({
        type: 'GET',
        url: '',
        cache: false,
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
    },

    clickBtn: function (e) {
      var $clicked = $(e.currentTarget);
      console.log($clicked);
    }

  }; //app END.

  console.log(util.getParams());
  app.init();

});