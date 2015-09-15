var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del');

gulp.task('default', ['watch']);

gulp.task('scripts', function() {
    return gulp.src(['assets/js/*.js'])
        .pipe(concat('spotify.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('styles', function() {
    gulp.src('assets/sass/spotify.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function() {
    gulp.watch(['assets/js/*.js'], ['scripts']);
    gulp.watch(['assets/sass/**/*.scss', 'assets/sass/*.scss'], ['styles']);
});
