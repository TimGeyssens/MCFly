angular.module("umbraco")
    .controller("MCFly.FormDesigner.Emails.Controller",
    function ($scope, mcFlyResource,dialogService) {
       


    mcFlyResource.getFormBuilderData().then(function (resp) {
                $scope.fieldtypes = resp.data.FieldTypes;
                $scope.emailTemplates = resp.data.EmailTemplates;

    });

    $scope.newEmailContents = {};

    $scope.defaultRteConfig = {
        label: 'bodyText',
        description: 'Load some stuff here',
        view: 'rte',
        config: {
            editor: {
                toolbar: ["code", "undo", "redo", "cut", "bold", "italic", "alignleft", "aligncenter", "alignright", "bullist", "numlist", "link", "umbmediapicker", "table", "umbembeddialog", "pluginName"],
                stylesheets: [],
                dimensions: { height: 300, width: 500 }
            }
        }
    };

     $scope.addEmail = function (subject, content, from, to, toProperty, template) {

            var newEmail = {
                'formId': $scope.model.Id,
                'subject': subject,
                'content': content.value,
                'from': from,
                'to': to,
                'toProperty': toProperty,
                'template': template == null ? $scope.emailTemplates[0] : template,
            }
            $scope.model.emails.push(newEmail);

        }
   
    });