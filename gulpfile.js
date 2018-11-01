'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    rigger = require('gulp-rigger'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    gnf = require('gulp-npm-files'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect');


gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('js', function () {
    return gulp.src(['src/app.js', 'src/**/*.js'])
        // .pipe(ngAnnotate({
            // remove: true,
            // add: true,
            // single_quotes: true
        // }))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/scripts/'))
});

gulp.task('fonts', function () {
    return gulp.src(['node_modules/bootstrap/fonts'])
        .pipe(gulp.dest('dist/'))
});

gulp.task('styles', function () {
    return gulp.src('src/**/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/styles/'))
});

var dependencies = [
    "node_modules/angular/angular.js",
    "node_modules/angular-translate/dist/angular-translate.min.js",
    "node_modules/angular-translate/dist/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js",
    "node_modules/angular-filter/dist/angular-filter.min.js",
    "node_modules/angular-route/angular-route.js",
    "node_modules/@uirouter/angularjs/release/angular-ui-router.js",
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js",
    "node_modules/ng-file-upload/dist/ng-file-upload.min.js",
    "node_modules/angular-component/dist/angular-component.js",
    "node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js",
    "node_modules/angular-ui-bootstrap/template/modal/window.html.js",
    "node_modules/angular-spinner/dist/angular-spinner.min.js"
];

var dependenciesCss = [
    "node_modules/bootstrap/dist/css/bootstrap.css",
    "node_modules/bootstrap/dist/css/bootstrap-theme.css",
    "node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css"
];

gulp.task('copyNpmDep', function () {
    return gulp.src(dependencies)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/scripts/'))
});

gulp.task('copyNpmDepCSS', function () {
    return gulp.src(dependenciesCss)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('dist/styles/'))
});

gulp.task('copyFonts', function () {
    return gulp.src('src/fonts/**.*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('copyJson', function () {
    return gulp.src('src/vocabulary/**.json')
        .pipe(gulp.dest('dist/vocabulary'))
});

gulp.task('watcher', function () {
    gulp.watch('src/**/*.html', gulp.series('html'));
    gulp.watch('src/**/*.js', gulp.series('js'));
     gulp.watch('src/**/*.css', gulp.series('styles'));
    gulp.watch('src/**/*.json', gulp.series('copyJson'));
});

gulp.task('clean', function () {
    return gulp.src('dist', { read: false, allowEmpty: true })
        .pipe(clean());
});

gulp.task('connect', function () {
    return connect.server({
        root: 'dist',
        port: 8000
    });
});

gulp.task('build', gulp.series( 'clean', 'html', 'js', 'styles', 'copyNpmDep', 'copyNpmDepCSS', 'copyFonts', 'copyJson'));

gulp.task('main', gulp.parallel('watcher', 'connect'));

gulp.task('default', gulp.series('build', 'main'));