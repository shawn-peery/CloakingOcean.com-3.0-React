var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver');

gulp.task('js', function() {
  return gulp.src('src/*.js')
    .pipe(jshint('./.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function () {
    return sass('process/sass/style.scss', {
      sourcemap: true,
      style: 'compressed'
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/*.js', gulp.series('js'));
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
