app.controller('backupCtrl', function ($scope, admin, $log, $rootScope) {
    admin.backupNow($scope.selectedInstance, $scope.databases[0]);
    $rootScope.readyCallback && $rootScope.readyCallback();

});
