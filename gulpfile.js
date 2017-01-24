// Gulpfile.js
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

var dev_sass_dir = './dev/scss/*.scss';

gulp.task('sass', function() {
  return gulp.src(dev_sass_dir)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./wp-content/themes/twentyseventeen/assets/css/'))
    .pipe(livereload());
});

gulp.task('php', function() {
  console.log('You changed a PHP file...');
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(dev_sass_dir, ['sass']);
  gulp.watch('./wp-content/**/**/*.php', ['php']);
  console.log('You have a changed a file...');
});

gulp.task('default', ['watch','sass']);






