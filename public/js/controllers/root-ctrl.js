app.controller('rootCtrl', function ($scope, admin, $log, $rootScope) {
    $scope.databases = [];
    admin.getInstances().then(function (instances) {
        $scope.instances = instances;
        $scope.selectedInstance = instances[0];

        admin.listDbs($scope.selectedInstance).then(function (dbs) {
            $log.info(dbs);
            angular.extend($scope, dbs);
            $rootScope.readyCallback && $rootScope.readyCallback();
        }, function (err) {

        });
    }, function (err) {

    });

    angular.extend($scope, {
        selectedForBackup: function(){
            return $scope.databases.filter(function (db) {
                return db.includeForBackup;
            });
        }
    })

});
