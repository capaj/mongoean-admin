window.app = angular.module('mongoeanAdmin',
    [
        'RPC',
        'ngRoute',
        'ngTouch',
        'angularMoment',
        'angularLocalStorage'
        // included, but by default not loaded, if you need it, just add it to script manifest
        // 'angular-gestures'
    ]
).config(
    function($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);  //Setting HTML5 Location Mode

        routesModule.routes.forEach(function(routeDef){
            $routeProvider.when(routeDef.route, routeDef.resolve);
        });
        $routeProvider.otherwise({redirectTo:'/404'});
    }
).run(function ($rpc, $rootScope) {
    $rpc.connect('http://localhost:29017');   // don't forget port, if you are not on 80
    console.log('run ' + new Date().toJSON());
});

