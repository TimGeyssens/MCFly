angular.module("umbraco")
    .controller("MCFly.AddFieldController",
    function ($scope, mcFlyResource, dialogService) {
        $scope.newField = {};
        $scope.newField.options = [];
        $scope.newField.regEx = "";
        $scope.newField.placeholder = "";
        $scope.newField.formId = $scope.dialogData.form.Id
        $scope.newField.fieldTypeName = "TextBox";
        $scope.currentSupportsPlaceholder = true;
        $scope.currentSupportsOptions = false;

        mcFlyResource.getFormBuilderData().then(function (resp) {
            $scope.fieldtypes = resp.data.FieldTypes;
        });
        $scope.removeOption = function (option)
        {
            $scope.newField.options.splice($scope.newField.options.indexOf(option), 1);
        }
        $scope.addOption = function () {
            if ($scope.newField.$newOptionValue && $scope.newField.$newOptionValue != "") {

                var newOption = {
                    'value': $scope.newField.$newOptionValue
                }
                $scope.newField.options.push(newOption);
                $scope.newField.$newOptionValue = "";
            }
        }
        $scope.addField = function () {
           
            $scope.newField.$locked = true;
            $scope.dialogData.form.fields.push($scope.newField);

           
            $scope.submit($scope.dialogData.form);
        }

        $scope.checkSupports = function (fieldTypeName) {

            var current = _.findWhere($scope.fieldtypes, { Name: fieldTypeName });
            console.log(current);
            $scope.currentSupportsPlaceholder = current.SupportsPlaceholder;
            $scope.currentSupportsOptions = current.SupportsOptions;

        }

       
        $scope.getSafeAlias = function (value) {

            mcFlyResource.getSafeAlias(value).then(function (resp) {
                $scope.newField.alias = resp.data.value;

            });
        }

    });