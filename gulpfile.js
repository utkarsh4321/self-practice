const gulp = require('gulp'),
  sync = require('browser-sync').create(),
  sass_gulp = require('gulp-sass');


// COMPILE SASS AND INJECT INIO BROWSER

gulp.task('sass', () => {

  gulp.src(['./node_modules/bootstrap/scss/bootstrap.scss', './src/sass/*.scss']).pipe(sass_gulp()).pipe(gulp.dest('./src/css')).pipe(sync.stream());

});

// MOVE SOME FILE FROM THE NODE_MODULES TO THE DEST FOLDER

gulp.task('js', () => {
  gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js']).pipe(gulp.dest('./src/js'));

});
// MOVE THE FILE POPPER.js FILE FROM THE NODE_MODULES

gulp.task('trans', () => {

  gulp.src('./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js').pipe(gulp.dest('./src/js'));


});

// MOVE THE HTML FILE FROM SRC TO DEST
// gulp.task('ht', () => {
//   gulp.src('./src/*.html').pipe(gulp.dest('./dest'));

// });

// WATCH THE GULP FUNCTION

gulp.task('serve', ['sass'], () => {
  sync.init({
    server: "./src"
  });

  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', './src/sass/*.scss'], ['sass']);
  gulp.watch("./src/*.html").on('change', sync.reload);
  gulp.watch('./src/js/*.js').on('change', sync.reload);

});


// MOVE THE FONTS TO DESTINATION 

gulp.task('font', () => {
  gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/*').pipe(gulp.dest('./src/webfonts'));

});
// MOVE THE FONT CSS FILE INIO THE FOLDER
gulp.task('fa', () => {
  gulp.src('./node_modules/@fortawesome/fontawesome-free/css/all.css').pipe(gulp.dest('./src/css'));

});

// FONTAWESOME JS FILE 
gulp.task('fj', () => {

  gulp.src('./node_modules/@fortawesome/fontawesome-free/js/all.js').pipe(gulp.dest('./src/js'));
});
// DEFAult FUNTION

gulp.task('default', ['sass', 'js', 'serve', 'font', 'fa', 'fj', 'trans']);