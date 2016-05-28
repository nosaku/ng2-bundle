var copy = require('copy');

copy(
['./node_modules/reflect-metadata/Reflect.js',
'./node_modules/reflect-metadata/Reflect.js.map',
'./node_modules/systemjs/dist/system.js',
'./node_modules/systemjs/dist/system.js.map',
'./node_modules/typescript/lib/typescript.js',
'./node_modules/zone.js/dist/zone.min.js',
], 'dist', {flatten: true}, function(err, file) {
	console.log('done copying required JS files');
});

copy('dist/*', 'example/dist', {flatten: true}, function(err, file) {
	console.log('done copying dist to example');
});
