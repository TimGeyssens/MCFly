
var app = angular.module("umbraco");

app.requires.push('ui.sortable');



app.controller("MCFly.EditController",
    function ($scope, $routeParams, mcFlyResource, notificationsService, navigationService, dialogService) {

        $scope.loaded = false;
       
       
        $scope.aliasLocked = true;

        $scope.navigation = [
            {
                "name": 'Design',
                "icon": "icon-edit",
                "view": "/App_Plugins/MCFly/backoffice/views/formdesigner/design.html",
                "active": true
            },
            { 
                "name": 'Settings',
                "icon": "icon-settings",
                "view": "/App_Plugins/MCFly/backoffice/views/formdesigner/settings.html"
            },
            {
                "name": 'Emails',
                "icon": "icon-mailbox",
                "view": "/App_Plugins/MCFly/backoffice/views/formdesigner/emails.html"
            },
            {
                "name": 'Webhook',
                "icon": "icon-globe-alt",
                "view": "/App_Plugins/MCFly/backoffice/views/formdesigner/webhook.html"
            }
        ];


      

        

        mcFlyResource.getFormBuilderData().then(function (resp) {
            $scope.fieldtypes = resp.data.FieldTypes;
            $scope.emailTemplates = resp.data.EmailTemplates;

            if ($routeParams.id == -1) {
                $scope.form = {
                    'requiredErrorMessage': 'The field {0} is required',
                    'invalidErrorMessage': 'The field value for {0} is invalid',
                    'submitButtonCaption': 'Submit',
                    'messageOnSubmit': 'Your entry has been received',
                    'webHookUrl': '',
                    'storesData':true
                    
                };
                $scope.form.fields = [];
                $scope.form.emails = [];
                $scope.loaded = true;
                $scope.aliasLocked = false;
            }
            else {

                mcFlyResource.getById($routeParams.id).then(function (response) {
                    $scope.form = response.data;
                    if (!$scope.form.fields) {
                        $scope.form.fields = [];
                    }
                    if (!$scope.form.emails) {
                        $scope.form.emails = [];
                    }
                    
                    var log = [];
                    angular.forEach($scope.form.fields, function (value, key) {
                        value.$locked = true;
                    }, log);

                   
                    $scope.loaded = true;

                });
            }

        });

       

       
       
        
       
        $scope.addOption = function (field)
        {
            if (!field.options) {
                field.options = [];
            }

            var newOption = {
                'fieldId': field.id,
                'value': field.$newOptionValue

            };
            field.options.push(newOption);

        }

       

        //$scope.supportsOptions = function(fieldTypeName)
        //{
        //   return  _.findWhere($scope.fieldtypes, { Name: fieldTypeName }).SupportsOptions;
            
        //}

        $scope.getSafeFormAlias = function (value) {

            if (value == null || value == undefined)
                return "";
            mcFlyResource.getSafeAlias(value).then(function (resp) {
               $scope.form.alias = resp.data.value;

            });
        }

        //$scope.toPropertyFilter = function (field) {
        //    return field.fieldTypeName == "Email";
        //};

        $scope.save = function (form) {
            //console.log(form);
            //console.log(angular.toJson(form));
            mcFlyResource.save(form).then(function (response) {
                var log = [];
                angular.forEach(response.data.fields, function (value, key) {
                    value.$locked = true;
                }, log);
                $scope.aliasLocked = true;
                $scope.form = response.data;
                $scope.formForm.$dirty = false;
                navigationService.syncTree({ tree: 'mcFly', path: [-1, -1], forceReload: true });
                notificationsService.success("Success", form.name + " has been saved");
            });
        };

        $scope.$watch('form.name', function (newValue, oldValue) {
            if (!$scope.aliasLocked) {
                $scope.getSafeFormAlias(newValue);
            }
        });

    });