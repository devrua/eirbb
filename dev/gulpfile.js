var gulp          = require('gulp');
var sass          = require('gulp-sass');
var sourcemaps    = require('gulp-sourcemaps');
var cleanCSS      = require('gulp-clean-css');
var uglify        = require('gulp-uglify');
// var autoprefixer  = require('gulp-autoprefixer');
// var concat        = require('gulp-concat');

// Gulp Sass Task 
gulp.task('sass', function() {
  gulp.src('./sass/**/*.{scss,sass}')
    // Initializes sourcemaps
    .pipe(sourcemaps.init())  
    .pipe(sass({
      errLogToConsole: true
      }))
    // Writes sourcemaps into the CSS file
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../assets/css'));
});

// //CSS browser prefixes
// gulp.task('prefix-css', function() {

// });

// //Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('../assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('../assets/css/min'));
});

// //Minify JavaScript
gulp.task('minify-js', function() {
  gulp.src('./dev/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js/min'));
});

// Watch scss folder for changes
gulp.task('watch', function() {
  // Watches the sass folder for all .scss and .sass files
  // If any file changes, run the sass task
  gulp.watch('./sass/**/*.{scss,sass}', ['sass']);
  gulp.watch('../assets/css/**.css', ['minify-css']);
  gulp.watch('./js/**.js', ['minify-js']);
});

// Creating a default task
gulp.task('default', ['watch', 'sass', 'minify-css', 'minify-js']);


