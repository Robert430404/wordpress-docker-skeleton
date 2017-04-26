var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    babel     = require('gulp-babel'),
    concat    = require('gulp-concat'),
    rename    = require('gulp-rename');

gulp.task('styles', function () {
    return gulp
        .src('src/assets/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('mca'))
});

gulp.task('scripts', function () {
    return gulp
        .src('src/assets/js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('mca/js'))
});

gulp.task('default', function () {
    gulp.watch('src/assets/scss/**/*.scss', ['styles']);
    gulp.watch('src/assets/js/**/*.js', ['scripts']);
});