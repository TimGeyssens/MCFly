angular.module("umbraco")
    .controller("MCFly.DeleteController",
    function ($scope, mcFlyResource, navigationService, treeService) {
        $scope.delete = function (id) {
            mcFlyResource.deleteById(id).then(function () {
                treeService.removeNode($scope.currentNode);
                navigationService.hideNavigation();

            });

        };
        $scope.cancelDelete = function () {
            navigationService.hideNavigation();
        };
    });