'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver');


sass.compiler = require('node-sass');

var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return gulp.src('process/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/css'));
});

// gulp.task('sass', function () {
//     return sass('process/sass/style.scss', {
//       sourcemap: true,
//       style: 'compressed'
//     })
//     .on('error', function (err) {
//         console.error('Error!', err.message);
//     })
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('src/css'));
// });

gulp.task('watch', function() {
  gulp.watch('process/sass/**/*', gulp.series('sass'));
});

// gulp.task('webserver', function() {
//     gulp.src('builds/cloakingocean.com/')
//         .pipe(webserver({
//             livereload: true,
//             open: true
//         }));
// });

gulp.task('default', gulp.series('sass', 'watch')); //Removed webserver because react has one
gulp.task('build', gulp.series('sass'));
