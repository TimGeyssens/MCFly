angular.module("umbraco")
    .controller("MCFly.EditFieldController",
    function ($scope, mcFlyResource, dialogService) {
        $scope.field = $scope.dialogData.field;
      
        $scope.currentSupportsPlaceholder = true;

        mcFlyResource.getFormBuilderData().then(function (resp) {
            $scope.fieldtypes = resp.data.FieldTypes;
        });

        $scope.editField = function () {

            $scope.field.$locked = true;
          


            $scope.submit();
        }

        $scope.supportsPlaceholder = function (fieldTypeName) {

            $scope.currentSupportsPlaceholder = _.findWhere($scope.fieldtypes, { Name: fieldTypeName }).SupportsPlaceholder;

        }

        $scope.supportsOptions = function (fieldTypeName) {
            return _.findWhere($scope.fieldtypes, { Name: fieldTypeName }).SupportsOptions;

        }
       
    });