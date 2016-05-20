var gulp      = require('gulp'),
    livereload = require('gulp-livereload'),
    sass      = require('gulp-sass');
gulp.task('sass', function () {
  gulp.src('./scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));

});
gulp.task('watch',function(){
  livereload.listen();
  gulp.watch(['scss/**/*.scss'],['sass'], function (files){
        livereload.changed(files)
    });
});


gulp.task('default',['sass','watch']);
