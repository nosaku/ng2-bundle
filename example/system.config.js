System.config({
    transpiler: 'typescript',
        defaultJSExtensions: true,
        //typescript compiler options
        typescriptOptions: {
                emitDecoratorMetadata: true
        },
    paths: {
        // paths serve as alias
        'npm:': 'node_modules/'
    },
    map: {
        'rxjs': 'node_modules/rxjs',
        'app': 'src',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js'
    },
    packages: {
        'rxjs': {
            main: "Rx"
        },
        'app': {
            main: 'main.ts',
            defaultExtension: 'ts'
        }
    }
});
