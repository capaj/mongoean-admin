var express = require('express');
var pkgJSON = require('./package.json');
var port = pkgJSON.port;
var app = module.exports = express();

app.configure(function(){
    app.set('port', port);
    app.use(express.methodOverride());
    app.use(app.router);

});
var server = app.listen(app.get('port'));
var fs = require('fs');
var Promise = require('bluebird');
var rpc = require('socket.io-rpc');
var io = require('socket.io').listen(server);
var pathChecker = require('./server/pathChecker.js');

rpc.createServer(io, {expressApp: app});

var mongoInstances = require('./server/mongo-instances');

var currentInstance;
var instances = mongoInstances();

rpc.expose('status', {
    /**
     *
     * @param {String} instance name(same as cfg JSON file name)
     * @returns {*}
     */
    listDbs: function (instance) {
        var promisified = Promise.promisify(instances[instance].db.admin().listDatabases);
        return promisified();
    }

});

io.sockets.on('connection', function (socket) {
//    rpc.loadClientChannel(socket, 'clientChannel').then(function (fns) {
//        fns.fnOnClient("calling client ").then(function (ret) {
//            console.log("client returned: " + ret);
//        });
//    });

});

app.get('*', function(req, res){
    var pathName = req._parsedUrl.pathname;
    var filePath = './public' + pathName;
    fs.exists(filePath, function (exists)
    {
        if(exists)
        {
            res.sendfile(filePath);
        } else {
            if(pathChecker(pathName)){
                res.sendfile('./public/index.html');
            } else {
                res.status(404);
                res.sendfile('./public/index.html');
            }
        }

    });

});
