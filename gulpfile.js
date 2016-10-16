'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minifyJs = require('gulp-uglify');
var jslint = require('gulp-jshint');
var compressImages = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var runSequence = require('run-sequence');
var clean = require('del');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');

// CSS
gulp.task('css', function () {
    return gulp.src('src/css/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'));
});

// JavaScript
gulp.task('js', function () {
    return gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(minifyJs())
        .pipe(concat('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});

gulp.task('jslint', function () {
    return gulp.src('src/js/*.js')
        .pipe(jslint())
        .pipe(jslint.reporter('default'));
});

// Images
gulp.task('compressImages', function () {
    return gulp.src('src/images/**/*.+(png|jpg|gif|svg)')
        .pipe(compressImages())
        .pipe(gulp.dest('build/images'));
});

// Templates
gulp.task('moveTemplates', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('build'));
});

// Reload browser automatically
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    });
});

// Remove files and folders
gulp.task('build-clean', function () {
    return clean(['build']);
});

// Watch files changes
// Reload browser on html, css, js changes
gulp.task('watch', ['browserSync'], function () {
    gulp.watch('src/css/*.scss', ['css']);
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/css/*.css', browserSync.reload);
    gulp.watch('src/js/*.js', browserSync.reload);
});

// Build the app
gulp.task('build', function () {
    runSequence('build-clean', 'moveTemplates', 'css', 'js', 'compressImages');
});
