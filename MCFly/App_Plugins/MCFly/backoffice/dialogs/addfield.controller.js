angular.module("umbraco")
    .controller("MCFly.AddFieldController",
    function ($scope, mcFlyResource, dialogService) {
        $scope.newFieldTypeName = "TextBox";

        mcFlyResource.getFormBuilderData().then(function (resp) {
            $scope.fieldtypes = resp.data.FieldTypes;
        });

        $scope.addField = function (form, name, alias, fieldtype, placeholder, required) {

            var newField = {
                'formId': form.Id,
                'alias': alias,
                'caption': name,
                'placeholder': placeholder == null ? '' : placeholder,
                'required': required,
                'regEx': '',
                'fieldTypeName': fieldtype
            }
            newField.$locked = true;
            $scope.dialogData.form.fields.push(newField);

           
            dialogService.closeAll();
        }

        $scope.supportsPlaceholder = function (fieldTypeName) {
            if (fieldTypeName == undefined) return false;

            return _.findWhere($scope.fieldtypes, { Name: fieldTypeName }).SupportsPlaceholder;

        }

        $scope.supportsOptions = function (fieldTypeName) {
            return _.findWhere($scope.fieldtypes, { Name: fieldTypeName }).SupportsOptions;

        }
        $scope.getSafeAlias = function (value) {

            mcFlyResource.getSafeAlias(value).then(function (resp) {
                $scope.newFieldAlias = resp.data.value;

            });
        }

    });