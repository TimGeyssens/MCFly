angular.module("umbraco")
    .controller("MCFly.FormDesigner.Emails.Controller",
    function ($scope, mcFlyResource,dialogService) {
       


 

 

        $scope.removeEmail = function (email) {
            $scope.model.emails.splice($scope.model.emails.indexOf(email), 1);


        }
    

   
   
        $scope.editEmailWithDialog = function (email) {
            dialogService.open({
                template: '../App_Plugins/MCFly/backoffice/dialogs/editemail.html',

                callback: function (data) {
                    
                },
                show: true,
              
                dialogData: {
                    mcflyform: $scope.model,
                    email: email

                }
            });
        }


        $scope.addEmailWithDialog = function () {
            dialogService.open({
                template: '../App_Plugins/MCFly/backoffice/dialogs/addemail.html',

                callback: function (data) {
                    //$scope.model = data;
                },
                show: true,
                dialogData: {
                    form: $scope.model,

                }
            });
        }


    });