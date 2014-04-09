app.controller('rootCtrl', function ($scope, admin, $log) {
	admin.listDbs('local').then(function (dbs) {
        $log.info(dbs);
        angular.extend($scope, dbs);
    })

});
