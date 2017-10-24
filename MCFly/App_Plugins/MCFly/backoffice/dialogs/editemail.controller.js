angular.module("umbraco")
    .controller("MCFly.EditEmailController",
    function ($scope, mcFlyResource, dialogService) {


        $scope.selected = _.findWhere($scope.dialogData.mcflyform.fields, { fieldTypeName: "Email", caption: $scope.dialogData.email.toProperty });

        mcFlyResource.getFormBuilderData().then(function (resp) {
            $scope.emailTemplates = resp.data.EmailTemplates;
        });

        $scope.email = $scope.dialogData.email;
        $scope.hasmailProperties = false;

       

        $scope.property = {
            alias: 'MCFly.EmailEditor.RTE',
            view: 'rte',
            config: {
                editor: {
                    toolbar: ["code", "undo", "redo", "cut", "bold", "italic", "alignleft", "aligncenter", "alignright", "bullist", "numlist", "link", "umbmediapicker", "table", "umbembeddialog", "mcflyFieldSelector"],
                    stylesheets: [],
                    dimensions: { height: 400, width: '100%' }
                }
            },
            value: $scope.email.content
        };

        $scope.$watch('property', function () {
            if ($scope.property != undefined) {

                $scope.email.content = $scope.property.value;

            }
        }, true);


       

        $scope.editEmail = function () {

            $scope.email.toProperty = $scope.selected.caption;

            dialogService.closeAll();
        }

        $scope.toPropertyFilter = function (field) {
            return field.fieldTypeName == "Email";

        };



        $scope.$watch('dialogData.mcflyform', function (newValue, oldValue) {

            if (newValue)
                $scope.hasmailProperties = _.where(newValue.fields, { fieldTypeName: "Email" }).length > 0;


        }, true);

    });