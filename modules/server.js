// in server.js
var config = require('./config.js');
console.log(config.foo);
console.log(__filename);
console.log(__dirname);
console.log(process.config);
console.log(process.argv);
console.log(process.env);
if ( require.main=== module){
    console.log('This is main modele beging run.')
}