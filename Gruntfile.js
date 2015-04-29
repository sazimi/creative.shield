// Generated on 2014-01-29 using generator-angular 0.7.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Used to generate config service
    grunt.loadNpmTasks('grunt-replace');

    // Adding the possibilty to rewrite the url.
    var modRewrite = require('connect-modrewrite');

    // To include javascripts automatically
    //grunt.loadNpmTasks('grunt-include-source');

    // To uglify js without breaking AngularJS dependencies
    grunt.loadNpmTasks('grunt-ng-annotate');

    grunt.loadNpmTasks("grunt-ts");


    // Define the configuration for all the tasks
    grunt.initConfig({

        // Typescript
        ts: {
            default: {
                src: ["**/*.ts", "!node_modules/**/*.ts", "!<%= yeoman.app %>/bower_components/**/*.ts", "!typings/**/*.ts"],
                options: {
                    watch: true
                }
            }
        },

        // Project settings
        yeoman: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            dist: 'dist'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= yeoman.app %>/**/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: true
                }
            },
            ts: {
                files: ['<%= yeoman.app %>/**/{,*/}*.ts'],
                tasks: ['ts'],
                options: {
                    livereload: true
                }
            },
            compass: {
                files: ['<%= yeoman.app %>/assets/styles/**/*.scss'],
                tasks: ['compass:server', 'autoprefixer']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/**/**/**/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= yeoman.app %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: '0.0.0.0',
                livereload: 35729,
                middleware: function(connect, options) {
                    var optBase = (typeof options.base === 'string') ? [options.base] : options.base;
                    return [require('connect-modrewrite')(['!(\\..+)$ /index.html [L]'])].concat(
                        optBase.map(function(path) {
                            return connect.static(path);
                        }));
                }
            },
            livereload: {
                options: {
                    middleware: function(connect, options) {
                        var optBase = (typeof options.base === 'string') ? [options.base] : options.base;
                        return [require('connect-modrewrite')(['!(\\..+)$ /index.html [L]'])].concat(
                            optBase.map(function(path) {
                                return connect.static(path);
                            }));
                    },
                    open: true,
                    base: [
                        '.tmp',
                        '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    base: '<%= yeoman.dist %>'
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/**/*.js'
            ],
            test: {
                options: {
                    jshintrc: 'config/test/.jshintrc'
                },
                src: ['<%= yeoman.app %>/modules/{,*/}test/spec/**/*.js']
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        // '<%= yeoman.app %>/**/*.js.map',
                        '<%= yeoman.app %>/**/*.d.ts',
                        '<%= yeoman.app %>/js'
                    ]
                }]
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '**/*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the app
        'bower-install': {
            app: {
                html: '<%= yeoman.app %>/index.html',
                ignorePath: '<%= yeoman.app %>/'
            }
        },
        // Compiles Sass to CSS and generates necessary files if requested
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/assets/styles',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: '<%= yeoman.app %>/assets/images',
                javascriptsDir: '<%= yeoman.app %>/scripts',
                fontsDir: '<%= yeoman.app %>/assets/fonts',
                importPath: '<%= yeoman.app %>/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '<%= yeoman.app %>/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false,
                raw: 'Sass::Script::Number.precision = 10\n'
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeoman.dist %>/images/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/styles/fonts/*'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        // Copies remaining files to places other tasks can use
        copy: {
            js: {
                expand: true,
                cwd: '<%= yeoman.app %>',
                dest: '<%= yeoman.app %>/js',
                src: [
                    'modules/**/*.js',
                    'modules/**/*.js.map',
                    '*.js.map',
                    '*.js'
                ]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/assets/styles',
                dest: '.tmp/styles/',
                src: '**/*.css'
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'compass:server'
            ],
            test: [
                'compass'
            ],
            dist: [
                'compass:dist',
                'svgmin'
            ],
        },
        concat: {
            dist: {},
            core: {
                files: {
                    '<%= yeoman.app %>/js/shield.core.js': [
                        '<%= yeoman.app %>/js/shield.js',
                        '<%= yeoman.app %>/js/states.js'
                    ],
                    '<%= yeoman.app %>/js/modules/common/common.core.js': [
                        '<%= yeoman.app %>/js/modules/common/navigation/*.js',
                        '<%= yeoman.app %>/js/modules/common/*.js'
                    ],
                    '<%= yeoman.app %>/js/modules/frontend/frontend.core.js': ['<%= yeoman.app %>/js/modules/frontend/*.js'],
                    '<%= yeoman.app %>/js/modules/frontend/modules/frontend.modules.js': ['<%= yeoman.app %>/js/modules/frontend/modules/**/*.js'],
                    '<%= yeoman.app %>/js/modules/backend/backend.core.js': [
                        '<%= yeoman.app %>/js/modules/backend/backend.js',
                        '<%= yeoman.app %>/js/modules/backend/states.js',
                    ],
                    '<%= yeoman.app %>/js/modules/backend/modules/backend.modules.js': ['<%= yeoman.app %>/js/modules/backend/modules/**/*.js'],
                    '<%= yeoman.app %>/js/modules/boss/boss.core.js': ['<%= yeoman.app %>/js/modules/boss/*.js'],
                    '<%= yeoman.app %>/js/modules/boss/modules/boss.modules.js': ['<%= yeoman.app %>/js/modules/boss/modules/**/*.js'],
                    '<%= yeoman.app %>/js/modules/cute/cute.core.js': ['<%= yeoman.app %>/js/modules/cute/*.js'],
                    '<%= yeoman.app %>/js/modules/cute/modules/cute.modules.js': ['<%= yeoman.app %>/js/modules/cute/modules/**/*.js'],
                    '<%= yeoman.app %>/js/modules/qa/qa.core.js': ['<%= yeoman.app %>/js/modules/qa/*.js'],
                    '<%= yeoman.app %>/js/modules/qa/modules/qa.modules.js': ['<%= yeoman.app %>/js/modules/qa/modules/**/*.js'],
                    '<%= yeoman.app %>/js/modules/supremeleader/supremeleader.core.js': [
                        '<%= yeoman.app %>/js/modules/supremeleader/supremeleader.js',
                        '<%= yeoman.app %>/js/modules/supremeleader/states.js',
                    ],
                    '<%= yeoman.app %>/js/modules/supremeleader/modules/supremeleader.modules.js': ['<%= yeoman.app %>/js/modules/supremeleader/modules/**/*.js'],
                },
            },
        },
    });

    grunt.registerTask('serve', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }
        // grunt serve uses replace:development settings
        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'ts',
            'copy:js',
            'concat:core',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', function() {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

    grunt.registerTask('concatJs', function() {
        grunt.task.run(['concat:core']);
    });

    grunt.registerTask('development', [
        'serve'
    ]);

};
