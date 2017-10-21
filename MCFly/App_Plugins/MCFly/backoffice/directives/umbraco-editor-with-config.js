angular.module("umbraco.directives").directive('umbEditorWithConfig', function () {
    return {
        restrict: 'E',
        scope: {
            config: '=config',
            model: '=model'
        },
        link: function (scope, element) {
            var isEmpty = typeof (scope.model) == "undefined" || typeof (scope.model.value) == "undefined";
            console.log(isEmpty);

            if (isEmpty) {
                scope.model = scope.config;
            } else {
                var originalValue = scope.model.value;
                console.log(originalValue);

                scope.model = scope.config;
                scope.model.value = originalValue;
            }
        },
        template: '<umb-editor model="model"></umb-editor>'
    };
});