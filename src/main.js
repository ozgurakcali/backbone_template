require(['app', 'controller', 'router', 'text!appconfig.json'],function(App, Controller, Router, Config){

	// Reading configuration parameters
	App.Config = $.parseJSON(Config)[$('.environment').attr('id')];

	// Set the App router and controller
	App.Router = new Router({
		controller:new Controller()
	});

	// Start the App
	App.start();

	$(document).on('click', 'a', function(e){
		if (!$(this).hasClass('out')){
			e.preventDefault();

			if ($(this).attr('href') != '#') {
				var href = $(this).attr('href');

				if (App.utils.stripSlash(href) == Backbone.history.fragment) {
					Backbone.history.loadUrl(Backbone.history.fragment);
				} else {
					App.Router.navigate(href, {trigger: true});
				}
			}
		}
	});

});