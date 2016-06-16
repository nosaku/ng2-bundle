var SystemBuilder = require('systemjs-builder');
var builder = new SystemBuilder();

builder.loadConfig('./angular.config.js')
  .then(function(){
	  return builder.bundle(
          '@angular/core + @angular/compiler + @angular/common + @angular/platform-browser + @angular/platform-browser-dynamic + @angular/router + @angular/router-deprecated + @angular/http + @angular/upgrade + rxjs',
          'dist/angular2-bundle.js',
          { minify: true });
  })
  .then(function(){
	  console.log('library bundles built successfully!');
  });
