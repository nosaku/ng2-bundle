System.config({
    transpiler: 'typescript',
        defaultJSExtensions: true,
        //typescript compiler options
        typescriptOptions: {
                emitDecoratorMetadata: true
        },
        map: {
        'rxjs': 'node_modules/rxjs',
        '@angular': 'node_modules/@angular',
        'app': 'src'
    },
    packages: {
        '@angular/core': {
            main: 'index'
        },
        '@angular/compiler': {
            main: 'index'
        },
        '@angular/common': {
            main: 'index'
        },
        '@angular/platform-browser': {
            main: 'index'
        },
        '@angular/platform-browser-dynamic': {
            main: 'index'
        },
        '@angular/router': {
            main: 'index'
        },
        '@angular/router-deprecated': {
            main: 'index'
        },
        '@angular/http': {
            main: 'index'
        },
        '@angular/upgrade': {
            main: 'index'
        },
        'rxjs': {
            main: "Rx"
        },
        'app': {
            main: 'main.ts',
            defaultExtension: 'ts'
        }
    }
});
