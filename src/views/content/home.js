define(function(require){

	var Backbone = require('backbone');
	require('marionette');
	
	var temp = require("text!templates/content/home.html");

    return Backbone.Marionette.LayoutView.extend({
        // html template for the view
		template: _.template(temp),
		className: 'home-page',

		initialize: function(options) {

		}

	});
});