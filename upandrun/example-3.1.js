'use strict';

var  EE = require('events').EventEmitter;
var ee = new EE();

var die = false;

ee.on('die', function() {
    die = true;
});

setTimeout(function() {
    ee.emit('die');
}, 100);

while(!die) {
}

console.log('done');