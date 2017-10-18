(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

////////////////////////////////////////
// Functions that create html el
function fieldId(field) {
    return 'field-' + field.randomId;
}

function setGlobalInputAttributes(field, el, options) {
    options = angular.extend({
        // When set to true, this element will get the "form-control" class.
        formControl: true,
        disableAutocomplete: true,
        bindToFieldModel: true
    }, options);

    el.attr('id', fieldId(field));
    el.attr('name', 'field_' + field.id);
    el.attr('aria-label', field.label);
    el.addClass('formulate__control');

    if (options.bindToFieldModel) {
        el.attr('ng-model', 'ctrl.fieldModels[\'' + field.id + '\']');
        el.attr('formulate-validation', true);
    }

    if (options.formControl) {
        el.addClass('form-control');
    }

    if (options.disableAutocomplete) {
        el.attr('autocomplete', 'off');
    }

    return el;
}


function createSelectField(field, options) {
    var wrapper = angular.element('<div class="formulate__select-wrap"></div>');
    var el = angular.element('<select></select>');

    el.attr('ng-options', "item.value as item.label for item in fieldCtrl.configuration.items");

    // Create empty option that serves as placeholder
    if (options.firstSelectOptionLabel) {
        el.append('<option value="">' + field.label + '</option>');
    }

    setGlobalInputAttributes(field, el, {
        disableAutocomplete: false
    });

    wrapper.append(el);

    return wrapper;
}
module.exports.createSelectField = createSelectField;


function createRadioListField(field) {
    var el = angular.element('<div></div>');
    var widgetLabel = angular.element('<label class="formulate__field-label" ng-bind="fieldCtrl.label"></label>');

    var wrapper = angular.element('<div class="formulate__field__item radio" ng-repeat="item in fieldCtrl.configuration.items" ng-class="\'formulate__field__item--\' + fieldCtrl.configuration.orientation"></div>');
    var label = angular.element('<label></label>');
    var input = angular.element('<input type="radio" ng-value="item.value" />');
    var span = angular.element('<span ng-bind="item.label"></span>');

    // Append input/text span.
    label.append(input);
    label.append(span);
    wrapper.append(label);

    input.attr('name', 'field_' + field.id);
    input.attr('ng-model', 'ctrl.fieldModels[\'' + field.id + '\']');
    input.attr('formulate-validation', true);

    el.append(widgetLabel);
    el.append(wrapper);

    return el;
}
module.exports.createRadioListField = createRadioListField;


function createExtendedRadioListField(field) {
    var el = angular.element('<div></div>');
    var widgetLabel = angular.element('<label class="formulate__field-label" ng-bind="fieldCtrl.label"></label>');

    var wrapper = angular.element('<div class="formulate__field__item radio" ng-repeat="item in fieldCtrl.configuration.items"></div>');
    var label = angular.element('<label></label>');
    var input = angular.element('<input type="radio" ng-value="item.primary" />');
    var span = angular.element('<span ng-bind="item.primary"></span>');
    var desc = angular.element('<div class="formulate__field__desc" ng-bind="item.secondary"></div>');

    // Append input/text span.
    label.append(input);
    label.append(span);
    wrapper.append(label);
    wrapper.append(desc);

    input.attr('name', 'field_' + field.id);
    input.attr('ng-model', 'ctrl.fieldModels[\'' + field.id + '\']');
    input.attr('formulate-validation', true);

    el.append(widgetLabel);
    el.append(wrapper);

    return el;
}
module.exports.createExtendedRadioListField = createExtendedRadioListField;


function createCheckboxListField(field) {
    var el = angular.element('<div></div>');
    var widgetLabel = angular.element('<label class="formulate__field-label" ng-bind="fieldCtrl.label"></label>');

    var wrapper = angular.element('<div class="formulate__field__item checkbox" ng-repeat="item in fieldCtrl.configuration.items"></div>');
    var label = angular.element('<label></label>');
    var input = angular.element('<input type="checkbox" checklist-value="item.value"/>');
    var span = angular.element('<span ng-bind="item.label"></span>');

    // Append input/text span.
    label.append(input);
    label.append(span);
    wrapper.append(label);

    input.attr('name', 'field_' + field.id);
    input.attr('checklist-model', 'ctrl.fieldModels[\'' + field.id + '\']');

    //TODO: Add custom validation

    el.append(widgetLabel);
    el.append(wrapper);

    return el;
}
module.exports.createCheckboxListField = createCheckboxListField;


function createUploadField() {
    return '<formulate-file-upload></formulate-file-upload>';
}
module.exports.createUploadField = createUploadField;


function createTextField(field, options) {
    var el = angular.element('<input type="text" />');

    if (options.placeholderLabel) {
        el.attr('placeholder', field.label);
    }

    return setGlobalInputAttributes(field, el);
}
module.exports.createTextField = createTextField;


function createTextAreaField(field, options) {
    var el = angular.element('<textarea></textarea>');

    if (options.placeholderLabel) {
        el.attr('placeholder', field.label);
    }

    return setGlobalInputAttributes(field, el);
}
module.exports.createTextAreaField = createTextAreaField;


function createHeaderField() {
    return angular.element('<h2 class="formulate__header" ng-bind="fieldCtrl.configuration.text"></h2>');
}
module.exports.createHeaderField = createHeaderField;


function createRichTextField(field) {
    return field.configuration.text;
}
module.exports.createRichTextField = createRichTextField;


function createButtonField(field) {
    var el = angular.element('<button ng-bind="fieldCtrl.label"></button>');
    var buttonKind = field.configuration.buttonKind;
    var buttonKindCls = buttonKind ? ('formulate__btn--' + buttonKind.toLowerCase()) : 'formulate__btn--default';

    // Form Submit button
    if (buttonKind === 'Submit' || buttonKind === null) {
        el.attr('type', 'submit');
        el.addClass('formulate__btn formulate__btn--submit btn btn-primary');

    } else {
        el.attr('type', 'button');
        el.attr('ng-click', 'ctrl.buttonClicked(fieldCtrl.configuration.buttonKind)');
        el.addClass('formulate__btn btn btn-default ' + buttonKindCls);
    }

    return el;
}
module.exports.createButtonField = createButtonField;


function createCheckboxField(field) {
    var container = angular.element('<div></div>');
    var label = angular.element('<label class="formulate__checkbox-label"></label>');
    var el = angular.element('<input type="checkbox" value="1" />');
    var span = angular.element('<span></span>');

    span.text(field.label);

    label.append(setGlobalInputAttributes(field, el, {
        formControl: false,
        disableAutocomplete: false
    }));
    label.append(span);

    container.addClass('formulate__checkbox');
    container.append(label);

    return container;
}
module.exports.createCheckboxField = createCheckboxField;

function createNullField() {
    return null;
}
module.exports.createNullField = createNullField;


function createDateField(field, options) {
    var el = angular.element('<input type="date" />');

    if (options.placeholderLabel) {
        el.attr('placeholder', field.label);
    }

    return setGlobalInputAttributes(field, el, {
        disableAutocomplete: false
    });
}
module.exports.createDateField = createDateField;

function createRecaptchaField(field) {
    var el = angular.element('<div vc-recaptcha key="fieldCtrl.configuration.key"></div>');

    return setGlobalInputAttributes(field, el, {
        formControl: false,
        disableAutocomplete: false
    });
}
module.exports.createRecaptchaField = createRecaptchaField;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Checklist-model
 * AngularJS directive for list of checkboxes
 * https://github.com/vitalets/checklist-model
 * License: MIT http://opensource.org/licenses/MIT
 */

checklistModelDirective.$inject = ["$parse", "$compile"];
var angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

// Create app
var app = angular.module('formulate');

function checklistModelDirective($parse, $compile) {
    // contains
    function contains(arr, item, comparator) {
        if (angular.isArray(arr)) {
            for (var i = arr.length; i--;) {
                if (comparator(arr[i], item)) {
                    return true;
                }
            }
        }
        return false;
    }

    // add
    function add(arr, item, comparator) {
        arr = angular.isArray(arr) ? arr : [];
        if (!contains(arr, item, comparator)) {
            arr.push(item);
        }
        return arr;
    }

    // remove
    function remove(arr, item, comparator) {
        if (angular.isArray(arr)) {
            for (var i = arr.length; i--;) {
                if (comparator(arr[i], item)) {
                    arr.splice(i, 1);
                    break;
                }
            }
        }
        return arr;
    }

    // http://stackoverflow.com/a/19228302/1458162
    function postLinkFn(scope, elem, attrs) {
        // exclude recursion, but still keep the model
        var checklistModel = attrs.checklistModel;
        attrs.$set("checklistModel", null);
        // compile with `ng-model` pointing to `checked`
        $compile(elem)(scope);
        attrs.$set("checklistModel", checklistModel);

        // getter for original model
        var checklistModelGetter = $parse(checklistModel);
        var checklistChange = $parse(attrs.checklistChange);
        var checklistBeforeChange = $parse(attrs.checklistBeforeChange);
        var ngModelGetter = $parse(attrs.ngModel);


        var comparator = angular.equals;

        if (attrs.hasOwnProperty('checklistComparator')) {
            if (attrs.checklistComparator[0] == '.') {
                var comparatorExpression = attrs.checklistComparator.substring(1);
                comparator = function (a, b) {
                    return a[comparatorExpression] === b[comparatorExpression];
                };

            } else {
                comparator = $parse(attrs.checklistComparator)(scope.$parent);
            }
        }

        // watch UI checked change
        var unbindModel = scope.$watch(attrs.ngModel, function (newValue, oldValue) {
            if (newValue === oldValue) {
                return;
            }

            if (checklistBeforeChange && (checklistBeforeChange(scope) === false)) {
                ngModelGetter.assign(scope, contains(checklistModelGetter(scope.$parent), getChecklistValue(), comparator));
                return;
            }

            setValueInChecklistModel(getChecklistValue(), newValue);

            if (checklistChange) {
                checklistChange(scope);
            }
        });

        // watches for value change of checklistValue
        var unbindCheckListValue = scope.$watch(getChecklistValue, function (newValue, oldValue) {
            if (newValue != oldValue && angular.isDefined(oldValue) && scope[attrs.ngModel] === true) {
                var current = checklistModelGetter(scope.$parent);
                checklistModelGetter.assign(scope.$parent, remove(current, oldValue, comparator));
                checklistModelGetter.assign(scope.$parent, add(current, newValue, comparator));
            }
        }, true);

        var unbindDestroy = scope.$on('$destroy', destroy);

        function destroy() {
            unbindModel();
            unbindCheckListValue();
            unbindDestroy();
        }

        function getChecklistValue() {
            return attrs.checklistValue ? $parse(attrs.checklistValue)(scope.$parent) : attrs.value;
        }

        function setValueInChecklistModel(value, checked) {
            var current = checklistModelGetter(scope.$parent);
            if (angular.isFunction(checklistModelGetter.assign)) {
                if (checked === true) {
                    checklistModelGetter.assign(scope.$parent, add(current, value, comparator));
                } else {
                    checklistModelGetter.assign(scope.$parent, remove(current, value, comparator));
                }
            }

        }

        // declare one function to be used for both $watch functions
        function setChecked(newArr, oldArr) {
            if (checklistBeforeChange && (checklistBeforeChange(scope) === false)) {
                setValueInChecklistModel(getChecklistValue(), ngModelGetter(scope));
                return;
            }
            ngModelGetter.assign(scope, contains(newArr, getChecklistValue(), comparator));
        }

        // watch original model change
        // use the faster $watchCollection method if it's available
        if (angular.isFunction(scope.$parent.$watchCollection)) {
            scope.$parent.$watchCollection(checklistModel, setChecked);
        } else {
            scope.$parent.$watch(checklistModel, setChecked, true);
        }
    }

    return {
        restrict: 'A',
        priority: 1000,
        terminal: true,
        scope: true,
        compile: function (tElement, tAttrs) {

            if (!tAttrs.checklistValue && !tAttrs.value) {
                throw 'You should provide `value` or `checklist-value`.';
            }

            // by default ngModel is 'checked', so we set it if not specified
            if (!tAttrs.ngModel) {
                // local scope var storing individual checkbox model
                tAttrs.$set("ngModel", "checked");
            }

            return postLinkFn;
        }
    };
}
app.directive('checklistModel', checklistModelDirective);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
(function (global){
'use strict';

FormulateFieldController.$inject = ["field"];
formulateField.$inject = ["$compile", "$controller", "FormulateFieldTypes"];
var angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var app = angular.module('formulate');

/**
 * @description Field controller
 * @param field
 * @constructor
 */
function FormulateFieldController(field) {
    angular.extend(this, field);
}
app.controller('FormulateFieldController', FormulateFieldController);

/**
 * @description Angular directive that is responsible for rendering input field
 * @param $compile
 * @param $controller
 *
 * @returns DDO (Directive Definition Object)
 */
function formulateField($compile, $controller, FormulateFieldTypes) {
    function link(scope, el, attr, ctrls) {
        var ctrl     = ctrls[0];
        var formCtrl = ctrls[1];

        var field = ctrl.getFieldById(attr.fieldId);
        var elField = FormulateFieldTypes.createField(field);

        // Exclude null/hidden fields
        if (elField !== null) {
            var inputs = {
                $scope: scope,
                $element: elField,
                field: field
            };

            // Attach main controller
            scope.ctrl = ctrl;
            scope.formCtrl = formCtrl;

            $controller('FormulateFieldController as fieldCtrl', inputs);

            el.append(elField);

            $compile(elField)(scope);
        }
    }

    return {
        restrict: "E",
        replace: true,
        template: '<div ng-class="\'formulate__field--\' + fieldCtrl.fieldType"></div>',
        require: ['^^formulateResponsiveForm', '^^form'],

        link: link,
        scope: {}
    };
}
app.directive('formulateField', formulateField);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
(function (global){
'use strict';

// Dependencies.
var angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

// App.
var app = angular.module('formulate');

// Directive: http://plnkr.co/edit/JYX3Pcq18gH3ol5XSizw?p=preview
function directive() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function link(scope, element, attrs, ctrl) {
            /*jslint unparam:true */

            // Handle change event.
            function onChange() {
                // Set the model to the file.
                ctrl.$setViewValue(element[0].files[0]);
            }

            // Listen for change events.
            element.on('change', onChange);

            // When the directive is destroyed, stop listening to changes.
            scope.$on('destroy', function () {
                element.off('change', onChange);
            });
        }
    };
}
app.directive('formulateFileChange', directive);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
(function (global){
'use strict';

// Dependencies.
FormulateFileUploadController.$inject = ["$scope"];
var angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

// App.
var app = angular.module('formulate');

// Controller.
function FormulateFileUploadController($scope) {
    // This is a trick to force Angular to render the file input again (thereby clearing the selection).
    this.uploadResetList = [{}];

    // Clears the upload selection.
    this.clearSelection = function () {
        // This is a trick to force Angular to render the file input again (thereby clearing the selection).
        this.uploadResetList = [{}];

        if ($scope.ctrl && $scope.ctrl.fieldModels && $scope.fieldCtrl) {
            $scope.ctrl.fieldModels[$scope.fieldCtrl.id] = null;
        }
    };
}

// Directive.
function formulateFileUpload() {
    return {
        restrict: "E",
        replace: true,

        controller: FormulateFileUploadController,
        controllerAs: "uploadCtrl",
        bindToController: true,

        template: '<div class="formulate__file-upload">' +
                '<div ng-repeat="uploadItem in uploadCtrl.uploadResetList">' +
                '<!-- Can be styled with this approach: https://www.abeautifulsite.net/whipping-file-inputs-into-shape-with-bootstrap-3 -->' +
                '<!-- TLDR: Hide the file input, and make the label look like a button. -->' +
                    '<label class="formulate__file-upload-button">' +
                        '<input name="field_{{fieldCtrl.id}}" class="formulate__file-upload-input" type="file" formulate-file-change ng-model="ctrl.fieldModels[fieldCtrl.id]" formulate-validation />' +
                        '<span class="formulate__file-upload-button-text" ng-bind="fieldCtrl.label"></span>' +
                    '</label>' +

                    '<span class="formulate__file-upload-filename" ng-bind="ctrl.fieldModels[fieldCtrl.id].name"></span>' +

                    '<a href class="formulate__file-upload-clear" ng-if="ctrl.fieldModels[fieldCtrl.id].name" ng-click="uploadCtrl.clearSelection()">' +
                        '<span class="formulate__file-upload-clear--inner">Clear Selection</span>' +
                    '</a>' +
                '</div>' +
            '</div>'
    };
}
app.directive("formulateFileUpload", formulateFileUpload);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],6:[function(require,module,exports){
(function (global){
'use strict';

FormulateSubmitService.$inject = ["$http", "$q", "$window"];
FormulateController.$inject = ["$rootScope", "$scope", "$element", "$window", "FormulateSubmitService"];
var angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var app = angular.module('formulate');

/**
 * Service responsible for ajax-post
 *
 * @constructor
 */
function FormulateSubmitService($http, $q, $window) {
    ////////////////////////////////////////
    // Handle Post
    function submitPost(data) {
        return $http({
            method: 'POST',
            url: data.url,
            data: data.postData,
            headers: {
                'Content-Type': undefined
            },
            transformRequest: function (obj) {
                // Convert to FormData: http://stackoverflow.com/a/25264008/2052963
                // This is necessary for file uploads to submit properly via AJAX.
                var formData = new $window.FormData();

                angular.forEach(obj, function (value, key) {
                    if (angular.isArray(value)) {
                        value.forEach(function (itemVal) {
                            formData.append(key, itemVal);
                        });

                        // Skip over null/undefined so they don't get sent as serialized version.
                    } else if (value !== undefined && value !== null) {
                        formData.append(key, value);
                    }
                });

                return formData;
            }
        });
    }

    function parseResponse(response) {
        var deferred = $q.defer();

        if (response.data && response.data.Success === true) {
            deferred.resolve(response);
        } else {
            deferred.reject(response.message);
        }

        return deferred.promise;
    }

    this.post = function (data, $scope) {
        function postSuccess(response) {
            $scope.$emit('Formulate.formSubmit.OK', {
                fields: data.postData,
                name: data.name,
                response: response.data
            });
        }

        function postFailed(message) {
            $scope.$emit('Formulate.formSubmit.Failed', {
                fields: data.postData,
                name: data.name,
                message: message
            });
        }

        submitPost(data)
            .then(parseResponse)
            .then(postSuccess, postFailed);
    };
}
app.service('FormulateSubmitService', FormulateSubmitService);

/**
 * @description Generate unique form names
 */
var genFormName = (function () {
    var counter = 0;

    return function () {
        counter += 1;

        return 'form' + counter;
    };
}());

/**
 *
 * Returns a callback which in turn returns a bool that indicates render state of a given field (referenced by fieldId)
 *
 * Sample conditional data structure:
 * Field A controls display of fields B, C, D;
 * "conditionalControls": [
 *     {
 *         "fieldId": "A",
 *         "show": "Yes",
 *         "fields": ["B", "C", "D"]
 *     }
 * ]
 *
 * When field(Id: A) === "Yes" then callback for B, C, D will return true; otherwise false
 *
 *
 *
 * @param conditionalControls
 * @param fieldModels
 * @returns {show}
 */
function showConditionalFields(conditionalControls, fieldModels) {
    var condMap = {};
    var fieldMap = {};

    function show(id) {
        return function () {
            return condMap[id].show === fieldModels[id];
        };
    }

    function execCallback(fn) {
        return fn();
    }

    function addConditionalControl(item) {
        condMap[item.fieldId] = item;

        function pushFieldCallback(fieldId) {
            if (!fieldMap.hasOwnProperty(fieldId)) {
                fieldMap[fieldId] = [];
            }

            fieldMap[fieldId].push(show(item.fieldId));
        }

        item.fields.forEach(pushFieldCallback);
    }

    if (angular.isArray(conditionalControls)) {
        conditionalControls.forEach(addConditionalControl);
    }

    /**
     * Returns bool whether to show input control (field)
     */
    return function (fieldId) {
        if (fieldMap.hasOwnProperty(fieldId)) {
            return fieldMap[fieldId].every(execCallback);
        }

        return true;
    };
}

function FormulateController($rootScope, $scope, $element, $window, FormulateSubmitService) {
    var self = this;

    // Set reference to injected object to be used in prototype functions
    this.injected = {
        $rootScope: $rootScope,
        $scope: $scope,
        $element: $element,
        $window: $window,
        FormulateSubmitService: FormulateSubmitService
    };

    // set unique form name
    this.generatedName = genFormName();

    function handleSubmitEvent($event, data) {
        if ($event.targetScope === $scope && !$event.defaultPrevented) {
            FormulateSubmitService.post(data, self.injected.$scope);
        }
    }

    // Map Fields for faster access
    this.fieldMap = {};
    this.formData.fields.forEach(function (field) {
        self.fieldMap[field.id] = field;
    });

    // ng-model of fields
    this.fieldModels = {};

    // Set initial values.
    this.formData.fields.forEach(function (field) {
        var initialValue = field.initialValue;

        if (field.initialValue !== undefined && field.initialValue !== null) {
            self.fieldModels[field.id] = initialValue;
        }
    });

    // Show conditional fields
    this.showField = showConditionalFields(this.formData.conditionalControls, this.fieldModels);

    ////////////////////////////////////////
    // Bind later - this is to allow consumers to intercept event on $rootScope
    var removeSubmitHandler = null;
    var timeout = $window.setTimeout(function () {
        removeSubmitHandler = $rootScope.$on('Formulate.submit', handleSubmitEvent);
    }, 40);

    // Clean up pending requests
    function onDestroy() {
        if (removeSubmitHandler) {
            removeSubmitHandler();
        }
        $window.clearTimeout(timeout);

        self.injected = null;
        self.fieldMap = null;
        self.formData = null;
        self.fieldModels = null;
        self.showField = null;
    }

    $scope.$on('$destroy', onDestroy);
}

FormulateController.prototype.getFieldById = function (id) {
    return this.fieldMap[id];
};

FormulateController.prototype.submit = function () {
    var invalidEl;
    var formEl = this.injected.$element.find('form');
    var formCtrl = formEl.controller('form');

    if (formCtrl.$valid) {
        var data = {
            name: this.formData.name,
            url: this.formData.url,
            postData: angular.extend({}, this.formData.payload, this.fieldModels)
        };

        this
            .injected
            .$scope
            .$emit('Formulate.submit', data);

    } else {
        invalidEl = formEl.find(':input.ng-invalid');

        // Scroll to first invalid field
        if (invalidEl.length > 0) {
            invalidEl[0].focus();
        }
    }
};

/**
 *
 * @param $event
 * @param buttonKind
 */
FormulateController.prototype.buttonClicked = function (buttonKind) {
    if (buttonKind !== null) {
        this.injected.$scope.$emit('Formulate.buttonClicked', buttonKind);
    }
};

function formulate() {
    return {
        restrict: "E",
        replace: true,
        template: '<div class="formulate-container">' +
                '<form data-ng-submit="ctrl.submit(ctrl.generatedName)" class="form" name="{{ctrl.generatedName}}">' +
                    '<formulate-rows></formulate-rows>' +
                '</form>' +
            '</div>',

        controller: FormulateController,
        controllerAs: "ctrl",
        bindToController: true,

        scope: {
            formData: '='
        }
    };
}
app.directive('formulateResponsiveForm', formulate);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],7:[function(require,module,exports){
(function (global){
'use strict';

var angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var app = angular.module('formulate');

function FormulateRowController() {
    return this;
}

FormulateRowController.prototype.getColClass = function (cell) {
    return 'col-md-' + (cell.columns || '12');
};

function formulateRows() {
    return {
        restrict: "E",
        replace: true,
        template: '<div>' +
                '<div class="row ib top" ng-repeat="row in ctrl.formData.rows">' +
                    '<div class="col-xs-12" ng-class="layoutCtrl.getColClass(cell)" ng-repeat="cell in row.cells">' +
                        '<div ng-repeat="field in cell.fields track by field.id">' +
                            '<formulate-field ng-if="ctrl.showField(field.id)" class="formulate__field" field-id="{{field.id}}"></formulate-field>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>',

        controller: FormulateRowController,
        controllerAs: 'layoutCtrl',

        // Need access to parent
        scope: true
    };
}
app.directive('formulateRows', formulateRows);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],8:[function(require,module,exports){
(function (global){
'use strict';

var angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var app = angular.module('formulate');

/**
 * @description regular expressing validator for angularjs ngModel $validator object
 *
 *
 * @param validation
 * @returns {Function} accepts value to validate
 *
 */
function regexValidation(validation) {
    var regex = new RegExp(validation.configuration.pattern);

    return function (value) {
        return regex.test(value || "");
    };
}

function mandatoryValidation() {
    return function (value) {
        if (angular.isArray(value)) {
            return value.length > 0;
        }

        return !!value;
    };
}

function validationFactory(validation) {
    switch (validation.validationType) {
    case 'regex':
        return regexValidation(validation);
    default:
        return mandatoryValidation();
    }
}
app.factory('formulateValidationFactory', function () {
    return {
        getInstance: validationFactory
    };
});

function formulateValidation() {
    /*jslint unparam: true */
    function link(scope, el, attrs, ctrls) {
        var ngModelCtrl = ctrls[0];
        var formCtrl = ctrls[1];
        var fieldCtrl = scope.fieldCtrl;

        function setValidation(validation) {
            ngModelCtrl.$validators[validation.id] = validationFactory(validation);
        }

        // Setup validations
        if (angular.isArray(fieldCtrl.validations)) {
            fieldCtrl.validations.forEach(setValidation);
        }

        // Register form control
        formCtrl.$addControl(ngModelCtrl);
    }

    return {
        restrict: 'A',
        require: ['ngModel', '^^form'],
        link: link
    };
}
app.directive('formulateValidation', formulateValidation);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],9:[function(require,module,exports){
(function (global){
'use strict';

JsonSourceCtrl.$inject = ["$attrs"];
var angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);
var lodash = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);

var app = angular.module('formulate');

function JsonSourceCtrl($attrs) {
    var data = JSON.parse($attrs.source);

    // Parse Json Source
    lodash.assign(this, data);
}

function jsonSource() {
    /*jslint unparam: true */
    function link(scope, el, attr, ctrl, transclude) {
        transclude(scope, el.replaceWith.bind(el));
    }

    return {
        restrict: 'E',
        replace: true,
        template: '<div></div>',

        controller: JsonSourceCtrl,
        controllerAs: "ctrl",
        bindToController: true,

        transclude: true,
        link: link,
        scope: {}
    };
}
app.directive('formulateJsonSource', jsonSource);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],10:[function(require,module,exports){
(function (global){
'use strict';

var angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);
var ngRecaptcha = require('angular-recaptcha');
var builtinTypes = require('./builtin-types');

// Create app
var app = angular.module('formulate', ['ngMessages', 'vcRecaptcha']);

// Include all services and directives.
require('./services/field-type.js');
require('./directives/form/checklist-model.js');require('./directives/form/field.js');require('./directives/form/fileChange.js');require('./directives/form/fileUpload.js');require('./directives/form/responsiveForm.js');require('./directives/form/rows.js');require('./directives/form/validation.js');require('./directives/json-source/json-source.js');

// Register built-in types
app.config(['FormulateFieldTypesProvider', function (FormulateFieldTypesProvider) {
    FormulateFieldTypesProvider
        .register('select', builtinTypes.createSelectField)
        .register('radio-list', builtinTypes.createRadioListField, {optionalLabel: false})
        .register('extended-radio-list', builtinTypes.createExtendedRadioListField, {optionalLabel: false})
        .register('checkbox-list', builtinTypes.createCheckboxListField, {optionalLabel: false})
        .register('button', builtinTypes.createButtonField, {optionalLabel: false})
        .register('textarea', builtinTypes.createTextAreaField)
        .register('checkbox', builtinTypes.createCheckboxField, {optionalLabel: false})
        .register('upload', builtinTypes.createUploadField, {optionalLabel: false})
        .register('header', builtinTypes.createHeaderField, {optionalLabel: false})
        .register('rich-text', builtinTypes.createRichTextField, {optionalLabel: false})
        .register('hidden', builtinTypes.createNullField, {optionalLabel: false})
        .register('DateField', builtinTypes.createDateField)
        .register('recaptcha', builtinTypes.createRecaptchaField, {optionallabel: false})
        .setDefault(builtinTypes.createTextField);
}]);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./builtin-types":1,"./directives/form/checklist-model.js":2,"./directives/form/field.js":3,"./directives/form/fileChange.js":4,"./directives/form/fileUpload.js":5,"./directives/form/responsiveForm.js":6,"./directives/form/rows.js":7,"./directives/form/validation.js":8,"./directives/json-source/json-source.js":9,"./services/field-type.js":11,"angular-recaptcha":12}],11:[function(require,module,exports){
(function (global){
'use strict';

var angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var app = angular.module('formulate');

function fieldId(field) {
    return 'field-' + field.randomId;
}

function addLabel(field) {
    /*global document */
    var contents = angular.element(document.createTextNode(field.label));
    var label = angular.element('<label class="formulate__field-label"></label>');

    label.append(contents);
    label.attr('for', fieldId(field));

    return label;
}

function addNgMessages(field) {
    var elMessages = null;
    var fieldName = 'formCtrl.field_' + field.id;

    if (angular.isArray(field.validations) && field.validations.length > 0) {
        elMessages = angular.element('<div></div>');
        elMessages.attr('ng-messages', fieldName + '.$error');

        // Show only when the following states apply
        elMessages.attr('ng-show', 'formCtrl.$submitted || ' + fieldName + '.$touched');

        elMessages.attr('role', 'alert');

        field.validations.forEach(function (validation) {
            var elMessage = angular.element('<div></div>');

            elMessage.attr('ng-message', validation.id);
            elMessage.text(validation.configuration.message);
            elMessage.addClass('formulate__error-msg');

            elMessages.append(elMessage);
        });
    }

    return elMessages;
}

/**
 *
 * Registers field rendering factories - used by formulateField to render form field
 *
 * Please Note: fields are registered globally; Hence, you cannot have different field types per different
 *              instances of formulate.
 *
 * @constructor
 */
function FormulateFieldTypesProvider() {
    // Pre-register builtin types
    var fieldTypes = {};
    var prependLabel = {};

    var options = {
        prependLabel: true,
        placeholderLabel: true,
        firstSelectOptionLabel: true
    };

    var fieldOptions = {
        optionalLabel: true
    };

    function fieldFactory(tmpl) {
        return function () {
            return angular.element(tmpl);
        };
    }

    /**
     *
     * Register field
     *
     * @param fieldType
     * @param fieldTemplate
     * @param fieldOption configuration object; Properties => optionalLabel: true (allow for label to be inserted before the field)
     *
     * @returns {FormulateFieldTypesProvider}
     */
    this.register = function (fieldType, fieldTemplate, pOptions) {
        var opt = angular.extend({}, fieldOptions, pOptions);

        fieldTypes[fieldType] = angular.isString(fieldTemplate) ? fieldFactory(fieldTemplate) : fieldTemplate;

        prependLabel[fieldType] = opt.optionalLabel;

        return this;
    };

    /**
     * Register default field
     *
     * @param fieldTemplate
     * @param addLabel bool add label before the field
     * @returns {FormulateFieldTypesProvider}
     */
    this.setDefault = function (fieldTemplate, pOptions) {
        var opt = angular.extend({}, fieldOptions, pOptions);

        fieldTypes.defaultField = angular.isString(fieldTemplate) ? fieldFactory(fieldTemplate) : fieldTemplate;

        prependLabel.defaultField = opt.optionalLabel;

        return this;
    };

    /**
     * Set generic options
     *
     * Possible Options:
     *  prependLabel: true - Prepend Label Before the field
     *  placeholderLabel: true - Place Label into Placeholder
     *  firstSelectOptionLabel: true - Set Label as the very first option to select(dropdown) with an empty value
     *
     * @param opt
     */
    this.setOptions = function (pOptions) {
        angular.extend(options, pOptions);

        return this;
    };

    this.$get = function () {
        return {
            createField: function (field) {
                var elWrap = angular.element('<div></div>');

                elWrap.addClass('formulate__group form-group');

                // Append label
                if (fieldTypes.hasOwnProperty(field.fieldType)) {
                    if (options.prependLabel && prependLabel[field.fieldType]) {
                        elWrap.append(addLabel(field));
                    }
                } else {
                    if (options.prependLabel && prependLabel.defaultField) {
                        elWrap.append(addLabel(field));
                    }
                }

                if (fieldTypes.hasOwnProperty(field.fieldType)) {
                    elWrap.append(fieldTypes[field.fieldType](field, options));
                } else {
                    elWrap.append(fieldTypes.defaultField(field, options));
                }

                elWrap.append(addNgMessages(field));

                return elWrap;
            }
        };
    };
}
app.provider('FormulateFieldTypes', FormulateFieldTypesProvider);



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],12:[function(require,module,exports){
require('./release/angular-recaptcha.js');
module.exports = 'vcRecaptcha';

},{"./release/angular-recaptcha.js":13}],13:[function(require,module,exports){
/**
 * @license angular-recaptcha build:2017-04-24
 * https://github.com/vividcortex/angular-recaptcha
 * Copyright (c) 2017 VividCortex
**/

/*global angular, Recaptcha */
(function (ng) {
    'use strict';

    ng.module('vcRecaptcha', []);

}(angular));

/*global angular */
(function (ng) {
    'use strict';

    function throwNoKeyException() {
        throw new Error('You need to set the "key" attribute to your public reCaptcha key. If you don\'t have a key, please get one from https://www.google.com/recaptcha/admin/create');
    }

    var app = ng.module('vcRecaptcha');

    /**
     * An angular service to wrap the reCaptcha API
     */
    app.provider('vcRecaptchaService', function(){
        var provider = this;
        var config = {};
        provider.onLoadFunctionName = 'vcRecaptchaApiLoaded';

        /**
         * Sets the reCaptcha configuration values which will be used by default is not specified in a specific directive instance.
         *
         * @since 2.5.0
         * @param defaults  object which overrides the current defaults object.
         */
        provider.setDefaults = function(defaults){
            ng.copy(defaults, config);
        };

        /**
         * Sets the reCaptcha key which will be used by default is not specified in a specific directive instance.
         *
         * @since 2.5.0
         * @param siteKey  the reCaptcha public key (refer to the README file if you don't know what this is).
         */
        provider.setSiteKey = function(siteKey){
            config.key = siteKey;
        };

        /**
         * Sets the reCaptcha theme which will be used by default is not specified in a specific directive instance.
         *
         * @since 2.5.0
         * @param theme  The reCaptcha theme.
         */
        provider.setTheme = function(theme){
            config.theme = theme;
        };

        /**
         * Sets the reCaptcha stoken which will be used by default is not specified in a specific directive instance.
         *
         * @since 2.5.0
         * @param stoken  The reCaptcha stoken.
         */
        provider.setStoken = function(stoken){
            config.stoken = stoken;
        };

        /**
         * Sets the reCaptcha size which will be used by default is not specified in a specific directive instance.
         *
         * @since 2.5.0
         * @param size  The reCaptcha size.
         */
        provider.setSize = function(size){
            config.size = size;
        };

        /**
         * Sets the reCaptcha type which will be used by default is not specified in a specific directive instance.
         *
         * @since 2.5.0
         * @param type  The reCaptcha type.
         */
        provider.setType = function(type){
            config.type = type;
        };

        /**
         * Sets the reCaptcha language which will be used by default is not specified in a specific directive instance.
         *
         * @param lang  The reCaptcha language.
         */
        provider.setLang = function(lang){
            config.lang = lang;
        };

        /**
         * Sets the reCaptcha badge position which will be used by default if not specified in a specific directive instance.
         *
         * @param badge  The reCaptcha badge position.
         */
        provider.setBadge = function(badge){
            config.badge = badge;
        };

        /**
         * Sets the reCaptcha configuration values which will be used by default is not specified in a specific directive instance.
         *
         * @since 2.5.0
         * @param onLoadFunctionName  string name which overrides the name of the onload function. Should match what is in the recaptcha script querystring onload value.
         */
        provider.setOnLoadFunctionName = function(onLoadFunctionName){
            provider.onLoadFunctionName = onLoadFunctionName;
        };

        provider.$get = ['$rootScope','$window', '$q', '$document', function ($rootScope, $window, $q, $document) {
            var deferred = $q.defer(), promise = deferred.promise, instances = {}, recaptcha;

            $window.vcRecaptchaApiLoadedCallback = $window.vcRecaptchaApiLoadedCallback || [];

            var callback = function () {
                recaptcha = $window.grecaptcha;

                deferred.resolve(recaptcha);
            };

            $window.vcRecaptchaApiLoadedCallback.push(callback);

            $window[provider.onLoadFunctionName] = function () {
                $window.vcRecaptchaApiLoadedCallback.forEach(function(callback) {
                    callback();
                });
            };


            function getRecaptcha() {
                if (!!recaptcha) {
                    return $q.when(recaptcha);
                }

                return promise;
            }

            function validateRecaptchaInstance() {
                if (!recaptcha) {
                    throw new Error('reCaptcha has not been loaded yet.');
                }
            }


            // Check if grecaptcha is not defined already.
            if (ng.isDefined($window.grecaptcha)) {
                callback();
            } else {
                // Generate link on demand
                var script = $window.document.createElement('script');
                script.async = true;
                script.defer = true;
                script.src = 'https://www.google.com/recaptcha/api.js?onload='+provider.onLoadFunctionName+'&render=explicit';
                $document.find('body').append(script);
            }

            return {

                /**
                 * Creates a new reCaptcha object
                 *
                 * @param elm  the DOM element where to put the captcha
                 * @param conf the captcha object configuration
                 * @throws NoKeyException    if no key is provided in the provider config or the directive instance (via attribute)
                 */
                create: function (elm, conf) {

                    conf.sitekey = conf.key || config.key;
                    conf.theme = conf.theme || config.theme;
                    conf.stoken = conf.stoken || config.stoken;
                    conf.size = conf.size || config.size;
                    conf.type = conf.type || config.type;
                    conf.hl = conf.lang || config.lang;
                    conf.badge = conf.badge || config.badge;

                    if (!conf.sitekey || conf.sitekey.length !== 40) {
                        throwNoKeyException();
                    }
                    return getRecaptcha().then(function (recaptcha) {
                        var widgetId = recaptcha.render(elm, conf);
                        instances[widgetId] = elm;
                        return widgetId;
                    });
                },

                /**
                 * Reloads the reCaptcha
                 */
                reload: function (widgetId) {
                    validateRecaptchaInstance();

                    recaptcha.reset(widgetId);

                    // Let everyone know this widget has been reset.
                    $rootScope.$broadcast('reCaptchaReset', widgetId);
                },

                /**
                 * Executes the reCaptcha
                 */
                execute: function (widgetId) {
                    validateRecaptchaInstance();

                    recaptcha.execute(widgetId);
                },

                /**
                 * Get/Set reCaptcha language
                 */
                useLang: function (widgetId, lang) {
                    var instance = instances[widgetId];

                    if (instance) {
                        var iframe = instance.querySelector('iframe');
                        if (lang) {
                            // Setter
                            if (iframe && iframe.src) {
                                var s = iframe.src;
                                if (/[?&]hl=/.test(s)) {
                                    s = s.replace(/([?&]hl=)\w+/, '$1' + lang);
                                } else {
                                    s += ((s.indexOf('?') === -1) ? '?' : '&') + 'hl=' + lang;
                                }

                                iframe.src = s;
                            }
                        } else {
                            // Getter
                            if (iframe && iframe.src && /[?&]hl=\w+/.test(iframe.src)) {
                                return iframe.src.replace(/.+[?&]hl=(\w+)([^\w].+)?/, '$1');
                            } else {
                                return null;
                            }
                        }
                    } else {
                        throw new Error('reCaptcha Widget ID not exists', widgetId);
                    }
                },

                /**
                 * Gets the response from the reCaptcha widget.
                 *
                 * @see https://developers.google.com/recaptcha/docs/display#js_api
                 *
                 * @returns {String}
                 */
                getResponse: function (widgetId) {
                    validateRecaptchaInstance();

                    return recaptcha.getResponse(widgetId);
                },

                /**
                 * Gets reCaptcha instance and configuration
                 */
                getInstance: function (widgetId) {
                    return instances[widgetId];
                },

                /**
                 * Destroy reCaptcha instance.
                 */
                destroy: function (widgetId) {
                    delete instances[widgetId];
                }
            };

        }];
    });

}(angular));

/*global angular, Recaptcha */
(function (ng) {
    'use strict';

    var app = ng.module('vcRecaptcha');

    app.directive('vcRecaptcha', ['$document', '$timeout', 'vcRecaptchaService', function ($document, $timeout, vcRecaptcha) {

        return {
            restrict: 'A',
            require: "?^^form",
            scope: {
                response: '=?ngModel',
                key: '=?',
                stoken: '=?',
                theme: '=?',
                size: '=?',
                type: '=?',
                lang: '=?',
                badge: '=?',
                tabindex: '=?',
                required: '=?',
                onCreate: '&',
                onSuccess: '&',
                onExpire: '&'
            },
            link: function (scope, elm, attrs, ctrl) {
                scope.widgetId = null;

                if(ctrl && ng.isDefined(attrs.required)){
                    scope.$watch('required', validate);
                }

                var removeCreationListener = scope.$watch('key', function (key) {
                    var callback = function (gRecaptchaResponse) {
                        // Safe $apply
                        $timeout(function () {
                            scope.response = gRecaptchaResponse;
                            validate();

                            // Notify about the response availability
                            scope.onSuccess({response: gRecaptchaResponse, widgetId: scope.widgetId});
                        });
                    };

                    vcRecaptcha.create(elm[0], {

                        callback: callback,
                        key: key,
                        stoken: scope.stoken || attrs.stoken || null,
                        theme: scope.theme || attrs.theme || null,
                        type: scope.type || attrs.type || null,
                        lang: scope.lang || attrs.lang || null,
                        tabindex: scope.tabindex || attrs.tabindex || null,
                        size: scope.size || attrs.size || null,
                        badge: scope.badge || attrs.badge || null,
                        'expired-callback': expired

                    }).then(function (widgetId) {
                        // The widget has been created
                        validate();
                        scope.widgetId = widgetId;
                        scope.onCreate({widgetId: widgetId});

                        scope.$on('$destroy', destroy);

                        scope.$on('reCaptchaReset', function(event, resetWidgetId){
                          if(ng.isUndefined(resetWidgetId) || widgetId === resetWidgetId){
                            scope.response = "";
                            validate();
                          }
                        })

                    });

                    // Remove this listener to avoid creating the widget more than once.
                    removeCreationListener();
                });

                function destroy() {
                  if (ctrl) {
                    // reset the validity of the form if we were removed
                    ctrl.$setValidity('recaptcha', null);
                  }

                  cleanup();
                }

                function expired(){
                    // Safe $apply
                    $timeout(function () {
                        scope.response = "";
                        validate();

                        // Notify about the response availability
                        scope.onExpire({ widgetId: scope.widgetId });
                    });
                }

                function validate(){
                    if(ctrl){
                        ctrl.$setValidity('recaptcha', scope.required === false ? null : Boolean(scope.response));
                    }
                }

                function cleanup(){
                  vcRecaptcha.destroy(scope.widgetId);

                  // removes elements reCaptcha added.
                  ng.element($document[0].querySelectorAll('.pls-container')).parent().remove();
                }
            }
        };
    }]);

}(angular));

},{}]},{},[10]);
