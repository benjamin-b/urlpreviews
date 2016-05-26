var gulp      = require('gulp'),
    connect   = require('gulp-connect'),
    sass      = require('gulp-sass');

gulp.task('webserver', function() {
    connect.server({
      port: 9090,
      livereload: true
    });
});
gulp.task('sass', function () {
  gulp.src('./scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});
gulp.task('script', function () {
  gulp.src('./scripts/*.js')
    .pipe(connect.reload());
});


gulp.task('watch',function(){
  gulp.watch(['scss/**/*.scss'],['sass']);
  gulp.watch(['*.html'],['html']);
  gulp.watch(['scripts/*.js'],['script']);
});

gulp.task('default',['sass','html','script', 'webserver','watch']);
