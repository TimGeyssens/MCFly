angular.module("umbraco")
    .controller("MCFly.EditFieldController",
    function ($scope, mcFlyResource, dialogService) {
        $scope.field = $scope.dialogData.field;
      
      

        mcFlyResource.getFormBuilderData().then(function (resp) {
            $scope.fieldtypes = resp.data.FieldTypes;

            $scope.currentSupportsPlaceholder = _.findWhere($scope.fieldtypes, { Name: $scope.field.fieldTypeName }).SupportsPlaceholder;
            $scope.currentSupportsOptions = _.findWhere($scope.fieldtypes, { Name: $scope.field.fieldTypeName }).SupportsOptions;
        });


        $scope.removeOption = function (option) {
            $scope.field.options.splice($scope.field.options.indexOf(option), 1);
        }
        $scope.addOption = function () {
            if ($scope.fField.$newOptionValue && $scope.field.$newOptionValue != "") {

                var newOption = {
                    'value': $scope.field.$newOptionValue
                }
                $scope.field.options.push(newOption);
                $scope.field.$newOptionValue = "";
            }
        }

        $scope.editField = function () {

            $scope.field.$locked = true;
          


            $scope.submit();
        }

        $scope.checkSupports = function (fieldTypeName) {

            $scope.currentSupportsPlaceholder = _.findWhere($scope.fieldtypes, { Name: fieldTypeName }).SupportsPlaceholder;
            $scope.currentSupportsOptions = _.findWhere($scope.fieldtypes, { Name: fieldTypeName }).SupportsOptions;
        }

        
       
    });