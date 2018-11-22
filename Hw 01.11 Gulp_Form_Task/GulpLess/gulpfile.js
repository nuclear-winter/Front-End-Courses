'use strict';

const gulp = require('gulp');

gulp.task('default', function () {
    return gulp.src('src/**/*.*{js,css}')
    .on('data', function(file) {

    })
    .pipe(gulp.dest(function(file) {
        return file.extname === '.js' ? 'js' :
        file.extname === '.css' ? 'css' : 'dest';
    }));
});

