angular.module("umbraco")
    .controller("MCFly.TinyMCESelectFieldController",
    function ($scope, mcFlyResource) {
        console.log($scope.dialogData);

        mcFlyResource.getById($scope.dialogData.formId).then(function (response) {
            $scope.form = response.data;
            if (!$scope.form.fields) {
                $scope.form.fields = [];
            }
            if (!$scope.form.emails) {
                $scope.form.emails = [];
            }

          

        });

    });