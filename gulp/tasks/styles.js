const gulp         = require('gulp');
const postcss      = require('gulp-postcss');
const autoprexifer = require('autoprefixer');
const cssvars      = require('postcss-simple-vars');
const nested       = require('postcss-nested');
const cssImport    = require('postcss-import');
const mixins       = require('postcss-mixins');

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
             .pipe(postcss([cssImport, mixins, cssvars, nested, autoprexifer]))
             .on('error', function(err) {
               console.log(err.toString());
               this.emit("end");
             })
             .pipe(gulp.dest('./app/temp/styles'));
});