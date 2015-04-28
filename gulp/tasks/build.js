// 'use strict';

// var gulp = require('gulp');

// var $ = require('gulp-load-plugins')({
//   pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license']
// });

// gulp.task('styles', function () {
//   return gulp.src('app/styles/styles.scss')
//     .pipe($.rubySass({
//       style: 'expanded'
//     }))
//     .pipe($.autoprefixer('last 1 version'))
//     .pipe(gulp.dest('.tmp/styles'))
//     .pipe(gulp.dest('dist/styles'))
//     .pipe(gulp.dest('dist/styleguide/styles'));
// });

// gulp.task('partials', function () {
//   return gulp.src('app/views/**/*.html')
//     .pipe(gulp.dest('dist/views'));
// });

// gulp.task('copy-css', function () {
//   gulp.src('.tmp/styles/styles.css')
//     .pipe(gulp.dest('dist/styles/'));
// });

// gulp.task('html', ['styles'], function () {
//   var cssFilter = $.filter('app/**/*.css');
//   var gulpif = require('gulp-if');
//   return gulp.src('app/*.html')
//     .pipe($.useref.assets({
//       searchPath: '{.tmp,app}'
//     }))
//     .pipe(cssFilter)
//     .pipe($.replace('app/bower_components/bootstrap-sass-official/vendor/assets/fonts/bootstrap', 'fonts'))
//     .pipe($.csso())
//     .pipe(cssFilter.restore())
//     .pipe(gulpif('*.js', $.ngAnnotate()))
//     .pipe(gulpif('*.js', $.uglify()))
//     .pipe($.useref.restore())
//     .pipe($.useref())
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('images', function () {
//   return gulp.src('app/images/**/*')
//     .pipe($.cache($.imagemin({
//       optimizationLevel: 3,
//       progressive: true,
//       interlaced: true
//     })))
//     .pipe(gulp.dest('dist/images'));
// });

// gulp.task('fonts', function () {
//   return gulp.src('app/fonts/**/*')
//     .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
//     .pipe(gulp.dest('dist/fonts'));
// });

// gulp.task('clean', function () {
//   return gulp.src(['.tmp', 'dist'], {
//     read: false
//   }).pipe($.clean());
// });

// gulp.task('extras', function () {
//   return gulp.src(['app/*.*', '!app/*.html', '!app/*.js'], {
//       dot: true
//     })
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('build-production', ['html', 'images', 'fonts',  'partials', 'extras']);

// gulp.task('build', ['build-production']);
