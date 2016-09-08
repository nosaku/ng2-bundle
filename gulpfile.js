var gulp = require('gulp');
var SystemBuilder = require('systemjs-builder');
var builder = new SystemBuilder();

gulp.task('libs.bundle', function () {
    builder.loadConfig('./angular.config.js')
        .then(function () {
            return builder.bundle(
                '@angular/core + @angular/compiler + @angular/common + @angular/platform-browser + @angular/platform-browser-dynamic + @angular/router + @angular/http + @angular/upgrade + @angular/forms + rxjs',
                'dist/angular2-bundle.js',
                { minify: true });
        })
        .then(function () {
            console.log('library bundles built successfully!');
        });
});

gulp.task('copy.lib.deps', function () {
    return gulp.src([
        './node_modules/reflect-metadata/Reflect.js',
        './node_modules/reflect-metadata/Reflect.js.map',
        './node_modules/systemjs/dist/system.js',
        './node_modules/systemjs/dist/system.js.map',
        './node_modules/typescript/lib/typescript.js',
        './node_modules/zone.js/dist/zone.min.js',
        './node_modules/core-js/client/shim.min.js'
    ])
        .pipe(gulp.dest('dist'))
});

gulp.task('copy.example', function () {
    return gulp.src([
        'dist/*'
    ])
        .pipe(gulp.dest('example/dist'))
});
