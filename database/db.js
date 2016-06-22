const nano = require('nano')('http://localhost:5984');
const db = nano.db.use('test_db');

// create document
var data = {
    name: 'pikachu',
    skills: ['thunder bolt', 'iron tail', 'quick attack', 'mega punch'],
    type: 'electric'
};

db.insert(data, 'unique_id', function (err, body) {
    if (!err) {
        //awesome
        console.log('error: ' + err);
    } else {
        console.log(body);
    }
});

// retrieve document
var type = 'water';
db.view('pokemon', 'by_type', { 'key': type, 'include_docs': true }, function (err, body) {
    if (!err) {
        var rows = body.rows; //the rows returned
        console.log(rows);
    }
});

// update document
db.update = function (obj, key, callback) {
    db.get(key, function (error, existing) {
        if (!error) obj._rev = existing._rev;
  
        db.insert(obj, key, callback);
    });
};
// db.update(doc, doc_id, function(err, res){
//     if(!err){
//         //document has been updated
//     }

// });

// delete document
const doc_id = '111', revision_id = '';
db.destroy(doc_id, revision_id, function(err, body) {
    if(!err){
        //done deleting
    }
    console.log(body);
});
