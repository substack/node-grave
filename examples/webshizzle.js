var client = require('grave').connect('localhost', 5984);
var db = client.db('webshizzle');

var design = db.design('users', '0.0.2');

design.view('all', {
    map : function (doc) {
        if (doc.type === 'user') emit(doc._id, doc);
    },
});

design.view('list', {
    map : function (doc) {
        if (doc.type === 'user') emit(null, doc._id);
    },
    reduce : function (keys, values) {
        return values;
    },
});

design.end();
