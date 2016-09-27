define(function(router){

	var Backbone = require('backbone');
	require('marionette');

	return Backbone.Marionette.AppRouter.extend({

		appRoutes: {
			"": "home"
		}

	});

});
