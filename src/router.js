define(function(router){

	var Backbone = require('backbone');

	var Router = Backbone.Marionette.AppRouter.extend({

		appRoutes: {
			"": "home"
		}

	});

	return Router;
});
