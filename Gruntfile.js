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

    includeSource: {
      options: {
        basePath: '<%= yeoman.app %>'
      },
      // Right now server and dist do the same thing. We have to find out if we want them to perform different tasks.
      server: {
        files: {
          '<%= yeoman.app %>/index.html': '<%= yeoman.app %>/index.tpl.html'
        }
      },
      dist: {
        files: {
          '<%= yeoman.app %>/index.html': '<%= yeoman.app %>/index.tpl.html'
        }
      }
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
            '.tmp'
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
            //'<%= yeoman.dist %>/scripts/**/*.js',
            //'<%= yeoman.dist %>/assets/styles/**/*.css',
            //'<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
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

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/views/**/*.html', '<%= yeoman.dist %>/index.html'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>'],
        expand: true
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/assets/images',
          src: '**/*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/assets/images/**/**',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/**/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngAnnotate: {
      options: {
        beautify: true,
        mangle: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: ['*.js', '!services/config.js'],
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'scripts/lib/*.js',
            'scripts/states.js',
            'modules/**/assets/**/*',
            'modules/**/*.html',
            'assets/images/**/*.{webp}',
            'assets/fonts/**/*',
            'assets/images/**/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/styles',
          dest: '<%= yeoman.dist %>/assets/styles/',
          src: '**/*.css'
        }, {
          expand: true,
          cwd: '.tmp/concat/scripts',
          dest: '<%= yeoman.dist %>/scripts/',
          src: '**/*.js'
        }]
      },
      bower: {
        expand: true,
        cwd: '<%= yeoman.app %>',
        dest: '<%= yeoman.dist %>',
        src: 'bower_components/**/*'
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
        //'imagemin',
        'svgmin'
      ],
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/assets/styles/main.css': [
            '.tmp/styles/**/*.css',
            '<%= yeoman.app %>/assets/styles/**/*.css'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: ['*.js'],
          dest: '.tmp/concat/scripts'
        }]
      }
    },
    concat: {
      dist: {}
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
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function() {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // grunt build:production uses replace:production settings
  grunt.registerTask('build:production', [
    'clean:dist',
    'includeSource:dist',
    'bower-install',
    'production',
    'useminPrepare',
    'concurrent:dist',
    'copy:bower',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    //'cdnify',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);

  // grunt build:development uses replace:development settings
  grunt.registerTask('build:development', [
    'clean:dist',
    'includeSource:dist',
    'bower-install',
    'replace:development',
    'useminPrepare',
    'concurrent:dist',
    'copy:bower',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);

  // grunt build:development uses replace:development settings
  grunt.registerTask('build:qa', [
    'clean:dist',
    'includeSource:dist',
    'bower-install',
    'replace:qa',
    'useminPrepare',
    'concurrent:dist',
    'copy:bower',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);

  // grunt build:development uses replace:stage settings
  grunt.registerTask('build:stage', [
    'clean:dist',
    'includeSource:dist',
    'bower-install',
    'replace:stage',
    'useminPrepare',
    'concurrent:dist',
    'copy:bower',
    'autoprefixer',
    'concat',
    'ngAnnotate',
    'copy:dist',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'build:production'
  ]);

  grunt.registerTask('production', [
    'replace:production'
  ]);

  grunt.registerTask('development', [
    'serve'
  ]);

  grunt.registerTask('stage', [
    'replace:stage',
    'serve'
  ]);

  grunt.registerTask('qa', [
    'replace:qa',
    'serve'
  ]);

  grunt.registerTask('local', [
    'replace:local',
    'serve'
  ]);
};
