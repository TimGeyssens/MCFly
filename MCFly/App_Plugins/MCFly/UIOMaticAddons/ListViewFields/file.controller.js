angular.module("umbraco").controller("MCFly.UIOMaticAddons.FileListViewFieldController",
    function ($scope) {


        $scope.isPicture = function (path) {
            if (/\.(jpg|png|gif|jpeg)$/.test(path)) {
                return true;
            }
            return false;
        }
    });