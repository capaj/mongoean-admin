app.controller('backupCtrl', function ($scope, admin, $log) {
    admin.backupNow($scope.selectedInstance, $scope.databases[0]);

});
