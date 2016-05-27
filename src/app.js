define(function(require){

	var Backbone = require('backbone');
	var Marionette = require('marionette');

	var Utils = require('context/utils');

	var App = new Backbone.Marionette.Application();
	window.App = App;

	// Initialize dynamic regions
	App.addRegions({
		headerRegion: '#header-area',
		footerRegion: '#footer-area',
		contentRegion: '#content'
	});

	// Will be called when the App is started
	App.addInitializer(function() {
		App.utils = new Utils();

		// Initializing the static views
		// App.headerRegion.show(new HeaderView());
		// App.footerRegion.show(new FooterView());

		Backbone.history.start({pushState: true});
	});

	return App;
});