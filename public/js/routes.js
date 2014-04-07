(function(exports){

    //application routing
    exports.routes = [
        { route:'/', resolve: {templateUrl:'/templates/root.html'}},
        { route:'/status', resolve: {templateUrl:'/templates/status.html'}},
        { route:'/backup', resolve: {templateUrl:'/templates/backup.html', reloadOnSearch: false}},
        { route:'/collections', resolve: {templateUrl:'/templates/collections.html', reloadOnSearch: false}}

    ];

})(typeof exports === 'undefined'? this['routesModule']={}: exports);

