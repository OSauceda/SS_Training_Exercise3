//Testing Gulp

var gulp = require('gulp');

//Sass
var sass = require('gulp-sass');

//Browser Sync
var browserSync = require('browser-sync').create();
var reload = browserSync.reload

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '../exercise3'
    },
  })
})

//Sass
gulp.task('sass', function () {
    gulp.src('scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
	    .pipe(reload({stream: true}));
});

//Automate tasks
gulp.task('watch', ['browserSync'], function() {
    gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default',function(){
  //Testing
});
