'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'dist/app/css/output.css': ['bower_components/ng-table/dist/ng-table.min.css',
                                      'app/styles/main.css']
				}
			}
		},
		uglify: {
			my_target: {
 		  	files: {
					'dist/app/js/app.min.js': [
																			'node_modules/jquery/dist/jquery.min.js',
																			'node_modules/bootstrap/dist/js/bootstrap.min.js',
																			'node_modules/angular/angular.min.js',
																			'node_modules/angular-route/angular-route.min.js',
																			'node_modules/moment/min/moment.min.js',
							                        'node_modules/angular-cookies/angular-cookies.min.js',
							                        'node_modules/ng-table/dist/ng-table.min.js',
																			'app/**/*.js'
																		]

				}
			}
		},
		copy: {
			main: {
				files: [
          {src: 'robots.txt', dest: 'dist/robots.txt'},
          {expand: true, cwd: 'app/views', src: '*', dest: 'dist/app/views'},
					{expand: true, cwd: 'app/images', src: '*', dest: 'dist/app/images'},
					{expand: true, cwd: 'bower_components/bootstrap/dist', src: '**', dest: 'dist/app/css/bootstrap'}
				]
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('do', [
		'cssmin',
		'uglify',
		'copy'
	]);

};
