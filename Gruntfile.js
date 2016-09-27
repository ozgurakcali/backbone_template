module.exports = function(grunt) {

  // Configuration
  grunt.initConfig({
	  
	appConfig: grunt.file.readJSON('src/appconfig.json'),
    target: grunt.option('target') ? grunt.option('target') : 'prod',
	  
    /*------- JS Hint -------*/
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    
    /*------- Clean -------*/
    clean: ["dist/"],

    /*------- Build HTML -------*/
    processhtml: {
      release: {
        files: {
          'dist/index.html': ['index.html']
        },
        options: {
          data: {
            staticUrl: '<%= appConfig[target].staticUrl %>',
            version: '<%= appConfig[target].version %>',
            target: '<%= target %>'
          },
          process: true
        }
      }
    },
    
    /*------- Copy -------*/
    copy: {
      release: {
        files: [
        {src:['static/**'], dest:'dist/'}
        ]
      }
    },
    
    /*------- RequireJS -------*/
    requirejs: {
      production: {
        options: {
          baseUrl: "src/",
          mainConfigFile: 'src/config.js',
          generateSourceMaps: true,
          out: "dist/static/js/source.min.js",
          optimize: "uglify2",
          name: "almond",
          wrap: true,
          preserveLicenseComments: false,
          useStrict: true,
          findNestedDependencies: true
        }
      }
    },
    
    /*------- Less -------*/
    less: {
      run: {
        options: {
          paths: ["src/less"]
        },
        files: {
          "dist/static/css/styles.css": "src/less/index.less"
        }
      }
    },
    
    /*------- CSS Min -------*/
    cssmin: {
      release: {
        files: {
          "dist/static/css/styles.min.css": ["dist/static/css/styles.css"]  
        }
      }
    },
    
	/*------- Server -------*/
    connect: {
      server: {
        options: {
          base: 'dist',
          port: 8000,
          hostname: '127.0.0.1',
          keepalive: true
        }
      },
      development: {
        options: {
          port: 8000,
          hostname: '127.0.0.1',
          keepalive: true
        }
      }
    }

  });

  // Load NPM Tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Build
  grunt.registerTask('build', [
    'clean',
    'jshint',
    'copy',
    'requirejs',
    'less',
    'cssmin',
    'processhtml'
  ]);

  grunt.registerTask('serve', ['connect:development']); // Start local server on the main directory
  grunt.registerTask('servedist', ['connect']); // Start local server on the dist directory

  // Default grunt command
  grunt.registerTask('default', [
  'build'
  ]);

};