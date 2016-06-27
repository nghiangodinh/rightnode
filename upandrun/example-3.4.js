var fs = require('fs');

fs.readFile('./upandrun/foo.txt', 'utf8', function (err, data) {
    console.log(data);
});
fs.readFile('./upandrun/bar.txt', 'utf8', function (err, data) {
    console.log(data);
});
