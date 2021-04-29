const gulp = require('gulp');
const htmlMinify = require('gulp-htmlmin')

function buildHtml() {
    return gulp.src('src/*.html')
        .pipe(htmlMinify({ collapseWhitespace: true }))
        .pipe(gulp.dest('buildFile'))
}
const sassCovertCss = require('gulp-sass')
const concatCss = require('gulp-concat')
const cssMinify = require('gulp-clean-css')

function buildSassAndCss() {
    return gulp.src(['src/css/**/*.css', 'src/sass/**/*.sass'])
        .pipe(sassCovertCss())
        .pipe(concatCss('style.css'))
        .pipe(cssMinify())
        .pipe(gulp.dest('buildFile/Css'))
}
const convertFromEs6 = require('gulp-babel')
const JSMinify = require('gulp-terser')

function buildJS() {
    return gulp.src('src/js/**/*.js')
        .pipe(concatCss('script.js'))
        .pipe(convertFromEs6())
        .pipe(JSMinify())
        .pipe(gulp.dest('buildFile/JS'))
}
const buildImage = require('gulp-image')

function buildImg() {
    return gulp.src('src/pics/*.*')
        .pipe(buildImage({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('buildFile/img'));
}
const watch = require('gulp');
const { parallel, series } = require('gulp');

function gulbWatch() {
    watch(['src/pics/*.*', 'src/js/**/*.js', 'src/css/**/*.css', 'src/sass/**/*.sass', 'src/*.html'], parallel(buildImg, buildJS, buildSassAndCss, buildHtml))
}

exports.default = series(parallel(buildImg, buildJS, buildSassAndCss, buildHtml), gulbWatch);