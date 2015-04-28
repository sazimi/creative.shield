'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'merge2']
});

var server = $.livereload();
var tsd = require('gulp-tsd');

gulp.task('tsd', function (callback) {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, callback);
});

var sourcemaps = require('gulp-sourcemaps'),
    tsc = require('gulp-typescript'),
    del = require('del'),
    Config = require('./_config'),
    inject = require('gulp-inject');


var config = new Config();

var tsProject = tsc.createProject({
    declarationFiles: true,
    noExternalResolve: true
});


/**
 * Generates the app.d.ts references file dynamically from all application *.ts files.
 */
gulp.task('gen-ts-refs', function() {
    var target = gulp.src(config.appTypeScriptReferences);
    var sources = gulp.src([config.allTypeScript], {
        read: false
    });
    return target.pipe(inject(sources, {
        starttag: '//{',
        endtag: '//}',
        transform: function(filepath) {
            return '/// <reference path="../..' + filepath + '" />';
        }
    })).pipe(gulp.dest(config.typings));
});


/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile-ts', function() {
    var sourceTsFiles = [config.allTypeScript,
        config.libraryTypeScriptDefinitions,
        config.appTypeScriptReferences
    ]; //reference to app.d.ts files

     var src = ["**/*.ts", "!node_modules/**/*.ts", "!app/bower_components/**/*.ts", "!typings/**/*.ts"];

    var tsResult = gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(tsc({
            target: 'ES5',
            declarationFiles: false,
            noExternalResolve: true
        }));

    tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tsOutputPath));
});

/**
 * Remove all generated JavaScript files from TypeScript compilation.
 */
gulp.task('clean-ts', function(cb) {
    var typeScriptGenFiles = [config.tsOutputPath, // path to generated JS files
        config.sourceApp + '**/*.js', // path to all JS files auto gen'd by editor
        config.sourceApp + '**/*.js.map' // path to all sourcemap files auto gen'd by editor
    ];

    // delete the files
    del(typeScriptGenFiles, cb);
});

gulp.task('ts-watch', function() {
  console.log(config.allTypeScript);
    gulp.watch([config.allTypeScript], ['compile-ts', 'gen-ts-refs']);
});

gulp.task('scripts', function() {
    var tsResult = gulp.src('app/**/{,*/}*.ts')
        .pipe(ts(tsProject));

    return $.merge2([
        tsResult.dts.pipe(gulp.dest('dist/definitions')),
        tsResult.js.pipe(gulp.dest('dist/js'))
    ]);
});

var paths = {
    sass: ['app/assets/styles/**/*.scss']
};

gulp.task('styles', function() {
    return gulp.src(paths.sass)
        .pipe($.sass({
            style: 'expanded',
            includePaths: ['app/bower_components']
        }))
        .pipe($.autoprefixer('last 1 version'))
        .pipe(gulp.dest('.tmp/styles'));
});

gulp.task('partials', function() {
    return gulp.src('app/views/**/*.html')
        .pipe(gulp.dest('dist/views'));
});

gulp.task('copy-css', function() {
    gulp.src('.tmp/styles/styles.css')
        .pipe(gulp.dest('dist/styles/'));
});


gulp.task('replace-states', function() {
    return gulp.src('app/scripts/states.js')
        .pipe($.uglify())
        .pipe(gulp.dest('dist/scripts/'));
});

gulp.task('html', ['styles'], function() {
    var cssFilter = $.filter('app/**/*.css');
    var gulpif = require('gulp-if');
    return gulp.src('app/*.html')
        .pipe($.useref.assets({
            searchPath: '{.tmp,app}'
        }))
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function() {
    return gulp.src('app/fonts/**/*')
        .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('clean', function() {
    return gulp.src(['.tmp', 'dist'], {
        read: false
    }).pipe($.clean());
});

gulp.task('extras', function() {
    return gulp.src(['app/*.*', '!app/*.html', '!app/*.js'], {
            dot: true
        })
        .pipe(gulp.dest('dist'));
});

gulp.task('build-development', ['clean', 'html', 'images', 'fonts', 'partials', 'extras']);

gulp.task('virus', ['tsd', 'compile-ts']);

gulp.task('build', ['build-development']);
