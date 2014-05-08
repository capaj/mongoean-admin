var fs = require('fs');
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var instances = {};

module.exports = function () {
    fs.readdirSync("./cfgs").forEach(function(file) {
        var instanceName = file.split('.')[0];
        var instance = require("./../cfgs/" + file);
        instances[instanceName] = instance;

        // Establish connection to db
        mongoClient.connect('mongodb://' + instance.path, function (err, db) {
            if (err) {
                console.error(err);
            }
            instance.db = db;
        });

    });

    return instances;
};


