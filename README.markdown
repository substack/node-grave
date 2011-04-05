grave
=====

Manage versioning and updates of your couchdb design documents while using
[cradle](https://github.com/cloudhead/cradle).

    var client = require('grave').connect('localhost', 5984);
    var db = client.db('webshizzle');
    
    var design = db.design('users', '0.0.2');
    
    design.view('all', {
        map : function (doc) {
            if (doc.type === 'user') emit(doc._id, doc);
        },
    });
    
    design.end();

![Manny Calavera rocking the cradle](http://substack.net/images/grave/manny.png)

methods
=======

grave.connect(...)
------------------

Pass through arguments to `cradle.Connection` and return a new "`client`"
handle.

client.db(dbname)
-----------------

Return a cradle database handle with an extra method, `db.design()`.

db.design(name, version)
------------------------

Start a design with a `name` and a `version`.
The`version` should be understood by
[semver](https://github.com/isaacs/node-semver).

design.view(name, view)
-----------------------

Define a couchdb view. CouchDB views have `map`, `reduce`, and fields of that
sort.

design.list(name, list)
-----------------------

Define a couchdb list. CouchDB lists are functions that look like
`function (head, req) { /* ... */ }`.

design.update(name, update)
---------------------------

Define a couchdb update. These look like `function (doc, req) { /* ... */ }`.

design.end(cb)
--------------

Declare the end of the design document definitions and save them to couchdb when
the design version is greater than the couchdb version.

kudos
=====

[tanepiper](https://github.com/tanepiper)
came up with this idea. It's all his fault!
