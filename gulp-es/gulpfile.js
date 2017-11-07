var gulp = require('gulp')
var babel = require('gulp-babel')
var webpack = require('webpack-stream');

gulp.task('default', () => {
  gulp.src('src/app.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('webpack', function() {
  return gulp.src('src/app.js')
    .pipe(webpack({
      // Any configuration options...
    }))
    .pipe(gulp.dest('dist/'));
});