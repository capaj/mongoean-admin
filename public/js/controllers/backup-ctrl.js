app.controller('backupCtrl', function ($scope, status, $log) {
    status.listDbs('local').then(function (dbs) {
        $log.info(dbs);
        angular.extend($scope, dbs);
    })

});
