angular.module("umbraco")
    .controller("MCFly.FormDesigner.Design.Controller",
    function ($scope, mcFlyResource,dialogService) {
       
    
    mcFlyResource.getFormBuilderData().then(function (resp) {
                $scope.fieldtypes = resp.data.FieldTypes;
              

    });

    $scope.lock = function (field)
    {
        field.$locked = true;
    }
    $scope.unlock = function (field) {
        field.$locked = false;
    }
    $scope.supportsPlaceholder = function (fieldTypeName) {
        if (fieldTypeName == undefined) return false;

        return _.findWhere($scope.fieldtypes, { Name: fieldTypeName }).SupportsPlaceholder;

    }

    $scope.removeField = function (field)
    {
        $scope.model.fields.splice($scope.model.fields.indexOf(field), 1);

        
    }

     $scope.addFieldWithDialog = function()
        {
            dialogService.open({
                template: '../App_Plugins/MCFly/backoffice/dialogs/addfield.html',
               
                callback: function (data) {
                    console.log(data);
                },
                show: true,
                dialogData: {
                    form: $scope.model,
                   
                }
            });
    }


     $scope.editFieldWithDialog = function (field) {
         dialogService.open({
             template: '../App_Plugins/MCFly/backoffice/dialogs/editfield.html',

             callback: function (data) {
                 console.log(data);
             },
             show: true,
             dialogData: {
                 field: field,

             }
         });
     }

    });