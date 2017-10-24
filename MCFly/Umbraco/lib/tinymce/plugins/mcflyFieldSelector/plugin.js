tinymce.PluginManager.add('mcflyFieldSelector', function (editor) {

    function populate(imagePath) {

        var imgData = {
            src: (imagePath) ? imagePath : "nothing.jpg"
        };

        editor.insertContent(editor.dom.createHTML('img', imgData));


    };
    editor.addButton('mcflyFieldSelector', {

        icon: 'custom icon-book-alt',

        tooltip: 'plugin Name',

        onclick: function (e) {
            //get your angular element
            var elem = angular.element(document.querySelector('[ng-controller]'));

            //get the scope.
            var $scope = elem.scope();

            //get the injector.
            var injector = elem.injector();

            //get the services.
            var dialogService = injector.get('dialogService');
            var $routeParams = injector.get('$routeParams');
            var $http = injector.get('$http');

            var id = $routeParams.id;
            $http.get('url to something on the server')
                .then(function (response) {

                    myDialog = dialogService.open({
                        template: "pathtomydialog.html",
                        callback: populate
                    });

                }, function (data) {
                    $log.error(data)
                });
        }

    });
});