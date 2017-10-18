
var app = angular.module("umbraco");

app.requires.push('ui.sortable');



app.controller("MCFly.EditController",
    function ($scope, $routeParams, mcFlyResource, notificationsService, navigationService) {

        $scope.loaded = false;
        $scope.newFieldName = "";
        $scope.hasmailProperties = false;

        $scope.activeTab = 'design';

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

                    $scope.hasmailProperties = _.where($scope.form.fields, { fieldTypeName: "Email" }).length > 0;
                    $scope.loaded = true;

                });
            }

        });

        $scope.setActiveTab = function (name) {
            $scope.activeTab = name;
        }
        $scope.checkActiveTab = function (name) {
           
            if (String($scope.activeTab) == String(name))
                return true;
            return false;
        }

        $scope.addField = function (form,name,alias,fieldtype,placeholder,required)
        {

            var newField = {
                'formId': form.Id,
                'alias': alias,
                'caption': name,
                'placeholder': placeholder == null ? '' : placeholder,
                'required' : required,
                'regEx': '',
                'fieldTypeName': fieldtype
            }
            $scope.form.fields.push(newField);
            
        }

        $scope.addEmail = function (form, subject, from, to, toProperty, template) {

            var newEmail = {
                'formId': form.Id,
                'subject': subject,
                'from': from,
                'to': to,
                'toProperty': toProperty,
                'template': template == null ? $scope.emailTemplates[0] : template,
            }
            $scope.form.emails.push(newEmail);

        }
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

      
        $scope.supportsPlaceholder = function (fieldTypeName) {
            if (fieldTypeName == undefined) return false;

            return _.findWhere($scope.fieldtypes, { Name: fieldTypeName }).SupportsPlaceholder;

        }

        $scope.supportsOptions = function(fieldTypeName)
        {
           return  _.findWhere($scope.fieldtypes, { Name: fieldTypeName }).SupportsOptions;
            
        }

        $scope.getSafeFormAlias = function (value) {

            mcFlyResource.getSafeAlias(value).then(function (resp) {
               $scope.form.alias = resp.data.value;

            });
        }

        $scope.getSafeAlias = function (value)
        {

            mcFlyResource.getSafeAlias(value).then(function (resp) {
                $scope.newFieldAlias = resp.data.value;

            });
        }
        $scope.toPropertyFilter = function (field) {
            return field.fieldTypeName == "Email";
        };

        $scope.save = function (form) {
            mcFlyResource.save(form).then(function (response) {
                $scope.form = response.data;
                $scope.formForm.$dirty = false;
                navigationService.syncTree({ tree: 'mcFly', path: [-1, -1], forceReload: true });
                notificationsService.success("Success", form.name + " has been saved");
            });
        };


    });