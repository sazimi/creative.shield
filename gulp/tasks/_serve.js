'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license']
});

gulp.task('serve', ['connect', 'styles'], function() {
    require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect', 'serve'], function() {
    var server = $.livereload();

    var ts = require('gulp-typescript');
    var merge = require('merge2');

    var tsProject = ts.createProject({
        declarationFiles: true,
        noExternalResolve: true
    });

    gulp.task('scripts', function() {
        var tsResult = gulp.src('lib/*.ts')
            .pipe(ts(tsProject));

        return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done.
            tsResult.dts.pipe(gulp.dest('release/definitions')),
            tsResult.js.pipe(gulp.dest('release/js'))
        ]);
    });

    // watch for changes

    gulp.watch([
        'app/**/*.html',
        '.tmp/styles/**/*.css',
        'app/scripts/**/*.js',
        'app/styles/**/*.scss',
        'app/styleguide/**/*',
        'app/images/**/*'
    ]).on('change', function(file) {
        server.changed(file.path);
    });


    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/**/*.ts', ['scripts']);
    gulp.watch('app/scripts/**/*.js');
    gulp.watch('app/images/**/*', ['images']);
    gulp.watch('bower.json', ['wiredep']);
});

gulp.task('connect', function() {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({
            port: 35729
        }))
        .use(connect.static('app'))
        .use(connect.static('.tmp'))
        .use(connect.directory('app'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function() {
            console.log('Started connect web server on http://localhost:9000');
        });
});


gulp.task('watch', ['watch']);
