var fs = require('fs');
var mongodb = require('mongodb');

var instances = {};

module.exports = function () {
    fs.readdirSync("./cfgs").forEach(function(file) {
        var instanceName = file.split('.')[0];
        var instance = require("./../cfgs/" + file);
        instances[instanceName] = instance;

        var mongoServer = new mongodb.Server(instance.path, instance.port);
        var db = new mongodb.Db('mongoean_admin', mongoServer);
// Establish connection to db
        db.open(function(err, db) {
            instance.db = db;

        });

    });

    return instances;
};


