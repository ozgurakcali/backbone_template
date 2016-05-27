define(function(require){

    var Backbone = require('backbone');

    var HomeView = require('views/content/home');

    return Backbone.Marionette.Controller.extend({

        home: function(){
            App.contentRegion.show(new HomeView());
        }

    });
});