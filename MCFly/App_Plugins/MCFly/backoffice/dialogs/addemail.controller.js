angular.module("umbraco")
    .controller("MCFly.AddEmailController",
    function ($scope, mcFlyResource, dialogService) {
        $scope.newEmail = {};
       

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
            value: ''
        };

        $scope.$watch('property', function () {
            if ($scope.property != undefined) {
               
                    $scope.newEmail.content = $scope.property.value;
               
            }
        }, true);

       


        mcFlyResource.getFormBuilderData().then(function (resp) {
            $scope.emailTemplates = resp.data.EmailTemplates;

            $scope.newEmail.template = $scope.emailTemplates[0];

        });

        $scope.addEmail = function () {

            //console.log($scope.contents);
            //$scope.newEmail.content = $scope.contents;

            $scope.dialogData.form.emails.push($scope.newEmail);

           
            dialogService.closeAll();
        }

        $scope.toPropertyFilter = function (field) {
            return field.fieldTypeName == "Email";

        };



        $scope.$watch('dialogData.form', function (newValue, oldValue) {

            if ($scope.dialogData.form)
                $scope.hasmailProperties = _.where($scope.dialogData.form.fields, { fieldTypeName: "Email" }).length > 0;


        }, true);


       
    });