# ng2-bundle
A project to create Angular 2 bundle JS for testing applications created in the Plunkr type of way. The primary aim is to reduce the number of requests made when using the official Angular 2 Plunkr examples.

# Installation 

    npm install -g http-server
    npm install
    npm run bundle
        
After the npm install, you will see the Angular 2 bundle and other required JS files in dist directory. Use the bundled index.html for testing directly in the browser. For doing this use:
    
    cd example
    http-server -c-1

Then open a browser at the following url:

    http://localhost:8080
        
After the bundle is created you can reuse it in various applications and test using direct transpiling in browser.

# Scope
This repo is meant a starter for learning purposes only using the transpiling in browser.

For bootstrapping an app, please use the official [angular-cli](https://cli.angular.io/). If the CLI is still in early stages, these are the most popular starters kits:

- Based on SystemJs, SystemJs-Builder and Gulp - [ng2-seed](https://github.com/mgechev/angular2-seed) 
- Based on Webpack - [angular2-webpack-starter](https://github.com/AngularClass/angular2-webpack-starter)

# Credit

This repo is based on the [ng2-minimal](https://github.com/jhades/ng2-minimal) made by [jhades](https://github.com/jhades).

