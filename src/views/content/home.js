define(function(require){

	var Backbone = require('backbone');
	require('marionette');
	
	var homeTemp = require("text!templates/content/home.html");

    var HomeView = Backbone.Marionette.LayoutView.extend({
        // html template for the view
		template: _.template(homeTemp),
		className: 'home-page',

		initialize: function(options) {

		}

	});

    return HomeView;
});