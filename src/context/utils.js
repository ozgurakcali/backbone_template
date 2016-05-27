define(function(require) {

    var Backbone = require('backbone');

    var utils = Backbone.Model.extend({

        stripSlash: function(pathString) {
          if (pathString[0] == '/') {
              return pathString.substring(1);
          }

          return pathString;
        },

        getUrlParameter: function(parameter) {
          var pageURL = window.location.search.substring(1);
          var urlParameters = pageURL.split('&');

          for (var i=0; i<urlParameters.length; i++) {
            var parameterName = urlParameters[i].split('=');
            if (parameterName[0] == parameter) {
              return parameterName[1];
            }
          }

          return null;
        },

        getListItemByAttr: function(list, value, attr) {
            for (var i=0; i<list.length; i++) {
                if (list[i][attr] == value) {
                    return list[i];
                }
            }

            return null;
        }

    });

    return utils;

});