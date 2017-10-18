angular.module("umbraco").controller("uioMaticAddons.ExportController",
    function ($scope, uioMaticExportResource) {
        $scope.loading = true;
        uioMaticExportResource.getExport($scope.dialogData.typeAlias).then(function (response) {
            $scope.file = response.data;
            $scope.loading = false;
        });
});