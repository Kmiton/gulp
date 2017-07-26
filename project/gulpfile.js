var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function(){
  gulp.src('app/scss/styles.scss')
    .pipe(sass()) 
    .pipe(gulp.dest('app/css/'))
});

gulp.task('watch', function() {
    gulp.watch('app/scss/styles.scss', ['sass']);
});
