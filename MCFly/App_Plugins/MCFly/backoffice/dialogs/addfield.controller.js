angular.module("umbraco")
    .controller("MCFly.AddFieldController",
    function ($scope, mcFlyResource, dialogService) {
        $scope.newField = {};
        $scope.newField.regEx = "";
        $scope.newField.placeholder = "";
        $scope.newField.formId = $scope.dialogData.form.Id
        $scope.newField.fieldTypeName = "TextBox";
        $scope.currentSupportsPlaceholder = true;

        mcFlyResource.getFormBuilderData().then(function (resp) {
            $scope.fieldtypes = resp.data.FieldTypes;
        });

        $scope.addField = function () {
           
            $scope.newField.$locked = true;
            $scope.dialogData.form.fields.push($scope.newField);

           
            $scope.submit($scope.dialogData.form);
        }

        $scope.supportsPlaceholder = function (fieldTypeName) {
            
            $scope.currentSupportsPlaceholder = _.findWhere($scope.fieldtypes, { Name: fieldTypeName }).SupportsPlaceholder;

        }

        $scope.supportsOptions = function (fieldTypeName) {
            return _.findWhere($scope.fieldtypes, { Name: fieldTypeName }).SupportsOptions;

        }
        $scope.getSafeAlias = function (value) {

            mcFlyResource.getSafeAlias(value).then(function (resp) {
                $scope.newField.alias = resp.data.value;

            });
        }

    });