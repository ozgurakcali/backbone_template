require.config({
	paths: {
		// For build - AMD Loader
		"almond": "../bower_components/almond/almond",
		// Libraries & Frameworks
		"backbone": "../bower_components/backbone/backbone",
		"marionette": "../bower_components/marionette/lib/backbone.marionette",
		"jquery": "../bower_components/jquery/dist/jquery",
		"underscore": "../bower_components/underscore/underscore",
		"text": "manual_tp/text",
	},
	shim : {
		backbone: {
			deps:["jquery", "underscore"],
			exports:"Backbone"
		},
		underscore: { exports:"_" },
		marionette: { exports:"Marionette" }
	},
	deps: ["main"]
});