(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function () {return directives;};
var directives = {};

directives["configuredFormDesigner/designer.html"] = "<form name=\"formulateConfiguredFormDesigner\" val-form-manager class=\"configured-form-designer\">\n" +
   "    <umb-panel umb-tabs>\n" +
   "        <umb-header tabs=\"info.tabs\">\n" +
   "            <div class=\"span7\">\n" +
   "\n" +
   "                <!-- Configured form name. -->\n" +
   "                <umb-content-name ng-model=\"info.conFormName\"\n" +
   "                                  placeholder=\"@formulate-placeholders_Configured Form Name\">\n" +
   "                </umb-content-name>\n" +
   "\n" +
   "            </div>\n" +
   "        </umb-header>\n" +
   "        <umb-tab-view>\n" +
   "            <umb-tab id=\"tab20\" rel=\"{{20}}\">\n" +
   "\n" +
   "                <!-- Configured form designer. -->\n" +
   "                <div class=\"umb-pane\">\n" +
   "\n" +
   "                    <!-- Introduction. -->\n" +
   "                    <div class=\"row\">\n" +
   "                        <div class=\"span12\">\n" +
   "                            <p>\n" +
   "                                <localize key=\"formulate-introductions_Configured Form\">\n" +
   "                                    A configured form is just a form with a layout and template selected.\n" +
   "                                    To configure this form, select a template and layout below.\n" +
   "                                </localize>\n" +
   "                            </p>\n" +
   "                        </div>\n" +
   "                    </div>\n" +
   "\n" +
   "                    <!-- Template. -->\n" +
   "                    <div class=\"row\">\n" +
   "                        <div class=\"span12\">\n" +
   "                            <select ng-options=\"option.id as option.name for option in template.templates\" ng-model=\"template.id\">\n" +
   "                                <option value=\"\" formulate-inject-localization=\"formulate-options_Select a Template\">\n" +
   "                                </option>\n" +
   "                            </select>\n" +
   "                        </div>\n" +
   "                    </div>\n" +
   "\n" +
   "                    <!-- Layout. -->\n" +
   "                    <div class=\"row\">\n" +
   "                        <div class=\"span12\">\n" +
   "                            <div ng-if=\"layoutId\">\n" +
   "                                <strong>\n" +
   "                                    <localize key=\"formulate-labels_Layout:\">\n" +
   "                                        Layout:\n" +
   "                                    </localize>\n" +
   "                                </strong> {{layoutName}}\n" +
   "                            </div>\n" +
   "                            <div ng-if=\"!layoutId\">\n" +
   "                                <localize key=\"formulate-labels_Layout not chosen\">\n" +
   "                                    Layout not yet chosen.\n" +
   "                                </localize>\n" +
   "                            </div>\n" +
   "                            <div>\n" +
   "                                <button type=\"button\" class=\"btn btn-default\" ng-click=\"pickLayout()\">\n" +
   "                                    <localize key=\"formulate-buttons_Pick Layout\">\n" +
   "                                        Pick Layout\n" +
   "                                    </localize>\n" +
   "                                </button>\n" +
   "                            </div>\n" +
   "                        </div>\n" +
   "                    </div>\n" +
   "\n" +
   "                    <!-- Button. -->\n" +
   "                    <div class=\"row\">\n" +
   "                        <div class=\"span12\">\n" +
   "                            <button type=\"button\" class=\"btn btn-primary\" ng-click=\"save()\" ng-disabled=\"!canSave()\" prevent-default>\n" +
   "                                <localize key=\"formulate-buttons_Save\">\n" +
   "                                    Save\n" +
   "                                </localize>\n" +
   "                            </button>\n" +
   "                        </div>\n" +
   "                    </div>\n" +
   "\n" +
   "                </div>\n" +
   "\n" +
   "            </umb-tab>\n" +
   "        </umb-tab-view>\n" +
   "    </umb-panel>\n" +
   "</form>";

directives["createFolder/createFolder.html"] = "<div>\n" +
   "    <input type=\"text\" ng-model=\"folderName\" />\n" +
   "</div>\n" +
   "<button type=\"button\" class=\"btn btn-link\" ng-click=\"cancel()\">\n" +
   "    <localize key=\"formulate-buttons_Cancel\">\n" +
   "        Cancel\n" +
   "    </localize>\n" +
   "</button>\n" +
   "<button type=\"button\" class=\"btn btn-primary\" ng-click=\"createFolder()\">\n" +
   "    <localize key=\"formulate-buttons_Create Folder\">\n" +
   "        Create Folder\n" +
   "    </localize>\n" +
   "</button>";

directives["dataValueDesigner/designer.html"] = "<form novalidate name=\"dataValueForm\"\n" +
   "      val-form-manager>\n" +
   "    <umb-panel umb-tabs>\n" +
   "        <umb-header tabs=\"info.tabs\">\n" +
   "\n" +
   "            <div class=\"span7\">\n" +
   "\n" +
   "                <!-- Data value name. -->\n" +
   "                <umb-content-name\n" +
   "                    ng-model=\"info.dataValueName\"\n" +
   "                    placeholder=\"@formulate-placeholders_Data Value Name\">\n" +
   "                </umb-content-name>\n" +
   "\n" +
   "            </div>\n" +
   "        </umb-header>\n" +
   "        <umb-tab-view>\n" +
   "            <umb-tab id=\"tab1\" rel=\"{{1}}\">\n" +
   "                <div class=\"umb-pane\">\n" +
   "\n" +
   "                    <!-- Data value alias. -->\n" +
   "                    <fieldset>\n" +
   "                        <legend>\n" +
   "                            <h2>\n" +
   "                                <localize key=\"formulate-headers_Data Value Information\">\n" +
   "                                    Data Value Information\n" +
   "                                </localize>\n" +
   "                            </h2>\n" +
   "                        </legend>\n" +
   "                        <div class=\"control-group umb-control-group\">\n" +
   "                            <div class=\"umb-el-wrap\">\n" +
   "                                <label class=\"control-label\">\n" +
   "                                    <localize key=\"formulate-labels_Data Value Alias\">\n" +
   "                                        Data Value Alias\n" +
   "                                    </localize>\n" +
   "                                </label>\n" +
   "                                <div class=\"controls controls-row\">\n" +
   "                                    <input\n" +
   "                                           ng-model=\"info.dataValueAlias\"\n" +
   "                                           type=\"text\"\n" +
   "                                           formulate-localize-attribute=\"placeholder\"\n" +
   "                                           placeholder=\"formulate-placeholders_Data Value Alias\" />\n" +
   "                                </div>\n" +
   "                            </div>\n" +
   "                        </div>\n" +
   "                    </fieldset>\n" +
   "\n" +
   "                    <!-- Data value. -->\n" +
   "                    <formulate-data-value-editor ng-if=\"directive\" directive=\"directive\" data=\"data\">\n" +
   "                    </formulate-data-value-editor>\n" +
   "\n" +
   "                    <!-- Save button. -->\n" +
   "                    <br>\n" +
   "                    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"save()\" ng-disabled=\"!canSave()\" prevent-default>\n" +
   "                        <localize key=\"formulate-buttons_Save\">\n" +
   "                            Save\n" +
   "                        </localize>\n" +
   "                    </button>\n" +
   "\n" +
   "                </div>\n" +
   "            </umb-tab>\n" +
   "        </umb-tab-view>\n" +
   "    </umb-panel>\n" +
   "</form>";

directives["dataValueEditor/dataValueEditor.html"] = "<div></div>";

directives["dataValueKinds/dataValueList/dataValueList.html"] = "<fieldset>\n" +
   "    <legend>\n" +
   "        <localize key=\"formulate-headers_Items\">\n" +
   "            Items\n" +
   "        </localize>\n" +
   "    </legend>\n" +
   "    <div ng-repeat=\"item in data.items\">\n" +
   "        <div class=\"input-append\">\n" +
   "            <input type=\"text\" ng-model=\"item.value\" class=\"form-control\" />\n" +
   "            <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteItem($index)\">X</button>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"addItem()\">\n" +
   "        <localize key=\"formulate-buttons_Add Item\">\n" +
   "            Add Item\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "</fieldset>";

directives["dataValueKinds/dataValueListFunction/dataValueListFunction.html"] = "<fieldset>\n" +
   "    <legend>\n" +
   "        <localize key=\"formulate-headers_Choose Function\">\n" +
   "            Choose Function\n" +
   "        </localize>\n" +
   "    </legend>\n" +
   "    <select ng-options=\"option.className as option.name for option in suppliers\" ng-model=\"data.supplier\">\n" +
   "        <option value=\"\" formulate-inject-localization=\"formulate-options_Select a Function\">\n" +
   "        </option>\n" +
   "    </select>\n" +
   "</fieldset>";

directives["dataValueKinds/dataValuePairList/dataValuePairList.html"] = "<fieldset>\n" +
   "    <legend>\n" +
   "        <localize key=\"formulate-headers_Items\">\n" +
   "            Items\n" +
   "        </localize>\n" +
   "    </legend>\n" +
   "    <div ng-repeat=\"item in data.items\">\n" +
   "        <div class=\"input-append\">\n" +
   "            <input type=\"text\" ng-model=\"item.primary\" class=\"form-control\" />\n" +
   "            <input type=\"text\" ng-model=\"item.secondary\" class=\"form-control\" />\n" +
   "            <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteItem($index)\">X</button>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"addItem()\">\n" +
   "        <localize key=\"formulate-buttons_Add Item\">\n" +
   "            Add Item\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "</fieldset>";

directives["dataValueTypeChooser/dataValueChooser.html"] = "<div>\n" +
   "    <label>\n" +
   "        <localize key=\"formulate-labels_Data Value Name:\">\n" +
   "            Data Value Name:\n" +
   "        </localize>\n" +
   "        <div>\n" +
   "            <input type=\"text\" ng-model=\"dataValueName\" />\n" +
   "        </div>\n" +
   "    </label>\n" +
   "</div>\n" +
   "<div>\n" +
   "    <label>\n" +
   "        <localize key=\"formulate-labels_Data Value Alias:\">\n" +
   "            Data Value Alias:\n" +
   "        </localize>\n" +
   "        <div>\n" +
   "            <input type=\"text\" ng-model=\"dataValueAlias\" />\n" +
   "        </div>\n" +
   "    </label>\n" +
   "</div>\n" +
   "<select ng-model=\"kind.id\">\n" +
   "    <option ng-repeat=\"option in kind.kinds\" value=\"{{option.id}}\">\n" +
   "        {{option.name}}\n" +
   "    </option>\n" +
   "</select>\n" +
   "<div>\n" +
   "    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canCreate()\" ng-click=\"createDataValue()\">\n" +
   "        <localize key=\"formulate-buttons_Create Data Value\">\n" +
   "            Create Data Value\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "</div>";

directives["deleteConfiguredFormConfirmation/deleteConfiguredForm.html"] = "<div ng-if=\"!initialized\">\n" +
   "    <localize key=\"formulate-general_Loading\">\n" +
   "        Loading...\n" +
   "    </localize>\n" +
   "</div>\n" +
   "<div ng-if=\"initialized\">\n" +
   "    <div class=\"formulate__dialog-confirmation-message\">\n" +
   "        <formulate-localize-content key=\"formulate-confirmations_Delete Configured Form\">\n" +
   "        </formulate-localize-content>\n" +
   "    </div>\n" +
   "    <button type=\"button\" class=\"btn btn-link\" ng-click=\"cancel()\">\n" +
   "        <localize key=\"formulate-buttons_Cancel\">\n" +
   "            Cancel\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "    <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteConfiguredForm()\">\n" +
   "        <localize key=\"formulate-buttons_Delete Configured Form\">\n" +
   "            Delete Configured Form\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "</div>";

directives["deleteDataValueConfirmation/deleteDataValue.html"] = "<div ng-if=\"!initialized\">\n" +
   "    <localize key=\"formulate-general_Loading\">\n" +
   "        Loading...\n" +
   "    </localize>\n" +
   "</div>\n" +
   "<div ng-if=\"initialized\">\n" +
   "    <div class=\"formulate__dialog-confirmation-message\">\n" +
   "        <formulate-localize-content key=\"formulate-confirmations_Delete Data Value\">\n" +
   "        </formulate-localize-content>\n" +
   "    </div>\n" +
   "    <button type=\"button\" class=\"btn btn-link\" ng-click=\"cancel()\">\n" +
   "        <localize key=\"formulate-buttons_Cancel\">\n" +
   "            Cancel\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "    <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteDataValue()\">\n" +
   "        <localize key=\"formulate-buttons_Delete Data Value\">\n" +
   "            Delete Data Value\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "</div>";

directives["deleteFolderConfirmation/deleteFolder.html"] = "<div ng-if=\"!initialized\">\n" +
   "    <localize key=\"formulate-general_Loading\">\n" +
   "        Loading...\n" +
   "    </localize>\n" +
   "</div>\n" +
   "<div ng-if=\"initialized\">\n" +
   "    <div class=\"formulate__dialog-confirmation-message\">\n" +
   "        <formulate-localize-content key=\"formulate-confirmations_Delete Folder\">\n" +
   "        </formulate-localize-content>\n" +
   "    </div>\n" +
   "    <button type=\"button\" class=\"btn btn-link\" ng-click=\"cancel()\">\n" +
   "        <localize key=\"formulate-buttons_Cancel\">\n" +
   "            Cancel\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "    <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteFolder()\">\n" +
   "        <localize key=\"formulate-buttons_Delete Folder\">\n" +
   "            Delete Folder\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "</div>";

directives["deleteFormConfirmation/deleteForm.html"] = "<div ng-if=\"!initialized\">\n" +
   "    <localize key=\"formulate-general_Loading\">\n" +
   "        Loading...\n" +
   "    </localize>\n" +
   "</div>\n" +
   "<div ng-if=\"initialized\">\n" +
   "    <div class=\"formulate__dialog-confirmation-message\">\n" +
   "        <formulate-localize-content key=\"formulate-confirmations_Delete Form\">\n" +
   "        </formulate-localize-content>\n" +
   "    </div>\n" +
   "    <button type=\"button\" class=\"btn btn-link\" ng-click=\"cancel()\">\n" +
   "        <localize key=\"formulate-buttons_Cancel\">\n" +
   "            Cancel\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "    <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteForm()\">\n" +
   "        <localize key=\"formulate-buttons_Delete Form\">\n" +
   "            Delete Form\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "</div>";

directives["deleteLayoutConfirmation/deleteLayout.html"] = "<div ng-if=\"!initialized\">\n" +
   "    <localize key=\"formulate-general_Loading\">\n" +
   "        Loading...\n" +
   "    </localize>\n" +
   "</div>\n" +
   "<div ng-if=\"initialized\">\n" +
   "    <div class=\"formulate__dialog-confirmation-message\">\n" +
   "        <formulate-localize-content key=\"formulate-confirmations_Delete Layout\">\n" +
   "        </formulate-localize-content>\n" +
   "    </div>\n" +
   "    <button type=\"button\" class=\"btn btn-link\" ng-click=\"cancel()\">\n" +
   "        <localize key=\"formulate-buttons_Cancel\">\n" +
   "            Cancel\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "    <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteLayout()\">\n" +
   "        <localize key=\"formulate-buttons_Delete Layout\">\n" +
   "            Delete Layout\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "</div>";

directives["deleteValidationConfirmation/deleteValidation.html"] = "<div ng-if=\"!initialized\">\n" +
   "    <localize key=\"formulate-general_Loading\">\n" +
   "        Loading...\n" +
   "    </localize>\n" +
   "</div>\n" +
   "<div ng-if=\"initialized\">\n" +
   "    <div class=\"formulate__dialog-confirmation-message\">\n" +
   "        <formulate-localize-content key=\"formulate-confirmations_Delete Validation\">\n" +
   "        </formulate-localize-content>\n" +
   "    </div>\n" +
   "    <button type=\"button\" class=\"btn btn-link\" ng-click=\"cancel()\">\n" +
   "        <localize key=\"formulate-buttons_Cancel\">\n" +
   "            Cancel\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "    <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteValidation()\">\n" +
   "        <localize key=\"formulate-buttons_Delete Validation\">\n" +
   "            Delete Validation\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "</div>";

directives["dialogs/configuredFormPicker/formPicker.html"] = "<div class=\"umb-panel\">\n" +
   "    <div class=\"umb-panel-header\">\n" +
   "        <h2>\n" +
   "            <localize key=\"formulate-headers_Pick Configured Form\">\n" +
   "                Pick Configured Form\n" +
   "            </localize>\n" +
   "        </h2>\n" +
   "        <p>\n" +
   "            <localize key=\"formulate-instructions_Config Under Forms\">\n" +
   "                Note that configured forms reside under forms.\n" +
   "            </localize>\n" +
   "        </p>\n" +
   "    </div>\n" +
   "    <div class=\"umb-panel-body with-footer\">\n" +
   "        <formulate-entity-picker max-count=\"maxCount\"\n" +
   "                                 include-root=\"false\"\n" +
   "                                 entity-kinds=\"entityKinds\"\n" +
   "                                 root-id=\"rootId\"\n" +
   "                                 selection=\"selection\">\n" +
   "        </formulate-entity-picker>\n" +
   "    </div>\n" +
   "    <div class=\"umb-panel-footer\">\n" +
   "        <div class=\"umb-el-wrap umb-panel-buttons\">\n" +
   "            <div class=\"btn-toolbar umb-btn-toolbar pull-right\">\n" +
   "                <button type=\"button\" class=\"btn link\" ng-click=\"cancel()\">\n" +
   "                    <localize key=\"formulate-buttons_Cancel\">\n" +
   "                        Cancel\n" +
   "                    </localize>\n" +
   "                </button>\n" +
   "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"select()\">\n" +
   "                    <localize key=\"formulate-buttons_Select\">\n" +
   "                        Select\n" +
   "                    </localize>\n" +
   "                </button>\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "</div>";

directives["dialogs/dataValuePicker/dataValuePicker.html"] = "<div class=\"umb-panel\">\n" +
   "    <div class=\"umb-panel-header\">\n" +
   "        <h2>\n" +
   "            <localize key=\"formulate-headers_Pick Data Value\">\n" +
   "                Pick Data Value\n" +
   "            </localize>\n" +
   "        </h2>\n" +
   "    </div>\n" +
   "    <div class=\"umb-panel-body with-footer\">\n" +
   "        <formulate-entity-picker\n" +
   "                max-count=\"maxCount\"\n" +
   "                include-root=\"false\"\n" +
   "                entity-kinds=\"entityKinds\"\n" +
   "                root-id=\"rootId\"\n" +
   "                selection=\"selection\">\n" +
   "        </formulate-entity-picker>\n" +
   "    </div>\n" +
   "    <div class=\"umb-panel-footer\">\n" +
   "        <div class=\"umb-el-wrap umb-panel-buttons\">\n" +
   "            <div class=\"btn-toolbar umb-btn-toolbar pull-right\">\n" +
   "                <button type=\"button\" class=\"btn link\" ng-click=\"cancel()\">\n" +
   "                    <localize key=\"formulate-buttons_Cancel\">\n" +
   "                        Cancel\n" +
   "                    </localize>\n" +
   "                </button>\n" +
   "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"select()\">\n" +
   "                    <localize key=\"formulate-buttons_Select\">\n" +
   "                        Select\n" +
   "                    </localize>\n" +
   "                </button>\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "</div>";

directives["dialogs/formPicker/formPicker.html"] = "<div class=\"umb-panel\">\n" +
   "    <div class=\"umb-panel-header\">\n" +
   "        <h2>\n" +
   "            <localize key=\"formulate-headers_Pick Form\">\n" +
   "                Pick Form\n" +
   "            </localize>\n" +
   "        </h2>\n" +
   "    </div>\n" +
   "    <div class=\"umb-panel-body with-footer\">\n" +
   "        <formulate-entity-picker\n" +
   "                max-count=\"maxCount\"\n" +
   "                include-root=\"false\"\n" +
   "                entity-kinds=\"entityKinds\"\n" +
   "                root-id=\"rootId\"\n" +
   "                selection=\"selection\">\n" +
   "        </formulate-entity-picker>\n" +
   "    </div>\n" +
   "    <div class=\"umb-panel-footer\">\n" +
   "        <div class=\"umb-el-wrap umb-panel-buttons\">\n" +
   "            <div class=\"btn-toolbar umb-btn-toolbar pull-right\">\n" +
   "                <button type=\"button\" class=\"btn link\" ng-click=\"cancel()\">\n" +
   "                    <localize key=\"formulate-buttons_Cancel\">\n" +
   "                        Cancel\n" +
   "                    </localize>\n" +
   "                </button>\n" +
   "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"select()\">\n" +
   "                    <localize key=\"formulate-buttons_Select\">\n" +
   "                        Select\n" +
   "                    </localize>\n" +
   "                </button>\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "</div>";

directives["dialogs/layoutPicker/layoutPicker.html"] = "<div class=\"umb-panel\">\n" +
   "    <div class=\"umb-panel-header\">\n" +
   "        <h2>\n" +
   "            <localize key=\"formulate-headers_Pick Layout\">\n" +
   "                Pick Layout\n" +
   "            </localize>\n" +
   "        </h2>\n" +
   "    </div>\n" +
   "    <div class=\"umb-panel-body with-footer\">\n" +
   "        <formulate-entity-picker\n" +
   "                max-count=\"maxCount\"\n" +
   "                include-root=\"false\"\n" +
   "                entity-kinds=\"entityKinds\"\n" +
   "                root-id=\"rootId\"\n" +
   "                selection=\"selection\">\n" +
   "        </formulate-entity-picker>\n" +
   "    </div>\n" +
   "    <div class=\"umb-panel-footer\">\n" +
   "        <div class=\"umb-el-wrap umb-panel-buttons\">\n" +
   "            <div class=\"btn-toolbar umb-btn-toolbar pull-right\">\n" +
   "                <button type=\"button\" class=\"btn link\" ng-click=\"cancel()\">\n" +
   "                    <localize key=\"formulate-buttons_Cancel\">\n" +
   "                        Cancel\n" +
   "                    </localize>\n" +
   "                </button>\n" +
   "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"select()\">\n" +
   "                    <localize key=\"formulate-buttons_Select\">\n" +
   "                        Select\n" +
   "                    </localize>\n" +
   "                </button>\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "</div>";

directives["dialogs/moveEntity/moveEntity.html"] = "<formulate-entity-picker\n" +
   "    max-count=\"1\"\n" +
   "    include-root=\"true\"\n" +
   "    entity-kinds=\"entityKinds\"\n" +
   "    root-id=\"rootId\"\n" +
   "    selection=\"selection\">\n" +
   "</formulate-entity-picker>\n" +
   "<div class=\"umb-el-wrap umb-panel-buttons\">\n" +
   "    <div class=\"btn-toolbar umb-btn-toolbar pull-right\">\n" +
   "        <button type=\"button\" class=\"btn link\" ng-click=\"cancel()\">\n" +
   "            <localize key=\"formulate-buttons_Cancel\">\n" +
   "                Cancel\n" +
   "            </localize>\n" +
   "        </button>\n" +
   "        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"move()\">\n" +
   "            <localize key=\"formulate-buttons_Move\">\n" +
   "                Move\n" +
   "            </localize>\n" +
   "        </button>\n" +
   "    </div>\n" +
   "</div>";

directives["dialogs/validationPicker/validationPicker.html"] = "<div class=\"umb-panel\">\n" +
   "    <div class=\"umb-panel-header\">\n" +
   "        <h2>\n" +
   "            <localize key=\"formulate-headers_Pick Validations\">\n" +
   "                Pick Validations\n" +
   "            </localize>\n" +
   "        </h2>\n" +
   "    </div>\n" +
   "    <div class=\"umb-panel-body with-footer\">\n" +
   "        <formulate-entity-picker\n" +
   "                include-root=\"false\"\n" +
   "                entity-kinds=\"entityKinds\"\n" +
   "                root-id=\"rootId\"\n" +
   "                selection=\"selection\">\n" +
   "        </formulate-entity-picker>\n" +
   "    </div>\n" +
   "    <div class=\"umb-panel-footer\">\n" +
   "        <div class=\"umb-el-wrap umb-panel-buttons\">\n" +
   "            <div class=\"btn-toolbar umb-btn-toolbar pull-right\">\n" +
   "                <button type=\"button\" class=\"btn link\" ng-click=\"cancel()\">\n" +
   "                    <localize key=\"formulate-buttons_Cancel\">\n" +
   "                        Cancel\n" +
   "                    </localize>\n" +
   "                </button>\n" +
   "                <button type=\"button\" class=\"btn btn-primary\" ng-click=\"select()\">\n" +
   "                    <localize key=\"formulate-buttons_Select\">\n" +
   "                        Select\n" +
   "                    </localize>\n" +
   "                </button>\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "</div>";

directives["entityPicker/entityPicker.html"] = "<div>\n" +
   "    <formulate-entity-picker-tree\n" +
   "        max-count=\"maxCount\"\n" +
   "        selection=\"selectedNodes\"\n" +
   "        entity-kinds=\"entityKinds\"\n" +
   "        nodes=\"rootNodes\"\n" +
   "        is-root=\"true\">\n" +
   "    </formulate-entity-picker-tree>\n" +
   "</div>";

directives["entityPicker/entityPickerTree.html"] = "<ul ng-class=\"isRoot ? 'formulate-entity-tree' : null\">\n" +
   "    <li ng-repeat=\"node in nodes\">\n" +
   "        <ins ng-click=\"toggleChildren(node)\" ng-if=\"node.hasChildren\" ng-class=\"node.expanded ? 'icon-navigation-down' : 'icon-navigation-right'\" class=\"child-toggle\">\n" +
   "        </ins>\n" +
   "        <i ng-class=\"node.selected ? 'icon-check selected' : node.icon\" class=\"icon entity-icon\"></i>\n" +
   "        <a href ng-click=\"toggleNode(node)\">{{node.name}}</a>\n" +
   "        <formulate-entity-picker-tree\n" +
   "            ng-if=\"node.expanded\"\n" +
   "            max-count=\"maxCount\"\n" +
   "            selection=\"selection\"\n" +
   "            entity-kinds=\"entityKinds\"\n" +
   "            nodes=\"node.children\"\n" +
   "            is-root=\"false\">\n" +
   "        </formulate-entity-picker-tree>\n" +
   "    </li>\n" +
   "</ul>";

directives["fieldChooser/fieldChooser.html"] = "<div class=\"usky-grid\" ng-if=\"show\">\n" +
   "    <div class=\"cell-tools-menu\" ng-style=\"dialogStyles\">\n" +
   "        <formulate-localize-content key=\"formulate-headers_Add Field\">\n" +
   "        </formulate-localize-content>\n" +
   "        <ul class=\"elements\">\n" +
   "            <li ng-repeat=\"item in items\">\n" +
   "                <a href=\"\" ng-click=\"choseItem(item)\">\n" +
   "                    <i class=\"icon {{item.icon}}\"></i>\n" +
   "                    {{item.typeLabel}}\n" +
   "                </a>\n" +
   "            </li>\n" +
   "        </ul>\n" +
   "    </div>\n" +
   "</div>";

directives["fieldEditor/fieldEditor.html"] = "<div></div>";

directives["fields/buttonField/buttonField.html"] = "<div class=\"umb-el-wrap\">\n" +
   "    <label class=\"control-label\">\n" +
   "        <localize key=\"formulate-labels_Button Kind\">\n" +
   "            Button Kind\n" +
   "        </localize>\n" +
   "    </label>\n" +
   "    <div class=\"controls controls-row\">\n" +
   "        <select ng-options=\"option.value as option.label for option in kinds.values\" ng-model=\"configuration.buttonKind\">\n" +
   "            <option value=\"\" formulate-inject-localization=\"formulate-options_Select a Button Kind\">\n" +
   "            </option>\n" +
   "        </select>\n" +
   "    </div>\n" +
   "</div>";

directives["fields/checkboxField/checkboxField.html"] = "<div class=\"umb-el-wrap\">\n" +
   "    <label class=\"control-label\">\n" +
   "        <localize key=\"formulate-labels_Field\">\n" +
   "            Field\n" +
   "        </localize>\n" +
   "    </label>\n" +
   "    <div class=\"controls controls-row\">\n" +
   "        <input type=\"checkbox\" readonly disabled=\"disabled\" />\n" +
   "    </div>\n" +
   "</div>";

directives["fields/checkboxListField/checkboxListField.html"] = "<div class=\"umb-el-wrap\">\n" +
   "    <label class=\"control-label\">\n" +
   "        <localize key=\"formulate-labels_Data Value\">\n" +
   "            Data Value\n" +
   "        </localize>\n" +
   "    </label>\n" +
   "    <div class=\"controls controls-row\">\n" +
   "        <div>\n" +
   "            {{dataValue.name}}\n" +
   "        </div>\n" +
   "        <div>\n" +
   "            <a class=\"btn link\" href ng-click=\"pickDataValue()\">\n" +
   "                <localize key=\"formulate-buttons_Pick Data Value\">\n" +
   "                    Pick Data Value\n" +
   "                </localize>\n" +
   "            </a>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "</div>";

directives["fields/dateField/dateField.html"] = "<div></div>";

directives["fields/dropDownField/dropDownField.html"] = "<div class=\"umb-el-wrap\">\n" +
   "    <label class=\"control-label\">\n" +
   "        <localize key=\"formulate-labels_Data Value\">\n" +
   "            Data Value\n" +
   "        </localize>\n" +
   "    </label>\n" +
   "    <div class=\"controls controls-row\">\n" +
   "        <div>\n" +
   "            {{dataValue.name}}\n" +
   "        </div>\n" +
   "        <div>\n" +
   "            <a class=\"btn link\" href ng-click=\"pickDataValue()\">\n" +
   "                <localize key=\"formulate-buttons_Pick Data Value\">\n" +
   "                    Pick Data Value\n" +
   "                </localize>\n" +
   "            </a>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "</div>";

directives["fields/extendedRadioButtonListField/extendedRadioButtonListField.html"] = "<div class=\"umb-el-wrap\">\n" +
   "    <label class=\"control-label\">\n" +
   "        <localize key=\"formulate-labels_Data Value\">\n" +
   "            Data Value\n" +
   "        </localize>\n" +
   "    </label>\n" +
   "    <div class=\"controls controls-row\">\n" +
   "        <div>\n" +
   "            {{dataValue.name}}\n" +
   "        </div>\n" +
   "        <div>\n" +
   "            <a class=\"btn link\" href ng-click=\"pickDataValue()\">\n" +
   "                <localize key=\"formulate-buttons_Pick Data Value\">\n" +
   "                    Pick Data Value\n" +
   "                </localize>\n" +
   "            </a>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "</div>";

directives["fields/headerField/headerField.html"] = "<div class=\"umb-el-wrap\">\n" +
   "    <label class=\"control-label\">\n" +
   "        <localize key=\"formulate-labels_Text Value\">\n" +
   "            Text Value\n" +
   "        </localize>\n" +
   "    </label>\n" +
   "    <div class=\"controls controls-row\">\n" +
   "        <input type=\"text\" ng-model=\"configuration.text\">\n" +
   "    </div>\n" +
   "</div>";

directives["fields/hiddenField/hiddenField.html"] = "<div></div>";

directives["fields/radioButtonListField/radioButtonListField.html"] = "<div class=\"umb-el-wrap\">\n" +
   "    <label class=\"control-label\">\n" +
   "        <localize key=\"formulate-labels_Data Value\">\n" +
   "            Data Value\n" +
   "        </localize>\n" +
   "    </label>\n" +
   "    <div class=\"controls controls-row\">\n" +
   "        <div>\n" +
   "            {{dataValue.name}}\n" +
   "        </div>\n" +
   "        <div>\n" +
   "            <a class=\"btn link\" href ng-click=\"pickDataValue()\">\n" +
   "                <localize key=\"formulate-buttons_Pick Data Value\">\n" +
   "                    Pick Data Value\n" +
   "                </localize>\n" +
   "            </a>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <label class=\"control-label\">\n" +
   "        <localize key=\"formulate-labels_Orientation\">\n" +
   "            Orientation\n" +
   "        </localize>\n" +
   "    </label>\n" +
   "    <div class=\"controls controls-row\">\n" +
   "        <select ng-options=\"option.value as option.label for option in orientations.values\" ng-model=\"configuration.orientation\">\n" +
   "            <option value=\"\" formulate-inject-localization=\"formulate-options_Select an Orientation\">\n" +
   "            </option>\n" +
   "        </select>\n" +
   "    </div>\n" +
   "</div>";

directives["fields/recaptchaField/recaptchaField.html"] = "<div class=\"umb-el-wrap\">\n" +
   "    <p ng-if=\"!hasConfiguredRecaptcha\" class=\"formulate-recaptcha-instructions\">\n" +
   "        <localize key=\"formulate-instructions_Recaptcha Field\">\n" +
   "            In order to use a recaptcha field, you must first add the web.config app settings\n" +
   "            \"Formulate:RecaptchaSiteKey\" and \"Formulate:RecaptchaSecretKey\".\n" +
   "        </localize>\n" +
   "    </p>\n" +
   "</div>";

directives["fields/richTextField/richTextField.html"] = "<div class=\"umb-el-wrap\">\n" +
   "    <label class=\"control-label\">\n" +
   "        <localize key=\"formulate-labels_Text Value\">\n" +
   "            Text Value\n" +
   "        </localize>\n" +
   "    </label>\n" +
   "    <div class=\"controls controls-row\">\n" +
   "        <umb-editor model=\"textEditorModel\"></umb-editor>\n" +
   "    </div>\n" +
   "</div>";

directives["fields/textAreaField/textAreaField.html"] = "<div class=\"umb-el-wrap\">\n" +
   "    <label class=\"control-label\">\n" +
   "        <localize key=\"formulate-labels_Field\">\n" +
   "            Field\n" +
   "        </localize>\n" +
   "    </label>\n" +
   "    <div class=\"controls controls-row\">\n" +
   "        <textarea readonly disabled=\"disabled\"></textarea>\n" +
   "    </div>\n" +
   "</div>";

directives["fields/textConstantField/textConstantField.html"] = "<div class=\"umb-el-wrap\">\n" +
   "    <label class=\"control-label\">\n" +
   "        <localize key=\"formulate-labels_Text Value\">\n" +
   "            Text Value\n" +
   "        </localize>\n" +
   "    </label>\n" +
   "    <div class=\"controls controls-row\">\n" +
   "        <textarea ng-model=\"configuration.text\" ng-trim=\"false\" />\n" +
   "    </div>\n" +
   "</div>";

directives["fields/textField/textField.html"] = "<div class=\"umb-el-wrap\">\n" +
   "    <label class=\"control-label\">\n" +
   "        <localize key=\"formulate-labels_Field\">\n" +
   "            Field\n" +
   "        </localize>\n" +
   "    </label>\n" +
   "    <div class=\"controls controls-row\">\n" +
   "        <input type=\"text\" readonly disabled=\"disabled\" />\n" +
   "    </div>\n" +
   "</div>";

directives["fields/uploadField/uploadField.html"] = "<div class=\"umb-el-wrap\">\n" +
   "    <label class=\"control-label\">\n" +
   "        <localize key=\"formulate-labels_Field\">\n" +
   "            Field\n" +
   "        </localize>\n" +
   "    </label>\n" +
   "    <div class=\"controls controls-row\">\n" +
   "        <input type=\"file\" readonly disabled=\"disabled\" />\n" +
   "    </div>\n" +
   "</div>";

directives["folderDesigner/designer.html"] = "<form novalidate name=\"folderForm\"\n" +
   "      val-form-manager>\n" +
   "    <umb-panel umb-tabs>\n" +
   "        <umb-header tabs=\"info.tabs\">\n" +
   "\n" +
   "            <div class=\"span7\">\n" +
   "\n" +
   "                <!-- Folder name. -->\n" +
   "                <umb-content-name ng-model=\"info.folderName\"\n" +
   "                                  placeholder=\"@formulate-placeholders_Folder Name\">\n" +
   "                </umb-content-name>\n" +
   "\n" +
   "            </div>\n" +
   "        </umb-header>\n" +
   "        <umb-tab-view>\n" +
   "            <umb-tab id=\"tab5\" rel=\"{{5}}\">\n" +
   "                <div class=\"umb-pane\">\n" +
   "\n" +
   "                    <!-- Folder information. -->\n" +
   "                    <p>\n" +
   "                        <localize key=\"formulate-instructions_Folder\">\n" +
   "                            This is a folder. You can store items under it,\n" +
   "                            including more folders.\n" +
   "                        </localize>\n" +
   "                    </p>\n" +
   "\n" +
   "                    <!-- Save button. -->\n" +
   "                    <br>\n" +
   "                    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"save()\" ng-disabled=\"!canSave()\" prevent-default>\n" +
   "                        <localize key=\"formulate-buttons_Save\">\n" +
   "                            Save\n" +
   "                        </localize>\n" +
   "                    </button>\n" +
   "\n" +
   "                </div>\n" +
   "            </umb-tab>\n" +
   "        </umb-tab-view>\n" +
   "    </umb-panel>\n" +
   "</form>";

directives["formDesigner/designer.html"] = "<form name=\"formulateFormDesigner\" val-form-manager>\n" +
   "    <umb-panel umb-tabs>\n" +
   "        <umb-header tabs=\"info.tabs\">\n" +
   "            <div class=\"span7\">\n" +
   "\n" +
   "                <!-- Form name. -->\n" +
   "                <umb-content-name\n" +
   "                    ng-model=\"info.formName\"\n" +
   "                    placeholder=\"@formulate-placeholders_Form Name\">\n" +
   "                </umb-content-name>\n" +
   "\n" +
   "            </div>\n" +
   "        </umb-header>\n" +
   "        <umb-tab-view>\n" +
   "            <umb-tab id=\"tab2\" rel=\"{{2}}\">\n" +
   "\n" +
   "                <!-- Field chooser dialog. -->\n" +
   "                <formulate-field-chooser\n" +
   "                    show=\"fieldChooser.show\"\n" +
   "                    chosen=\"fieldChosen(field)\">\n" +
   "                </formulate-field-chooser>\n" +
   "\n" +
   "                <!-- Form designer. -->\n" +
   "                <div class=\"umb-pane\">\n" +
   "\n" +
   "                    <!-- Form alias. -->\n" +
   "                    <fieldset>\n" +
   "                        <legend>\n" +
   "                            <h2>\n" +
   "                                <localize key=\"formulate-headers_Form Information\">\n" +
   "                                    Form Information\n" +
   "                                </localize>\n" +
   "                            </h2>\n" +
   "                        </legend>\n" +
   "                        <div class=\"control-group umb-control-group\">\n" +
   "                            <div class=\"umb-el-wrap\">\n" +
   "                                <label class=\"control-label\">\n" +
   "                                    <localize key=\"formulate-labels_Form Alias\">\n" +
   "                                        Form Alias\n" +
   "                                    </localize>\n" +
   "                                </label>\n" +
   "                                <div class=\"controls controls-row\">\n" +
   "                                    <input\n" +
   "                                           ng-model=\"info.formAlias\"\n" +
   "                                           type=\"text\"\n" +
   "                                           formulate-localize-attribute=\"placeholder\"\n" +
   "                                           placeholder=\"formulate-placeholders_Form Alias\" />\n" +
   "                                </div>\n" +
   "                            </div>\n" +
   "                        </div>\n" +
   "                    </fieldset>\n" +
   "\n" +
   "                    <!-- Render all fields. -->\n" +
   "                    <div ui-sortable=\"sortableOptions\" ng-model=\"fields\">\n" +
   "                        <fieldset ng-repeat=\"field in fields\" class=\"formulate-field {{field.expanded ? 'expanded' : 'collapsed'}}\">\n" +
   "                            <legend><i class=\"icon-navigation drag-handle\"></i><i ng-click=\"toggleField(field)\" class=\"collapser icon icon-add\"></i><i class=\"type-identifier icon {{field.icon}}\"></i>{{field.name || \"formulate-general_Unnamed\" | formulatelocalize:!field.name}}<i ng-click=\"deleteField(field)\" class=\"icon-delete deleter\"></i></legend>\n" +
   "                            <div class=\"formulate-field-details\" ng-if=\"field.expanded\">\n" +
   "                                <div class=\"control-group umb-control-group\">\n" +
   "                                    <div class=\"umb-el-wrap\">\n" +
   "                                        <label class=\"control-label\">\n" +
   "                                            <localize key=\"formulate-labels_Field Name\">\n" +
   "                                                Field Name\n" +
   "                                            </localize>\n" +
   "                                        </label>\n" +
   "                                        <div class=\"controls controls-row\">\n" +
   "                                            <input\n" +
   "                                                   type=\"text\"\n" +
   "                                                   ng-model=\"field.name\"\n" +
   "                                                   formulate-localize-attribute=\"placeholder\"\n" +
   "                                                   placeholder=\"formulate-placeholders_Field Name\" />\n" +
   "                                        </div>\n" +
   "                                    </div>\n" +
   "                                    <div class=\"umb-el-wrap\">\n" +
   "                                        <label class=\"control-label\">\n" +
   "                                            <localize key=\"formulate-labels_Field Alias\">\n" +
   "                                                Field Alias\n" +
   "                                            </localize>\n" +
   "                                        </label>\n" +
   "                                        <div class=\"controls controls-row\">\n" +
   "                                            <input\n" +
   "                                                   type=\"text\"\n" +
   "                                                   ng-model=\"field.alias\"\n" +
   "                                                   formulate-localize-attribute=\"placeholder\"\n" +
   "                                                   placeholder=\"formulate-placeholders_Field Alias\" />\n" +
   "                                        </div>\n" +
   "                                    </div>\n" +
   "                                    <div class=\"umb-el-wrap\">\n" +
   "                                        <label class=\"control-label\">\n" +
   "                                            <localize key=\"formulate-labels_Field Label\">\n" +
   "                                                Field Label\n" +
   "                                            </localize>\n" +
   "                                        </label>\n" +
   "                                        <div class=\"controls controls-row\">\n" +
   "                                            <input\n" +
   "                                               type=\"text\"\n" +
   "                                               ng-model=\"field.label\"\n" +
   "                                               formulate-localize-attribute=\"placeholder\"\n" +
   "                                               placeholder=\"formulate-placeholders_Field Label\" />\n" +
   "                                        </div>\n" +
   "                                    </div>\n" +
   "                                    <div class=\"umb-el-wrap\" ng-if=\"categories\">\n" +
   "                                        <label class=\"control-label\">\n" +
   "                                            <localize key=\"formulate-labels_Field Category\">\n" +
   "                                                Field Category\n" +
   "                                            </localize>\n" +
   "                                        </label>\n" +
   "                                        <div class=\"controls controls-row\">\n" +
   "                                            <select\n" +
   "                                                class=\"umb-editor umb-dropdown\"\n" +
   "                                                ng-model=\"field.category\"\n" +
   "                                                ng-options=\"option.value as option.label group by option.group for option in categories\">\n" +
   "                                                <option value=\"\" formulate-inject-localization=\"formulate-options_Select a Field Category\"></option>\n" +
   "                                            </select>\n" +
   "                                        </div>\n" +
   "                                    </div>\n" +
   "                                    <div>\n" +
   "                                        <label class=\"control-label\">\n" +
   "                                            <localize key=\"formulate-labels_Validations\">\n" +
   "                                                Validations\n" +
   "                                            </localize>\n" +
   "                                        </label>\n" +
   "                                        <div class=\"controls controls-row\">\n" +
   "                                            <ul>\n" +
   "                                                <li ng-repeat=\"validation in field.validations\">\n" +
   "                                                    {{validation.name}}\n" +
   "                                                </li>\n" +
   "                                            </ul>\n" +
   "                                            <div>\n" +
   "                                                <a class=\"btn link\" href ng-click=\"pickValidations(field)\">\n" +
   "                                                    <localize key=\"formulate-buttons_Pick Validations\">\n" +
   "                                                        Pick Validations\n" +
   "                                                    </localize>\n" +
   "                                                </a>\n" +
   "                                            </div>\n" +
   "                                        </div>\n" +
   "                                    </div>\n" +
   "                                    <formulate-field-editor directive=\"field.directive\" configuration=\"field.configuration\">\n" +
   "                                    </formulate-field-editor>\n" +
   "                                </div>\n" +
   "                            </div>\n" +
   "                        </fieldset>\n" +
   "                    </div>\n" +
   "\n" +
   "                    <!-- Buttons. -->\n" +
   "                    <div class=\"btn-group\">\n" +
   "                        <button type=\"button\" class=\"btn\" ng-click=\"addField()\" ng-disabled=\"!canAddField()\" prevent-default>\n" +
   "                            <localize key=\"formulate-buttons_Add Field\">\n" +
   "                                Add Field\n" +
   "                            </localize>\n" +
   "                        </button>\n" +
   "                        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"save()\" ng-disabled=\"!canSave()\" prevent-default>\n" +
   "                            <localize key=\"formulate-buttons_Save\">\n" +
   "                                Save\n" +
   "                            </localize>\n" +
   "                        </button>\n" +
   "                    </div>\n" +
   "                </div>\n" +
   "\n" +
   "            </umb-tab>\n" +
   "            <umb-tab id=\"tab25\" rel=\"{{25}}\">\n" +
   "\n" +
   "                <!-- Handler chooser dialog. -->\n" +
   "                <formulate-handler-chooser\n" +
   "                    show=\"handlerChooser.show\"\n" +
   "                    chosen=\"handlerChosen(handler)\">\n" +
   "                </formulate-handler-chooser>\n" +
   "\n" +
   "                <!-- Handlers designer. -->\n" +
   "                <div class=\"umb-pane\">\n" +
   "\n" +
   "                    <!-- Introduction. -->\n" +
   "                    <p>\n" +
   "                        <localize key=\"formulate-introductions_Form Handlers\">\n" +
   "                            These are your form's handlers.\n" +
   "                            Handlers allow you to perform various actions when you submit the form.\n" +
   "                        </localize>\n" +
   "                    </p>\n" +
   "\n" +
   "                    <!-- Handlers. -->\n" +
   "                    <div ui-sortable=\"sortableHandlerOptions\" ng-model=\"handlers\">\n" +
   "                        <fieldset ng-repeat=\"handler in handlers\" class=\"formulate-handler {{handler.expanded ? 'expanded' : 'collapsed'}}\">\n" +
   "                            <legend><i class=\"icon-navigation drag-handle\"></i><i ng-click=\"toggleHandler(handler)\" class=\"collapser icon icon-add\"></i><i class=\"type-identifier icon {{handler.icon}}\"></i>{{handler.name || \"formulate-general_Unnamed\" | formulatelocalize:!handler.name}}<i ng-click=\"deleteHandler(handler)\" class=\"icon-delete deleter\"></i></legend>\n" +
   "                            <div class=\"formulate-handler-details\">\n" +
   "                                <div class=\"control-group umb-control-group\">\n" +
   "                                    <div class=\"umb-el-wrap\">\n" +
   "                                        <label class=\"control-label\">\n" +
   "                                            <localize key=\"formulate-labels_Handler Name\">\n" +
   "                                                Handler Name\n" +
   "                                            </localize>\n" +
   "                                        </label>\n" +
   "                                        <div class=\"controls controls-row\">\n" +
   "                                            <input\n" +
   "                                                   type=\"text\"\n" +
   "                                                   ng-model=\"handler.name\"\n" +
   "                                                   formulate-localize-attribute=\"placeholder\"\n" +
   "                                                   placeholder=\"formulate-placeholders_Handler Name\" />\n" +
   "                                        </div>\n" +
   "                                    </div>\n" +
   "                                    <div class=\"umb-el-wrap\">\n" +
   "                                        <label class=\"control-label\">\n" +
   "                                            <localize key=\"formulate-labels_Handler Alias\">\n" +
   "                                                Handler Alias\n" +
   "                                            </localize>\n" +
   "                                        </label>\n" +
   "                                        <div class=\"controls controls-row\">\n" +
   "                                            <input\n" +
   "                                                   type=\"text\"\n" +
   "                                                   ng-model=\"handler.alias\"\n" +
   "                                                   formulate-localize-attribute=\"placeholder\"\n" +
   "                                                   placeholder=\"formulate-placeholders_Handler Alias\" />\n" +
   "                                        </div>\n" +
   "                                    </div>\n" +
   "                                    <formulate-handler-editor directive=\"handler.directive\" configuration=\"handler.configuration\" fields=\"fields\">\n" +
   "                                    </formulate-handler-editor>\n" +
   "                                </div>\n" +
   "                            </div>\n" +
   "                        </fieldset>\n" +
   "                    </div>\n" +
   "\n" +
   "                    <!-- Buttons. -->\n" +
   "                    <div class=\"btn-group\">\n" +
   "                        <button type=\"button\" class=\"btn\" ng-click=\"addHandler()\" ng-disabled=\"!canAddHandler()\" prevent-default>\n" +
   "                            <localize key=\"formulate-buttons_Add Handler\">\n" +
   "                                Add Handler\n" +
   "                            </localize>\n" +
   "                        </button>\n" +
   "                        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"save()\" ng-disabled=\"!canSave()\" prevent-default>\n" +
   "                            <localize key=\"formulate-buttons_Save\">\n" +
   "                                Save\n" +
   "                            </localize>\n" +
   "                        </button>\n" +
   "                    </div>\n" +
   "\n" +
   "                </div>\n" +
   "\n" +
   "            </umb-tab>\n" +
   "        </umb-tab-view>\n" +
   "    </umb-panel>\n" +
   "</form>";

directives["formFieldsChooser/formFieldsChooser.html"] = "<div>\n" +
   "    <div ng-repeat=\"field in tempData.fields\">\n" +
   "        <div class=\"input-append\">\n" +
   "            <input type=\"text\" readonly ng-model=\"field.name\" class=\"form-control\" />\n" +
   "            <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteField($index)\">X</button>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <button type=\"button\" class=\"btn btn-default\" ng-click=\"addField()\" ng-disabled=\"!tempData.field\">\n" +
   "        <localize key=\"formulate-buttons_Add Field\">\n" +
   "            Add Field\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "    <select ng-options=\"field.id as field.name for field in allFields | filter: {id: '!!'}\" ng-model=\"tempData.field\">\n" +
   "        <option value=\"\" formulate-inject-localization=\"formulate-options_Select a Field\"></option>\n" +
   "    </select>\n" +
   "</div>";

directives["handlerChooser/handlerChooser.html"] = "<div class=\"usky-grid\" ng-if=\"show\">\n" +
   "    <div class=\"cell-tools-menu\" ng-style=\"dialogStyles\">\n" +
   "        <formulate-localize-content key=\"formulate-headers_Add Handler\">\n" +
   "        </formulate-localize-content>\n" +
   "        <ul class=\"elements\">\n" +
   "            <li ng-repeat=\"item in items\">\n" +
   "                <a href=\"\" ng-click=\"choseItem(item)\">\n" +
   "                    <i class=\"icon {{item.icon}}\"></i>\n" +
   "                    {{item.typeLabel}}\n" +
   "                </a>\n" +
   "            </li>\n" +
   "        </ul>\n" +
   "    </div>\n" +
   "</div>";

directives["handlerEditor/handlerEditor.html"] = "<div></div>";

directives["handlers/emailHandler/emailHandler.html"] = "<div>\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Sender Email\">\n" +
   "                Sender Email\n" +
   "            </localize>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <div>\n" +
   "                <input type=\"text\" ng-model=\"configuration.senderEmail\" />\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Recipient Emails\">\n" +
   "                Recipient Emails\n" +
   "            </localize>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <div ng-repeat=\"recipient in configuration.recipients\">\n" +
   "                <div class=\"input-append\">\n" +
   "                    <input type=\"text\" ng-model=\"recipient.email\" class=\"form-control\" />\n" +
   "                    <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteRecipient($index)\">X</button>\n" +
   "                </div>\n" +
   "            </div>\n" +
   "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"addRecipient()\">\n" +
   "                <localize key=\"formulate-buttons_Add Recipient\">\n" +
   "                    Add Recipient\n" +
   "                </localize>\n" +
   "            </button>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Recipient Email Fields\">\n" +
   "                Recipient Email Fields\n" +
   "            </localize>\n" +
   "            <small>\n" +
   "                <localize key=\"formulate-label-descriptions_Recipient Email Fields\">\n" +
   "                    The email addresses to send the email to will be extracted from the value\n" +
   "                    of the fields you specify here. Useful when you want users to receive a\n" +
   "                    confirmation email.\n" +
   "                </localize>\n" +
   "            </small>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <formulate-form-fields-chooser\n" +
   "                all-fields=\"fields\"\n" +
   "                chosen-fields=\"configuration.recipientFields\">\n" +
   "            </formulate-form-fields-chooser>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Subject\">\n" +
   "                Subject\n" +
   "            </localize>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <div>\n" +
   "                <input type=\"text\" ng-model=\"configuration.subject\" />\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Message\">\n" +
   "                Message\n" +
   "            </localize>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <div>\n" +
   "                <textarea ng-model=\"configuration.message\"></textarea>\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Append Fields\">\n" +
   "                Append Fields?\n" +
   "            </localize>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <div>\n" +
   "                <input type=\"checkbox\" ng-model=\"configuration.appendFields\" />\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Include Hidden Fields\">\n" +
   "                Include Hidden Fields?\n" +
   "            </localize>\n" +
   "            <small>\n" +
   "                <localize key=\"formulate-label-descriptions_Include Hidden Fields\">\n" +
   "                    When appending fields, also include hidden fields?\n" +
   "                </localize>\n" +
   "            </small>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <div>\n" +
   "                <input type=\"checkbox\" ng-model=\"configuration.includeHiddenFields\" />\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Exclude Field Labels\">\n" +
   "                Exclude Field Labels?\n" +
   "            </localize>\n" +
   "            <small>\n" +
   "                <localize key=\"formulate-label-descriptions_Exclude Field Labels\">\n" +
   "                    When appending fields, exclude the labels (i.e., only include the values)?\n" +
   "                </localize>\n" +
   "            </small>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <div>\n" +
   "                <input type=\"checkbox\" ng-model=\"configuration.excludeFieldLabels\" />\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Include Specific Fields\">\n" +
   "                Include Specific Fields\n" +
   "            </localize>\n" +
   "            <small>\n" +
   "                <localize key=\"formulate-label-descriptions_Include Specific Fields\">\n" +
   "                    If you would prefer this email only include specific fields rather than all\n" +
   "                    fields, select the fields you would like to include.\n" +
   "                </localize>\n" +
   "            </small>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <formulate-form-fields-chooser\n" +
   "                all-fields=\"fields\"\n" +
   "                chosen-fields=\"configuration.fieldsToInclude\">\n" +
   "            </formulate-form-fields-chooser>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Append Payload\">\n" +
   "                Append Payload?\n" +
   "            </localize>\n" +
   "            <small>\n" +
   "                <localize key=\"formulate-label-descriptions_Append Payload\">\n" +
   "                    For example, the URL and name of the page containing the form.\n" +
   "                </localize>\n" +
   "            </small>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <div>\n" +
   "                <input type=\"checkbox\" ng-model=\"configuration.appendPayload\" />\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "</div>";

directives["handlers/sendDataHandler/sendDataHandler.html"] = "<div>\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_URL\">\n" +
   "                URL\n" +
   "            </localize>\n" +
   "            <small>\n" +
   "                <localize key=\"formulate-label-descriptions_URL\">\n" +
   "                    The URL the data should be sent to.\n" +
   "                </localize>\n" +
   "            </small>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <div class=\"formulate-textbox--url-container\">\n" +
   "                <div class=\"formulate-textbox--url-border\"></div>\n" +
   "                <input type=\"text\" ng-model=\"configuration.url\" class=\"formulate-textbox--url\" />\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Method\">\n" +
   "                Method\n" +
   "            </localize>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <div>\n" +
   "                <select ng-model=\"configuration.method\">\n" +
   "                    <option value=\"GET\">GET</option>\n" +
   "                    <option value=\"POST\">POST</option>\n" +
   "                </select>\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Transmission Format\">\n" +
   "                Transmission Format\n" +
   "            </localize>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <div>\n" +
   "                <select ng-model=\"configuration.transmissionFormat\">\n" +
   "                    <option value=\"Query String\">Query String</option>\n" +
   "                    <option value=\"Form Body\">Form Body</option>\n" +
   "                    <option value=\"JSON\">JSON</option>\n" +
   "                </select>\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Fields\">\n" +
   "                Fields\n" +
   "            </localize>\n" +
   "            <small>\n" +
   "                <localize key=\"formulate-label-descriptions_Fields\">\n" +
   "                    Select the fields you want to send. Also, specify the name used by the field\n" +
   "                    in the external system.\n" +
   "                </localize>\n" +
   "            </small>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <div class=\"formulate-field-map\" ui-sortable=\"sortableFieldOptions\" ng-model=\"tempData.chosenFields\">\n" +
   "                <div ng-repeat=\"field in tempData.chosenFields\" class=\"formulate-mapped-field\">\n" +
   "                    <i class=\"icon-navigation formulate-mapped-field-drag\"></i>\n" +
   "                    <input class=\"formulate-mapped-field-alias\" type=\"text\" ng-model=\"field.storedField.name\" size=\"{{field.storedField.name.length + field.fieldName.length + 3}}\" />\n" +
   "                    <button type=\"button\" class=\"btn btn-danger formulate-mapped-field-delete\" ng-click=\"deleteField($index)\">X</button>\n" +
   "                    <div class=\"formulate-mapped-field-name\">\n" +
   "                        {{field.fieldName}}\n" +
   "                    </div>\n" +
   "                </div>\n" +
   "            </div>\n" +
   "            <button type=\"button\" class=\"btn btn-default\" ng-click=\"addField()\" ng-disabled=\"!tempData.chosenField\">\n" +
   "                <localize key=\"formulate-buttons_Add Field\">\n" +
   "                    Add Field\n" +
   "                </localize>\n" +
   "            </button>\n" +
   "            <select ng-options=\"field.id as field.name for field in fields | filter: {id: '!!'}\" ng-model=\"tempData.chosenField\">\n" +
   "                <option value=\"\" formulate-inject-localization=\"formulate-options_Select a Field\"></option>\n" +
   "            </select>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Result Handler\">\n" +
   "                Result Handler\n" +
   "            </localize>\n" +
   "            <small>\n" +
   "                <localize key=\"formulate-label-descriptions_Result Handler\">\n" +
   "                    Optional. The function that should be called to process the result of the web request.\n" +
   "                </localize>\n" +
   "            </small>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <div>\n" +
   "                <select ng-options=\"option.className as option.name for option in resultHandlers\" ng-model=\"configuration.resultHandler\">\n" +
   "                    <option value=\"\" formulate-inject-localization=\"formulate-options_Select a Function\">\n" +
   "                    </option>\n" +
   "                </select>\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "</div>";

directives["handlers/storeDataHandler/storeDataHandler.html"] = "<div></div>";

directives["install/install.html"] = "<formulate-localize-content key=\"formulate-info-pages_Install\">\n" +
   "</formulate-localize-content>";

directives["layoutDesigner/designer.html"] = "<form novalidate name=\"layoutForm\"\n" +
   "      val-form-manager>\n" +
   "    <umb-panel umb-tabs>\n" +
   "        <umb-header tabs=\"info.tabs\">\n" +
   "\n" +
   "            <div class=\"span7\">\n" +
   "\n" +
   "                <!-- Layout name. -->\n" +
   "                <umb-content-name\n" +
   "                    ng-model=\"info.layoutName\"\n" +
   "                    placeholder=\"@formulate-placeholders_Layout Name\">\n" +
   "                </umb-content-name>\n" +
   "\n" +
   "            </div>\n" +
   "        </umb-header>\n" +
   "        <umb-tab-view>\n" +
   "            <umb-tab id=\"tab4\" rel=\"{{4}}\">\n" +
   "                <div class=\"umb-pane\">\n" +
   "\n" +
   "                    <!-- Layout alias. -->\n" +
   "                    <fieldset>\n" +
   "                        <legend>\n" +
   "                            <h2>\n" +
   "                                <localize key=\"formulate-headers_Layout Information\">\n" +
   "                                    Layout Information\n" +
   "                                </localize>\n" +
   "                            </h2>\n" +
   "                        </legend>\n" +
   "                        <div class=\"control-group umb-control-group\">\n" +
   "                            <div class=\"umb-el-wrap\">\n" +
   "                                <label class=\"control-label\">\n" +
   "                                    <localize key=\"formulate-labels_Layout Alias\">\n" +
   "                                        Layout Alias\n" +
   "                                    </localize>\n" +
   "                                </label>\n" +
   "                                <div class=\"controls controls-row\">\n" +
   "                                    <input ng-model=\"info.layoutAlias\"\n" +
   "                                           type=\"text\"\n" +
   "                                           formulate-localize-attribute=\"placeholder\"\n" +
   "                                           placeholder=\"formulate-placeholders_Layout Alias\" />\n" +
   "                                </div>\n" +
   "                            </div>\n" +
   "                        </div>\n" +
   "                    </fieldset>\n" +
   "\n" +
   "                    <!-- Layout. -->\n" +
   "                    <formulate-layout-editor\n" +
   "                        ng-if=\"directive\"\n" +
   "                        directive=\"directive\"\n" +
   "                        data=\"data\">\n" +
   "                    </formulate-layout-editor>\n" +
   "\n" +
   "                    <!-- Save button. -->\n" +
   "                    <br>\n" +
   "                    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"save()\" ng-disabled=\"!canSave()\" prevent-default>\n" +
   "                        <localize key=\"formulate-buttons_Save\">\n" +
   "                            Save\n" +
   "                        </localize>\n" +
   "                    </button>\n" +
   "\n" +
   "                </div>\n" +
   "            </umb-tab>\n" +
   "        </umb-tab-view>\n" +
   "    </umb-panel>\n" +
   "</form>";

directives["layoutEditor/layoutEditor.html"] = "<div></div>";

directives["layoutKinds/layoutBasic/layoutBasic.html"] = "<div>\n" +
   "    <div>\n" +
   "\n" +
   "        <!-- Buttons (pick form, and edit rows). -->\n" +
   "        <button type=\"button\" class=\"btn btn-default\" ng-click=\"pickForm()\">Pick Form</button>\n" +
   "        <button ng-if=\"!editRows\" type=\"button\" class=\"btn btn-default\" ng-click=\"toggleEditRows()\">\n" +
   "            <localize key=\"formulate-labels_Edit Rows\">\n" +
   "                Edit Rows\n" +
   "            </localize>\n" +
   "        </button>\n" +
   "        <button ng-if=\"editRows\" type=\"button\" class=\"btn btn-default\" ng-click=\"toggleEditRows()\">\n" +
   "            <localize key=\"formulate-labels_Edit Fields\">\n" +
   "                Edit Fields\n" +
   "            </localize>\n" +
   "        </button>\n" +
   "\n" +
   "        <!-- Add row section. -->\n" +
   "        <div class=\"formulate-add-row-section\">\n" +
   "\n" +
   "            <!-- Add row instructions. -->\n" +
   "            <p>\n" +
   "                <localize key=\"formulate-instructions_Add Sample Columns Below\">\n" +
   "                    The row will be added using the columns that you specify below.\n" +
   "                    Click a cell to split or join adjacent cells.\n" +
   "                </localize>\n" +
   "            </p>\n" +
   "\n" +
   "            <!-- Add row button. -->\n" +
   "            <button type=\"button\" class=\"btn btn-default btn-add-row\" ng-click=\"addRow(sampleCells)\">\n" +
   "                <localize key=\"formulate-buttons_Click to Add Row\">\n" +
   "                    Click to Add Row\n" +
   "                </localize>\n" +
   "            </button>\n" +
   "\n" +
   "            <!-- Sample cells for new rows. -->\n" +
   "            <div class=\"row sample-cells\">\n" +
   "                <div ng-repeat=\"cell in sampleCells\" class=\"span1\">\n" +
   "                    <div ng-class=\"getSampleCellClasses(sampleCells, $index)\" ng-click=\"toggleCell(sampleCells, $index)\">\n" +
   "                        {{$index + 1}}\n" +
   "                    </div>\n" +
   "                </div>\n" +
   "            </div>\n" +
   "\n" +
   "        </div>\n" +
   "\n" +
   "    </div>\n" +
   "    <h2>\n" +
   "        <localize key=\"formulate-headers_Layout\">\n" +
   "            Layout\n" +
   "        </localize>\n" +
   "        <small>\n" +
   "            <localize key=\"formulate-header-descriptions_Layout\">\n" +
   "                Organize your fields into rows and columns.\n" +
   "            </localize>\n" +
   "        </small>\n" +
   "    </h2>\n" +
   "    <div ui-sortable=\"rowsSortableOptions\" ng-model=\"rows\">\n" +
   "        <div ng-repeat=\"(rowIndex, row) in rows\" class=\"row\">\n" +
   "            <div ng-repeat=\"cell in row.cells\" ng-class=\"getCellClass(row, cell)\">\n" +
   "\n" +
   "                <!-- Show full fields when editing fields. -->\n" +
   "                <div ng-if=\"!editRows\" class=\"formulate-cell\" ui-sortable=\"fieldSortableOptions\" ng-model=\"cell.fields\">\n" +
   "                    <div ng-repeat=\"field in cell.fields\" class=\"formulate-cell-field\">\n" +
   "                        {{field.name}}\n" +
   "                    </div>\n" +
   "                </div>\n" +
   "\n" +
   "                <!-- Show field summaries when editing rows. -->\n" +
   "                <div ng-if=\"editRows\" class=\"formulate-cell editing-rows\">\n" +
   "                    <span ng-repeat=\"field in cell.fields\" class=\"formulate-cell-field\">\n" +
   "                        <span class=\"formulate-cell-field-name\">{{field.name}}</span>\n" +
   "                    </span>\n" +
   "                    <div>\n" +
   "                        <button type=\"button\" ng-click=\"deleteRow(rowIndex)\" ng-if=\"$index === 0\" class=\"btn btn-danger\">\n" +
   "                            <localize key=\"formulate-buttons_Delete Row\">\n" +
   "                                Delete Row\n" +
   "                            </localize>\n" +
   "                        </button>\n" +
   "                    </div>\n" +
   "                </div>\n" +
   "\n" +
   "            </div>\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div>\n" +
   "        <h2>\n" +
   "            <localize key=\"formulate-headers_Unused Fields\">\n" +
   "                Unused Fields\n" +
   "            </localize>\n" +
   "            <small>\n" +
   "                <localize key=\"formulate-header-descriptions_Unused Fields\">\n" +
   "                    These are the fields you are not using for this layout.\n" +
   "                </localize>\n" +
   "            </small>\n" +
   "        </h2>\n" +
   "\n" +
   "        <!-- Unused fields. -->\n" +
   "        <div class=\"formulate-cell\" ui-sortable=\"fieldSortableOptions\" ng-model=\"unusedFields\">\n" +
   "            <div ng-repeat=\"field in unusedFields\" class=\"formulate-cell-field\">\n" +
   "                <button type=\"button\" class=\"btn btn-default formulate-btn-use\" ng-click=\"useField($index)\">\n" +
   "                    <localize key=\"formulate-buttons_Use\">\n" +
   "                        Use\n" +
   "                    </localize>\n" +
   "                </button>\n" +
   "                {{field.name}}\n" +
   "            </div>\n" +
   "        </div>\n" +
   "\n" +
   "    </div>\n" +
   "</div>";

directives["layoutTypeChooser/layoutChooser.html"] = "<div>\n" +
   "    <label>\n" +
   "        <localize key=\"formulate-labels_Layout Name:\">\n" +
   "            Layout Name:\n" +
   "        </localize>\n" +
   "        <div>\n" +
   "            <input type=\"text\" ng-model=\"layoutName\" />\n" +
   "        </div>\n" +
   "    </label>\n" +
   "</div>\n" +
   "<div>\n" +
   "    <label>\n" +
   "        <localize key=\"formulate-labels_Layout Alias:\">\n" +
   "            Layout Alias:\n" +
   "        </localize>\n" +
   "        <div>\n" +
   "            <input type=\"text\" ng-model=\"layoutAlias\" />\n" +
   "        </div>\n" +
   "    </label>\n" +
   "</div>\n" +
   "<select ng-model=\"kind.id\">\n" +
   "    <option ng-repeat=\"option in kind.kinds\" value=\"{{option.id}}\">\n" +
   "        {{option.name}}\n" +
   "    </option>\n" +
   "</select>\n" +
   "<div>\n" +
   "    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canCreate()\" ng-click=\"createLayout()\">\n" +
   "        <localize key=\"formulate-buttons_Create Layout\">\n" +
   "            Create Layout\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "</div>";

directives["rootEntityOverview/rootEntityOverview.html"] = "<umb-pane>\n" +
   "    <div ng-transclude>\n" +
   "    </div>\n" +
   "</umb-pane>";

directives["validationDesigner/designer.html"] = "<form novalidate name=\"validationForm\"\n" +
   "      val-form-manager>\n" +
   "    <umb-panel umb-tabs>\n" +
   "        <umb-header tabs=\"info.tabs\">\n" +
   "\n" +
   "            <div class=\"span7\">\n" +
   "\n" +
   "                <!-- Validation name. -->\n" +
   "                <umb-content-name\n" +
   "                    ng-model=\"info.validationName\"\n" +
   "                    placeholder=\"@formulate-placeholders_Validation Name\">\n" +
   "                </umb-content-name>\n" +
   "\n" +
   "            </div>\n" +
   "        </umb-header>\n" +
   "        <umb-tab-view>\n" +
   "            <umb-tab id=\"tab3\" rel=\"{{3}}\">\n" +
   "                <div class=\"umb-pane\">\n" +
   "\n" +
   "                    <!-- Validation alias. -->\n" +
   "                    <fieldset>\n" +
   "                        <legend>\n" +
   "                            <h2>\n" +
   "                                <localize key=\"formulate-headers_Validation Information\">\n" +
   "                                    Validation Information\n" +
   "                                </localize>\n" +
   "                            </h2>\n" +
   "                        </legend>\n" +
   "                        <div class=\"control-group umb-control-group\">\n" +
   "                            <div class=\"umb-el-wrap\">\n" +
   "                                <label class=\"control-label\">\n" +
   "                                    <localize key=\"formulate-labels_Validation Alias\">\n" +
   "                                        Validation Alias\n" +
   "                                    </localize>\n" +
   "                                </label>\n" +
   "                                <div class=\"controls controls-row\">\n" +
   "                                    <input\n" +
   "                                        ng-model=\"info.validationAlias\"\n" +
   "                                        type=\"text\"\n" +
   "                                        class=\"form-control input-block-level\"\n" +
   "                                        formulate-localize-attribute=\"placeholder\"\n" +
   "                                        placeholder=\"formulate-placeholders_Validation Alias\" />\n" +
   "                                </div>\n" +
   "                            </div>\n" +
   "                        </div>\n" +
   "                    </fieldset>\n" +
   "\n" +
   "                    <!-- Validation. -->\n" +
   "                    <formulate-validation-editor\n" +
   "                        ng-if=\"directive\"\n" +
   "                        directive=\"directive\"\n" +
   "                        data=\"data\">\n" +
   "                    </formulate-validation-editor>\n" +
   "\n" +
   "                    <!-- Save button. -->\n" +
   "                    <br>\n" +
   "                    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"save()\" ng-disabled=\"!canSave()\" prevent-default>\n" +
   "                        <localize key=\"formulate-buttons_Save\">\n" +
   "                            Save\n" +
   "                        </localize>\n" +
   "                    </button>\n" +
   "\n" +
   "                </div>\n" +
   "            </umb-tab>\n" +
   "        </umb-tab-view>\n" +
   "    </umb-panel>\n" +
   "</form>";

directives["validationEditor/validationEditor.html"] = "<div></div>";

directives["validationKinds/validationMandatory/validationMandatory.html"] = "<div class=\"control-group umb-control-group\">\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Error Message\">\n" +
   "                Error Message\n" +
   "            </localize>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <input\n" +
   "                ng-model=\"data.message\"\n" +
   "                formulate-localize-attribute=\"placeholder\"\n" +
   "                placeholder=\"formulate-placeholders_Error Message\"\n" +
   "                class=\"form-control input-block-level\" />\n" +
   "        </div>\n" +
   "    </div>\n" +
   "</div>";

directives["validationKinds/validationRegex/validationRegex.html"] = "<div class=\"control-group umb-control-group\">\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Regular Expression\">\n" +
   "                Regular Expression\n" +
   "            </localize>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <input\n" +
   "                ng-model=\"data.regex\"\n" +
   "                formulate-localize-attribute=\"placeholder\"\n" +
   "                placeholder=\"formulate-placeholders_Regular Expression\"\n" +
   "                class=\"form-control input-block-level\" />\n" +
   "        </div>\n" +
   "    </div>\n" +
   "    <div class=\"umb-el-wrap\">\n" +
   "        <label class=\"control-label\">\n" +
   "            <localize key=\"formulate-labels_Error Message\">\n" +
   "                Error Message\n" +
   "            </localize>\n" +
   "        </label>\n" +
   "        <div class=\"controls controls-row\">\n" +
   "            <input\n" +
   "                ng-model=\"data.message\"\n" +
   "                formulate-localize-attribute=\"placeholder\"\n" +
   "                placeholder=\"formulate-placeholders_Error Message\"\n" +
   "                class=\"form-control input-block-level\" />\n" +
   "        </div>\n" +
   "    </div>\n" +
   "</div>";

directives["validationTypeChooser/validationChooser.html"] = "<div>\n" +
   "    <label>\n" +
   "        <localize key=\"formulate-labels_Validation Name:\">\n" +
   "            Validation Name:\n" +
   "        </localize>\n" +
   "        <div>\n" +
   "            <input type=\"text\" ng-model=\"validationName\" />\n" +
   "        </div>\n" +
   "    </label>\n" +
   "</div>\n" +
   "<div>\n" +
   "    <label>\n" +
   "        <localize key=\"formulate-labels_Validation Alias:\">\n" +
   "            Validation Alias:\n" +
   "        </localize>\n" +
   "        <div>\n" +
   "            <input type=\"text\" ng-model=\"validationAlias\" />\n" +
   "        </div>\n" +
   "    </label>\n" +
   "</div>\n" +
   "<select ng-model=\"kind.id\">\n" +
   "    <option ng-repeat=\"option in kind.kinds\" value=\"{{option.id}}\">\n" +
   "        {{option.name}}\n" +
   "    </option>\n" +
   "</select>\n" +
   "<div>\n" +
   "    <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!canCreate()\" ng-click=\"createValidation()\">\n" +
   "        <localize key=\"formulate-buttons_Create Validation\">\n" +
   "            Create Validation\n" +
   "        </localize>\n" +
   "    </button>\n" +
   "</div>";

directives["viewSubmissions/viewSubmissions.html"] = "<form\n" +
   "    novalidate name=\"submissionsForm\"\n" +
   "    val-form-manager>\n" +
   "    <umb-panel umb-tabs>\n" +
   "        <umb-header tabs=\"info.tabs\">\n" +
   "\n" +
   "            <div class=\"span7\">\n" +
   "\n" +
   "                <!-- Submissions Header. -->\n" +
   "                <umb-content-name\n" +
   "                    ng-disabled=\"true\"\n" +
   "                    ng-model=\"info.header\">\n" +
   "                </umb-content-name>\n" +
   "\n" +
   "            </div>\n" +
   "        </umb-header>\n" +
   "        <umb-tab-view>\n" +
   "            <umb-tab id=\"tab6\" rel=\"{{6}}\">\n" +
   "                <div class=\"umb-pane\">\n" +
   "\n" +
   "                    <button type=\"button\" class=\"btn btn-default\" ng-click=\"pickForm()\">Pick Form</button>\n" +
   "                    <a ng-if=\"formId\" class=\"btn btn-primary\" ng-href=\"{{getExportUrl(formId)}}\">Export to CSV</a>\n" +
   "                    <p ng-if=\"!submissions.length\" class=\"form-submissions-none\">\n" +
   "                        No form submissions to show.\n" +
   "                    </p>\n" +
   "                    <table class=\"form-submissions-table\" ng-if=\"submissions.length\">\n" +
   "                        <thead>\n" +
   "                        <tr>\n" +
   "                            <th>\n" +
   "                                Creation Date\n" +
   "                            </th>\n" +
   "                            <th>\n" +
   "                                Page\n" +
   "                            </th>\n" +
   "                            <th>\n" +
   "                                Field Values\n" +
   "                            </th>\n" +
   "                            <th>\n" +
   "                                File Values\n" +
   "                            </th>\n" +
   "                        </tr>\n" +
   "                        </thead>\n" +
   "                        <tbody>\n" +
   "                        <tr ng-repeat=\"submission in submissions\" ng-class=\"getRowClass($index)\">\n" +
   "                            <td class=\"form-submission-cell\">\n" +
   "                                {{submission.creationDate}}\n" +
   "                            </td>\n" +
   "                            <td class=\"form-submission-cell\">\n" +
   "                                <a ng-href=\"{{submission.url}}\">{{submission.url}}</a>\n" +
   "                                <span ng-if=\"submission.pageId\">\n" +
   "                                (<a ng-href=\"{{getNodeUrl(submission.pageId)}}\">View Content Page</a>)\n" +
   "                            </span>\n" +
   "                            </td>\n" +
   "                            <td class=\"form-submission-cell\">\n" +
   "                                <table>\n" +
   "                                    <tbody>\n" +
   "                                    <tr ng-repeat=\"field in submission.fields\">\n" +
   "                                        <th class=\"form-submission-field-header\">\n" +
   "                                            {{field.name}}\n" +
   "                                        </th>\n" +
   "                                        <td class=\"form-submission-field-cell\">\n" +
   "                                            {{field.value}}\n" +
   "                                        </td>\n" +
   "                                    </tr>\n" +
   "                                    </tbody>\n" +
   "                                </table>\n" +
   "                            </td>\n" +
   "                            <td class=\"form-submission-cell\">\n" +
   "                                <table ng-repeat=\"file in submission.files\">\n" +
   "                                    <tbody>\n" +
   "                                    <tr ng-repeat=\"file in submission.files\">\n" +
   "                                        <th class=\"form-submission-field-header\">\n" +
   "                                            {{file.name}}\n" +
   "                                        </th>\n" +
   "                                    </tr>\n" +
   "                                    <tr>\n" +
   "                                        <td class=\"form-submission-field-cell\">\n" +
   "                                            <a class=\"btn btn-default\" ng-href=\"{{file.path}}\">{{file.filename}}</a>\n" +
   "                                        </td>\n" +
   "                                    </tr>\n" +
   "                                    </tbody>\n" +
   "                                </table>\n" +
   "                            </td>\n" +
   "                        </tr>\n" +
   "                        </tbody>\n" +
   "                    </table>\n" +
   "                    <ul class=\"formulate-pager\">\n" +
   "                        <li ng-repeat=\"item in getPagerItems() track by $index\">\n" +
   "                            <button type=\"button\" ng-click=\"getPage(item.pageNumber)\" ng-class=\"getPagerItemClass(item.active)\" class=\"btn btn-default\">{{item.pageNumber}}</button>\n" +
   "                        </li>\n" +
   "                    </ul>\n" +
   "\n" +
   "                </div>\n" +
   "            </umb-tab>\n" +
   "        </umb-tab-view>\n" +
   "    </umb-panel>\n" +
   "</form>";

},{}],2:[function(require,module,exports){
//TODO: Disable buttons during configured form save.
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["$scope", "$routeParams", "$route", "formulateTrees", "formulateConfiguredForms", "$location", "formulateTemplates", "dialogService", "formulateLayouts", "formulateLocalization"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateConfiguredFormDesigner", directive);
app.controller("formulate.configuredFormDesigner", controller);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("configuredFormDesigner/designer.html"),
        controller: "formulate.configuredFormDesigner"
    };
}

// Controller.
function controller($scope, $routeParams, $route, formulateTrees,
    formulateConfiguredForms, $location, formulateTemplates, dialogService,
    formulateLayouts, formulateLocalization) {

    // Variables.
    var id = $routeParams.id;
    var isNew = id === "null";
    var parentId = $routeParams.under;
    var hasParent = !!parentId;
    var services = {
        formulateTrees: formulateTrees,
        formulateConfiguredForms: formulateConfiguredForms,
        formulateTemplates: formulateTemplates,
        dialogService: dialogService,
        formulateLayouts: formulateLayouts,
        $scope: $scope,
        $route: $route,
        $location: $location
    };

    // Set scope variables.
    $scope.isNew = isNew;
    $scope.info = {
        conFormName: null,
        tabs: [
            {
                id: 20,
                active: true,
                label: "Configured Form",
                alias: "configuredForm"
            }
        ]
    };
    $scope.parentId = null;
    $scope.template = {
        id: null,
        templates: []
    };
    if (!isNew) {
        $scope.conFormId = id;
    }
    if (hasParent) {
        $scope.parentId = parentId;
    }

    // Tabs need to be translated.
    formulateLocalization.localizeTabs($scope.info.tabs);

    // Set scope functions.
    $scope.save = getSaveConfiguredForm(services);
    $scope.canSave = getCanSave(services);
    $scope.pickLayout = getPickLayout(services);

    // Initializes configured form.
    initializeConfiguredForm({
        id: id,
        isNew: isNew
    }, services);

    // Handle events.
    handleConfiguredFormMoves(services);

    // Populate templates.
    populateTemplates(services);

}

// Populate the templates.
function populateTemplates(services) {
    services.formulateTemplates.getTemplates().then(function (data) {
        services.$scope.template.templates = data.map(function (item) {
            return {
                id: item.id,
                name: item.name
            };
        });
    });
}

// Handles updating a configured form when it's moved.
function handleConfiguredFormMoves(services) {
    var $scope = services.$scope;
    $scope.$on("formulateEntityMoved", function(event, data) {
        var id = data.id;
        var newPath = data.path;
        if ($scope.conFormId === id) {

            // Store new path.
            $scope.conFormPath = newPath;

            // Activate in tree.
            services.formulateTrees.activateEntity(data);

        }
    });
}

// Saves the configured form.
function getSaveConfiguredForm(services) {
    return function () {

        // Variables.
        var $scope = services.$scope;
        var parentId = getParentId($scope);

        // Get configured form data.
        var conFormData = {
            parentId: parentId,
            conFormId: $scope.conFormId,
            name: $scope.info.conFormName,
            layoutId: $scope.layoutId,
            templateId: $scope.template.id
        };

        // Persist configured form on server.
        services.formulateConfiguredForms.persistConfiguredForm(conFormData)
            .then(function(responseData) {

                // Configured form is no longer new.
                var isNew = $scope.isNew;
                $scope.isNew = false;

                // Prevent "discard" notification.
                $scope.formulateConfiguredFormDesigner.$dirty = false;

                // Redirect or reload page.
                if (isNew) {
                    var url = "/formulate/formulate/editConfiguredForm/"
                        + responseData.id;
                    services.$location.url(url);
                } else {

                    // Even existing configured forms reload (e.g., to get new data).
                    services.$route.reload();

                }

            });

    };
}

// Gets the ID path to the configured form.
function getConfiguredFormPath($scope) {
    var path = $scope.conFormPath;
    if (!path) {
        path = [];
    }
    return path;
}

// Gets the ID of the configured form's parent.
function getParentId($scope) {
    if ($scope.parentId) {
        return $scope.parentId;
    }
    var path = getConfiguredFormPath($scope);
    var parentId = path.length > 0
        ? path[path.length - 2]
        : null;
    return parentId;
}

// Initializes the configured form.
function initializeConfiguredForm(options, services) {

    // Variables.
    var id = options.id;
    var $scope = services.$scope;
    var isNew = options.isNew;

    // Is this a new configured form?
    if (isNew) {

        // The configured form can be saved now.
        $scope.initialized = true;

    } else {

        // Disable configured form saving until the data is populated.
        $scope.initialized = false;

        // Get the configured form info.
        services.formulateConfiguredForms.getConfiguredFormInfo(id)
            .then(function(conForm) {

                // Update tree.
                services.formulateTrees.activateEntity(conForm);

                // Set the configured form info.
                $scope.conFormId = conForm.conFormId;
                $scope.info.conFormName = conForm.name;
                $scope.conFormPath = conForm.path;
                $scope.layoutId = conForm.layoutId;
                $scope.template.id = conForm.templateId;

                // The configured form can be saved now.
                $scope.initialized = true;

                // Refresh layout info.
                refreshLayoutInfo(conForm.layoutId, services);

            });
    }

}

// Returns the function that indicates whether or not the configured form can be saved.
function getCanSave(services) {
    return function() {
        return services.$scope.initialized;
    };
}

// Returns the function that allows the user to pick a form.
function getPickLayout(services) {
    var dialogService = services.dialogService;
    var $scope = services.$scope;
    return function() {
        dialogService.open({
            template: "../App_Plugins/formulate/dialogs/pickLayout.html",
            show: true,
            callback: function(data) {

                // If no layout was chosen, unchoose layout.
                if (!data.length) {
                    $scope.layoutId = null;
                    $scope.layoutName = null;
                    return;
                }

                // Store layout.
                var layoutId = data[0];
                $scope.layoutId = layoutId;

                // Refresh layout information.
                refreshLayoutInfo(layoutId, services);

            }
        });
    };
}

// Gets the layout name and sets it on the scope.
function refreshLayoutInfo(layoutId, services) {
    if (!layoutId) {
        return;
    }
    services.formulateLayouts.getLayoutInfo(layoutId).then(function (data) {
        services.$scope.layoutName = data.name;
    });
}
},{}],3:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "$location", "$q", "$http", "navigationService", "formulateFolders", "treeService"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.createFolder", controller);
app.directive("formulateCreateFolder", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("createFolder/createFolder.html"),
        controller: "formulate.createFolder"
    };
}

// Controller.
function controller($scope, $location, $q, $http, navigationService,
    formulateFolders, treeService) {

    // Variable containing the common services (easier to pass around).
    var services = {
        $scope: $scope,
        $location: $location,
        $q: $q,
        $http: $http,
        navigationService: navigationService,
        formulateFolders: formulateFolders,
        treeService: treeService
    };

    // Assign functions on scope.
    $scope.createFolder = getCreateFolder(services);
    $scope.cancel = getCancel(services);

}

// Returns a function that creates a folder.
function getCreateFolder(services) {
    return function() {

        // Variables.
        var parentId = services.$scope.currentNode.id;
        var folderName = services.$scope.folderName;
        var folderPromise = services.formulateFolders
            .createFolder({
                parentId: parentId,
                folderName: folderName
            });

        // Once we have created the folder...
        folderPromise.then(function (folder) {

            // Variables.
            var path = folder.path;

            // Update tree.
            var options = {
                tree: "formulate",
                path: path,
                forceReload: true,
                activate: false
            };
            services.navigationService.syncTree(options);

            // Close dialog.
            services.navigationService.hideDialog();

        });

    };
}

// Returns the function that cancels the creation.
function getCancel(services) {
    return function () {
        services.navigationService.hideDialog();
    };
}
},{}],4:[function(require,module,exports){
//TODO: Disable buttons during data value save.
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["$scope", "$routeParams", "$route", "formulateTrees", "formulateDataValues", "formulateLocalization"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateDataValueDesigner", directive);
app.controller("formulate.dataValueDesigner", controller);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("dataValueDesigner/designer.html"),
        controller: "formulate.dataValueDesigner"
    };
}

// Controller.
function controller($scope, $routeParams, $route, formulateTrees,
    formulateDataValues, formulateLocalization) {

    // Variables.
    var id = $routeParams.id;
    var services = {
        $routeParams: $routeParams,
        formulateTrees: formulateTrees,
        formulateDataValues: formulateDataValues,
        $scope: $scope,
        $route: $route
    };

    // Set scope variables.
    $scope.dataValueId = id;
    $scope.info = {
        dataValueName: null,
        dataValueAlias: null,
        tabs: [
            {
                id: 1,
                active: true,
                label: "Data Value",
                alias: "dataValue"
            }
        ]
    };
    $scope.kindId = null;
    $scope.parentId = null;
    $scope.directive = null;
    $scope.data = null;

    // Tabs need to be translated.
    formulateLocalization.localizeTabs($scope.info.tabs);

    // Set scope functions.
    $scope.save = getSaveDataValue(services);
    $scope.canSave = getCanSave(services);

    // Initializes data value.
    initializeDataValue({
        id: id
    }, services);

    // Handle events.
    handleDataValueMoves(services);

}

// Handles updating a data value when it's moved.
function handleDataValueMoves(services) {
    var $scope = services.$scope;
    $scope.$on("formulateEntityMoved", function(event, data) {
        var id = data.id;
        var newPath = data.path;
        if ($scope.dataValueId === id) {

            // Store new path.
            $scope.dataValuePath = newPath;

            // Activate in tree.
            services.formulateTrees.activateEntity(data);

        }
    });
}

// Saves the data value.
function getSaveDataValue(services) {
    return function () {

        // Variables.
        var $scope = services.$scope;
        var parentId = getParentId($scope);

        // Get data value data.
        var dataValueData = {
            parentId: parentId,
            kindId: $scope.kindId,
            dataValueId: $scope.dataValueId,
            alias: $scope.info.dataValueAlias,
            name: $scope.info.dataValueName,
            data: angular.fromJson(angular.toJson($scope.data))
        };

        // Persist data value on server.
        services.formulateDataValues.persistDataValue(dataValueData)
            .then(function(responseData) {

                // Data value is no longer new.
                var isNew = $scope.isNew;
                $scope.isNew = false;

                // Redirect or reload page.
                if (isNew) {
                    var url = "/formulate/formulate/editDataValue/"
                        + responseData.dataValueId;
                    services.$location.url(url);
                } else {

                    // Even existing data values reload (e.g., to get new data).
                    services.$route.reload();

                }

            });

    };
}

// Gets the ID path to the data value.
function getDataValuePath($scope) {
    var path = $scope.dataValuePath;
    if (!path) {
        path = [];
    }
    return path;
}

// Gets the ID of the data value's parent.
function getParentId($scope) {
    if ($scope.parentId) {
        return $scope.parentId;
    }
    var path = getDataValuePath($scope);
    var parentId = path.length > 0
        ? path[path.length - 2]
        : null;
    return parentId;
}

// Initializes the data value.
function initializeDataValue(options, services) {

    // Variables.
    var id = options.id;
    var $scope = services.$scope;

    // Disable data value saving until the data is populated.
    $scope.initialized = false;

    // Get the data value info.
    services.formulateDataValues.getDataValueInfo(id)
        .then(function(dataValue) {

            // Update tree.
            services.formulateTrees.activateEntity(dataValue);

            // Set the dataValue info.
            $scope.kindId = dataValue.kindId;
            $scope.dataValueId = dataValue.dataValueId;
            $scope.info.dataValueAlias = dataValue.alias;
            $scope.info.dataValueName = dataValue.name;
            $scope.dataValuePath = dataValue.path;
            $scope.directive = dataValue.directive;
            $scope.data = dataValue.data;

            // The data value can be saved now.
            $scope.initialized = true;

        });

}

// Returns the function that indicates whether or not the data value
// can be saved.
function getCanSave(services) {
    return function() {
        return services.$scope.initialized;
    };
}
},{}],5:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives", "$compile"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateDataValueEditor", directive);

// Directive.
function directive(formulateDirectives, $compile) {
    return {
        restrict: "E",
        template: formulateDirectives.get("dataValueEditor/dataValueEditor.html"),
        replace: true,
        scope: {
            directive: "=",
            data: "="
        },
        link: function (scope, element) {

            // Create directive.
            var markup = "<" + scope.directive + " data=\"data\"></" + scope.directive + ">";
            var directive = $compile(markup)(scope);
            element.replaceWith(directive);

        }
    };
}
},{}],6:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["$scope", "formulateDataValues"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateDataValueListFunction", directive);
app.controller("formulate.dataValueListFunction", controller);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get(
            "dataValueKinds/dataValueListFunction/dataValueListFunction.html"),
        scope: {
            data: "="
        },
        controller: "formulate.dataValueListFunction"
    };
}

// Controller.
function controller($scope, formulateDataValues) {
    if (!$scope.data.hasOwnProperty("supplier")) {
        $scope.data.supplier = null;
    }
    formulateDataValues.getSuppliers().then(function (suppliers) {
        $scope.suppliers = suppliers;
    });
}
},{}],7:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["$scope"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateDataValueList", directive);
app.controller("formulate.dataValueList", controller);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get(
            "dataValueKinds/dataValueList/dataValueList.html"),
        scope: {
            data: "="
        },
        controller: "formulate.dataValueList"
    };
}

// Controller.
function controller($scope) {
    if (!$scope.data.items) {
        $scope.data.items = [];
    }
    $scope.addItem = function () {
        $scope.data.items.push({
            value: null
        });
    };
    $scope.deleteItem = function (index) {
        $scope.data.items.splice(index, 1);
    };
}
},{}],8:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["$scope"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateDataValuePairList", directive);
app.controller("formulate.dataValuePairList", controller);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get(
            "dataValueKinds/dataValuePairList/dataValuePairList.html"),
        scope: {
            data: "="
        },
        controller: "formulate.dataValuePairList"
    };
}

// Controller.
function controller($scope) {
    if (!$scope.data.items) {
        $scope.data.items = [];
    }
    $scope.addItem = function () {
        $scope.data.items.push({
            primary: null,
            secondary: null
        });
    };
    $scope.deleteItem = function (index) {
        $scope.data.items.splice(index, 1);
    };
}
},{}],9:[function(require,module,exports){
// Variables.
Controller.$inject = ["$scope", "$location", "$q", "$http", "navigationService", "formulateDataValues", "formulateVars"];
Directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.dataValueTypeChooser", Controller);
app.directive("formulateDataValueTypeChooser", Directive);

// Directive.
function Directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("dataValueTypeChooser/dataValueChooser.html"),
        controller: "formulate.dataValueTypeChooser"
    };
}

// Controller.
function Controller($scope, $location, $q, $http,
    navigationService, formulateDataValues, formulateVars) {

    // Variable containing the common services (easier to pass around).
    var services = {
        $scope: $scope,
        $location: $location,
        $q: $q,
        $http: $http,
        navigationService: navigationService,
        formulateDataValues: formulateDataValues,
        formulateVars: formulateVars
    };

    // Assign variables to scope.
    $scope.dataValueName = null;
    $scope.dataValueAlias = null;
    $scope.kind = {
        id: null,
        kinds: []
    };
    setDataValueKinds(services);

    // Assign functions on scope.
    $scope.createDataValue = getCreateDataValue(services);
    $scope.canCreate = getCanCreate(services);

}

// Sets the data value kinds on the scope.
function setDataValueKinds(services) {
    services.formulateDataValues.getKinds().then(function (data) {
        services.$scope.kind.kinds = data.map(function (item) {
            return {
                id: item.id,
                name: item.name
            };
        });
    });
}

// Returns a function that creates a new data value.
function getCreateDataValue(services) {
    var $scope = services.$scope;
    return function() {
        var parentId = $scope.currentNode.id;
        var dataValueInfo = {
            parentId: parentId,
            kindId: $scope.kind.id,
            name: $scope.dataValueName,
            alias: $scope.dataValueAlias,
            data: {}
        };
        addNodeToTree(dataValueInfo, services)
            .then(function (node) {
                navigateToNode(node, services);
                services.navigationService.hideDialog();
            });
    };
}

// Adds a new node to the data value tree.
function addNodeToTree(dataValueInfo, services) {
    return services.formulateDataValues.persistDataValue(dataValueInfo)
        .then(function (node) {

            // Refresh tree.
            var options = {
                tree: "formulate",
                path: node.path,
                forceReload: false,
                activate: true
            };
            services.navigationService.syncTree(options);

            // Return node.
            return node;

        },function () {
            services.$q.reject();
        });
}

// Navigates to a node.
function navigateToNode(node, services) {
    var nodeId = node.id;
    var url = services.formulateVars.EditDataValueBase + nodeId;
    services.$location.url(url);
}

// Returns a function that indicates whether or not the user can create.
function getCanCreate(services) {
    return function() {
        var dataValueName = services.$scope.dataValueName;
        var kindId = services.$scope.kind.id;
        //TODO: Check for whitespace and other edge cases that are invalid.
        if (dataValueName && kindId && dataValueName.length > 0) {
            return true;
        } else {
            return false;
        }
    };
}
},{}],10:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "$location", "$q", "$http", "navigationService", "formulateConfiguredForms", "treeService"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.deleteConfiguredFormConfirmation", controller);
app.directive("formulateDeleteConfiguredFormConfirmation", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("deleteConfiguredFormConfirmation/deleteConfiguredForm.html"),
        controller: "formulate.deleteConfiguredFormConfirmation"
    };
}

// Controller.
function controller($scope, $location, $q, $http, navigationService,
    formulateConfiguredForms, treeService) {

    // Variables.
    var conFormId = $scope.currentNode.id;

    // Variable containing the common services (easier to pass around).
    var services = {
        $scope: $scope,
        $location: $location,
        $q: $q,
        $http: $http,
        navigationService: navigationService,
        formulateConfiguredForms: formulateConfiguredForms,
        treeService: treeService
    };

    // Assign scope variables.
    $scope.initialized = false;

    // Assign functions on scope.
    $scope.deleteConfiguredForm = getDeleteConfiguredForm(services);
    $scope.cancel = getCancel(services);

    // Load configured form information.
    loadConfiguredFormInfo(conFormId, services);

}

// Loads information about the configured form.
function loadConfiguredFormInfo(conFormId, services) {
    services.formulateConfiguredForms.getConfiguredFormInfo(conFormId).then(function(conForm) {
        services.$scope.conFormId = conForm.conFormId;
        services.$scope.conFormName = conForm.name;
        services.$scope.initialized = true;
    });
}

// Returns a function that deletes a configured form.
function getDeleteConfiguredForm(services) {
    return function() {

        // Variables.
        var node = services.$scope.currentNode;
        var conFormId = services.$scope.conFormId;
        var conFormPromise = services.formulateConfiguredForms.getConfiguredFormInfo(conFormId);

        // Once we have the configured form information...
        conFormPromise.then(function (conForm) {

            // Variables.
            var path = conForm.path;
            var partialPath = path.slice(0, path.length - 1);

            // Delete configured form.
            services.formulateConfiguredForms.deleteConfiguredForm(conFormId)
                .then(function () {

                    // Remove the node from the tree.
                    services.treeService.removeNode(node);

                    // Update tree (down to the deleted configured form's parent).
                    var options = {
                        tree: "formulate",
                        path: partialPath,
                        forceReload: true,
                        activate: false
                    };
                    services.navigationService.syncTree(options);

                    // Close dialog.
                    services.navigationService.hideDialog();

                });

        });

    };
}

// Returns the function that cancels the deletion.
function getCancel(services) {
    return function () {
        services.navigationService.hideDialog();
    };
}
},{}],11:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "$location", "$q", "$http", "navigationService", "formulateDataValues", "treeService"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.deleteDataValueConfirmation", controller);
app.directive("formulateDeleteDataValueConfirmation", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("deleteDataValueConfirmation/deleteDataValue.html"),
        controller: "formulate.deleteDataValueConfirmation"
    };
}

// Controller.
function controller($scope, $location, $q, $http, navigationService,
    formulateDataValues, treeService) {

    // Variables.
    var dataValueId = $scope.currentNode.id;

    // Variable containing the common services (easier to pass around).
    var services = {
        $scope: $scope,
        $location: $location,
        $q: $q,
        $http: $http,
        navigationService: navigationService,
        formulateDataValues: formulateDataValues,
        treeService: treeService
    };

    // Assign scope variables.
    $scope.initialized = false;

    // Assign functions on scope.
    $scope.deleteDataValue = getDeleteDataValue(services);
    $scope.cancel = getCancel(services);

    // Load data value information.
    loadDataValueInfo(dataValueId, services);

}

// Loads information about the data value.
function loadDataValueInfo(dataValueId, services) {
    services.formulateDataValues.getDataValueInfo(dataValueId).then(function(dataValue) {
        services.$scope.dataValueId = dataValue.dataValueId;
        services.$scope.dataValueName = dataValue.name;
        services.$scope.initialized = true;
    });
}

// Returns a function that deletes a data value.
function getDeleteDataValue(services) {
    return function() {

        // Variables.
        var node = services.$scope.currentNode;
        var dataValueId = services.$scope.dataValueId;
        var dataValuePromise = services.formulateDataValues.getDataValueInfo(dataValueId);

        // Once we have the data value information...
        dataValuePromise.then(function (dataValue) {

            // Variables.
            var path = dataValue.path;
            var partialPath = path.slice(0, path.length - 1);

            // Delete data value.
            services.formulateDataValues.deleteDataValue(dataValueId)
                .then(function () {

                    // Remove the node from the tree.
                    services.treeService.removeNode(node);

                    // Update tree (down to the deleted dataValue's parent).
                    var options = {
                        tree: "formulate",
                        path: partialPath,
                        forceReload: true,
                        activate: false
                    };
                    services.navigationService.syncTree(options);

                    // Close dialog.
                    services.navigationService.hideDialog();

                });

        });

    };
}

// Returns the function that cancels the deletion.
function getCancel(services) {
    return function () {
        services.navigationService.hideDialog();
    };
}
},{}],12:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "$location", "$q", "$http", "navigationService", "formulateFolders", "treeService"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.deleteFolderConfirmation", controller);
app.directive("formulateDeleteFolderConfirmation", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("deleteFolderConfirmation/deleteFolder.html"),
        controller: "formulate.deleteFolderConfirmation"
    };
}

// Controller.
function controller($scope, $location, $q, $http, navigationService,
    formulateFolders, treeService) {

    // Variables.
    var folderId = $scope.currentNode.id;

    // Variable containing the common services (easier to pass around).
    var services = {
        $scope: $scope,
        $location: $location,
        $q: $q,
        $http: $http,
        navigationService: navigationService,
        formulateFolders: formulateFolders,
        treeService: treeService
    };

    // Assign scope variables.
    $scope.initialized = false;

    // Assign functions on scope.
    $scope.deleteFolder = getDeleteFolder(services);
    $scope.cancel = getCancel(services);

    // Load folder information.
    loadFolderInfo(folderId, services);

}

// Loads information about the folder.
function loadFolderInfo(folderId, services) {
    services.formulateFolders.getFolderInfo(folderId).then(function(folder) {
        services.$scope.folderId = folder.folderId;
        services.$scope.folderName = folder.name;
        services.$scope.initialized = true;
    });
}

// Returns a function that deletes a folder.
function getDeleteFolder(services) {
    return function() {

        // Variables.
        var node = services.$scope.currentNode;
        var folderId = services.$scope.folderId;
        var folderPromise = services.formulateFolders.getFolderInfo(folderId);

        // Once we have the folder information...
        folderPromise.then(function (folder) {

            // Variables.
            var path = folder.path;
            var partialPath = path.slice(0, path.length - 1);

            // Delete folder.
            services.formulateFolders.deleteFolder(folderId)
                .then(function () {

                    // Remove the node from the tree.
                    services.treeService.removeNode(node);

                    // Update tree (down to the deleted folder's parent).
                    var options = {
                        tree: "formulate",
                        path: partialPath,
                        forceReload: true,
                        activate: false
                    };
                    services.navigationService.syncTree(options);

                    // Close dialog.
                    services.navigationService.hideDialog();

                });

        });

    };
}

// Returns the function that cancels the deletion.
function getCancel(services) {
    return function () {
        services.navigationService.hideDialog();
    };
}
},{}],13:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "$location", "$q", "$http", "navigationService", "formulateForms", "treeService"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.deleteFormConfirmation", controller);
app.directive("formulateDeleteFormConfirmation", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("deleteFormConfirmation/deleteForm.html"),
        controller: "formulate.deleteFormConfirmation"
    };
}

// Controller.
function controller($scope, $location, $q, $http, navigationService,
    formulateForms, treeService) {

    // Variables.
    var formId = $scope.currentNode.id;

    // Variable containing the common services (easier to pass around).
    var services = {
        $scope: $scope,
        $location: $location,
        $q: $q,
        $http: $http,
        navigationService: navigationService,
        formulateForms: formulateForms,
        treeService: treeService
    };

    // Assign scope variables.
    $scope.initialized = false;

    // Assign functions on scope.
    $scope.deleteForm = getDeleteForm(services);
    $scope.cancel = getCancel(services);

    // Load form information.
    loadFormInfo(formId, services);

}

// Loads information about the form.
function loadFormInfo(formId, services) {
    services.formulateForms.getFormInfo(formId).then(function(form) {
        services.$scope.formId = form.formId;
        services.$scope.formName = form.name;
        services.$scope.initialized = true;
    });
}

// Returns a function that deletes a form.
function getDeleteForm(services) {
    return function() {

        // Variables.
        var node = services.$scope.currentNode;
        var formId = services.$scope.formId;
        var formPromise = services.formulateForms.getFormInfo(formId);

        // Once we have the form information...
        formPromise.then(function (form) {

            // Variables.
            var path = form.path;
            var partialPath = path.slice(0, path.length - 1);

            // Delete form.
            services.formulateForms.deleteForm(formId)
                .then(function () {

                    // Remove the node from the tree.
                    services.treeService.removeNode(node);

                    // Update tree (down to the deleted form's parent).
                    var options = {
                        tree: "formulate",
                        path: partialPath,
                        forceReload: true,
                        activate: false
                    };
                    services.navigationService.syncTree(options);

                    // Close dialog.
                    services.navigationService.hideDialog();

                });

        });

    };
}

// Returns the function that cancels the deletion.
function getCancel(services) {
    return function () {
        services.navigationService.hideDialog();
    };
}
},{}],14:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "$location", "$q", "$http", "navigationService", "formulateLayouts", "treeService"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.deleteLayoutConfirmation", controller);
app.directive("formulateDeleteLayoutConfirmation", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("deleteLayoutConfirmation/deleteLayout.html"),
        controller: "formulate.deleteLayoutConfirmation"
    };
}

// Controller.
function controller($scope, $location, $q, $http, navigationService,
    formulateLayouts, treeService) {

    // Variables.
    var layoutId = $scope.currentNode.id;

    // Variable containing the common services (easier to pass around).
    var services = {
        $scope: $scope,
        $location: $location,
        $q: $q,
        $http: $http,
        navigationService: navigationService,
        formulateLayouts: formulateLayouts,
        treeService: treeService
    };

    // Assign scope variables.
    $scope.initialized = false;

    // Assign functions on scope.
    $scope.deleteLayout = getDeleteLayout(services);
    $scope.cancel = getCancel(services);

    // Load layout information.
    loadLayoutInfo(layoutId, services);

}

// Loads information about the layout.
function loadLayoutInfo(layoutId, services) {
    services.formulateLayouts.getLayoutInfo(layoutId).then(function(layout) {
        services.$scope.layoutId = layout.layoutId;
        services.$scope.layoutName = layout.name;
        services.$scope.initialized = true;
    });
}

// Returns a function that deletes a layout.
function getDeleteLayout(services) {
    return function() {

        // Variables.
        var node = services.$scope.currentNode;
        var layoutId = services.$scope.layoutId;
        var layoutPromise = services.formulateLayouts.getLayoutInfo(layoutId);

        // Once we have the layout information...
        layoutPromise.then(function (layout) {

            // Variables.
            var path = layout.path;
            var partialPath = path.slice(0, path.length - 1);

            // Delete layout.
            services.formulateLayouts.deleteLayout(layoutId)
                .then(function () {

                    // Remove the node from the tree.
                    services.treeService.removeNode(node);

                    // Update tree (down to the deleted layout's parent).
                    var options = {
                        tree: "formulate",
                        path: partialPath,
                        forceReload: true,
                        activate: false
                    };
                    services.navigationService.syncTree(options);

                    // Close dialog.
                    services.navigationService.hideDialog();

                });

        });

    };
}

// Returns the function that cancels the deletion.
function getCancel(services) {
    return function () {
        services.navigationService.hideDialog();
    };
}
},{}],15:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "$location", "$q", "$http", "navigationService", "formulateValidations", "treeService"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.deleteValidationConfirmation", controller);
app.directive("formulateDeleteValidationConfirmation", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get(
            "deleteValidationConfirmation/deleteValidation.html"),
        controller: "formulate.deleteValidationConfirmation"
    };
}

// Controller.
function controller($scope, $location, $q, $http, navigationService,
    formulateValidations, treeService) {

    // Variables.
    var validationId = $scope.currentNode.id;

    // Variable containing the common services (easier to pass around).
    var services = {
        $scope: $scope,
        $location: $location,
        $q: $q,
        $http: $http,
        navigationService: navigationService,
        formulateValidations: formulateValidations,
        treeService: treeService
    };

    // Assign scope variables.
    $scope.initialized = false;

    // Assign functions on scope.
    $scope.deleteValidation = getDeleteValidation(services);
    $scope.cancel = getCancel(services);

    // Load validation information.
    loadValidationInfo(validationId, services);

}

// Loads information about the validation.
function loadValidationInfo(validationId, services) {
    services.formulateValidations.getValidationInfo(validationId)
        .then(function (validation) {
            services.$scope.validationId = validation.validationId;
            services.$scope.validationName = validation.name;
            services.$scope.initialized = true;
        });
}

// Returns a function that deletes a validation.
function getDeleteValidation(services) {
    return function() {

        // Variables.
        var node = services.$scope.currentNode;
        var validationId = services.$scope.validationId;
        var validationPromise = services.formulateValidations
            .getValidationInfo(validationId);

        // Once we have the validation information...
        validationPromise.then(function (validation) {

            // Variables.
            var path = validation.path;
            var partialPath = path.slice(0, path.length - 1);

            // Delete validation.
            services.formulateValidations.deleteValidation(validationId)
                .then(function () {

                    // Remove the node from the tree.
                    services.treeService.removeNode(node);

                    // Update tree (down to the deleted validation's parent).
                    var options = {
                        tree: "formulate",
                        path: partialPath,
                        forceReload: true,
                        activate: false
                    };
                    services.navigationService.syncTree(options);

                    // Close dialog.
                    services.navigationService.hideDialog();

                });

        });

    };
}

// Returns the function that cancels the deletion.
function getCancel(services) {
    return function () {
        services.navigationService.hideDialog();
    };
}
},{}],16:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "formulateVars"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.configuredFormPickerDialog", controller);
app.directive("formulateConfiguredFormPickerDialog", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        controller: "formulate.configuredFormPickerDialog",
        template: formulateDirectives.get(
            "dialogs/configuredFormPicker/formPicker.html"),
        scope: {
            maxCount: "="
        }
    };
}

// Controller.
function controller($scope, formulateVars) {

    // Initialize scope variables.
    $scope.selection = [];
    $scope.entityKinds = ["ConfiguredForm"];
    $scope.rootId = formulateVars["Form.RootId"];

    // Set scope functions.
    $scope.cancel = function() {
        $scope.$parent.close();
    };
    $scope.select = function() {
        $scope.$parent.submit($scope.selection);
    }

}
},{}],17:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "formulateVars"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.dataValuePickerDialog", controller);
app.directive("formulateDataValuePickerDialog", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        controller: "formulate.dataValuePickerDialog",
        template: formulateDirectives.get(
            "dialogs/dataValuePicker/dataValuePicker.html"),
        scope: {
            maxCount: "="
        }
    };
}

// Controller.
function controller($scope, formulateVars) {

    // Initialize scope variables.
    $scope.selection = [];
    $scope.entityKinds = ["DataValue"];
    $scope.rootId = formulateVars["DataValue.RootId"];

    // Set scope functions.
    $scope.cancel = function() {
        $scope.$parent.close();
    };
    $scope.select = function() {
        $scope.$parent.submit($scope.selection);
    }

}
},{}],18:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "formulateVars"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.formPickerDialog", controller);
app.directive("formulateFormPickerDialog", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        controller: "formulate.formPickerDialog",
        template: formulateDirectives.get(
            "dialogs/formPicker/formPicker.html"),
        scope: {
            maxCount: "="
        }
    };
}

// Controller.
function controller($scope, formulateVars) {

    // Initialize scope variables.
    $scope.selection = [];
    $scope.entityKinds = ["Form"];
    $scope.rootId = formulateVars["Form.RootId"];

    // Set scope functions.
    $scope.cancel = function() {
        $scope.$parent.close();
    };
    $scope.select = function() {
        $scope.$parent.submit($scope.selection);
    }

}
},{}],19:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "formulateVars"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.layoutPickerDialog", controller);
app.directive("formulateLayoutPickerDialog", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        controller: "formulate.layoutPickerDialog",
        template: formulateDirectives.get(
            "dialogs/layoutPicker/layoutPicker.html"),
        scope: {
            maxCount: "="
        }
    };
}

// Controller.
function controller($scope, formulateVars) {

    // Initialize scope variables.
    $scope.selection = [];
    $scope.entityKinds = ["Layout"];
    $scope.rootId = formulateVars["Layout.RootId"];

    // Set scope functions.
    $scope.cancel = function() {
        $scope.$parent.close();
    };
    $scope.select = function() {
        $scope.$parent.submit($scope.selection);
    }

}
},{}],20:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "$rootScope", "formulateVars", "formulateDataValues", "navigationService", "treeService"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.moveDataValueDialog", controller);
app.directive("formulateMoveDataValueDialog", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        controller: "formulate.moveDataValueDialog",
        template: formulateDirectives.get(
            "dialogs/moveEntity/moveEntity.html")
    };
}

// Controller.
function controller($scope, $rootScope, formulateVars, formulateDataValues,
    navigationService, treeService) {

    // Variables.
    var services = {
        $scope: $scope,
        $rootScope: $rootScope,
        formulateDataValues: formulateDataValues,
        navigationService: navigationService,
        treeService: treeService
    };

    // Initialize scope variables.
    $scope.selection = [];
    $scope.entityKinds = ["Folder", "Root"];
    $scope.rootId = formulateVars["DataValue.RootId"];

    // Set scope functions.
    $scope.cancel = getCancel(services);
    $scope.move = getMove(services);

}

// Returns the function that cancels the move.
function getCancel(services) {
    return function() {
        services.navigationService.hideDialog();
    };
}

// Returns the function that moves the data value.
function getMove(services) {
    return function() {

        // Variables.
        var $scope = services.$scope;
        var node = $scope.currentNode;
        var entityId = $scope.currentNode.id;
        var selection = $scope.selection;

        // Is a new parent selected?
        if (selection.length === 1) {

            // Move data value.
            var newParentId = selection[0];
            services.formulateDataValues.moveDataValue(entityId, newParentId).then(function(data) {

                // Remove the node from its old position in the tree.
                services.treeService.removeNode(node);

                // Update tree.
                var options = {
                    tree: "formulate",
                    path: data.path,
                    forceReload: true,
                    activate: false
                };
                services.navigationService.syncTree(options);

                // Send notification that data value was moved.
                services.$rootScope.$broadcast("formulateEntityMoved", {
                    id: data.id,
                    path: data.path
                });

                // Close dialog.
                services.navigationService.hideDialog();

            });

        } else {
            //TODO: Localize.
            alert("Make a selection first.");
        }

    };
}
},{}],21:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "$rootScope", "formulateVars", "formulateFolders", "navigationService", "treeService"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.moveFolderDialog", controller);
app.directive("formulateMoveFolderDialog", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        controller: "formulate.moveFolderDialog",
        template: formulateDirectives.get(
            "dialogs/moveEntity/moveEntity.html")
    };
}

// Controller.
function controller($scope, $rootScope, formulateVars, formulateFolders,
    navigationService, treeService) {

    // Variables.
    var services = {
        $scope: $scope,
        $rootScope: $rootScope,
        formulateFolders: formulateFolders,
        navigationService: navigationService,
        treeService: treeService
    };

    // Initialize scope variables.
    $scope.selection = [];
    $scope.entityKinds = ["Folder", "Root"];
    $scope.rootId = getRootId($scope.currentNode);

    // Set scope functions.
    $scope.cancel = getCancel(services);
    $scope.move = getMove(services);

}

// Gets the root ID for the specified node.
function getRootId(node) {
    var rootId;
    while (node.parentId) {
        rootId = node.id;
        node = node.parent();
    }
    return rootId;
}

// Returns the function that cancels the move.
function getCancel(services) {
    return function() {
        services.navigationService.hideDialog();
    };
}

// Returns the function that moves the folder.
function getMove(services) {
    return function() {

        // Variables.
        var $scope = services.$scope;
        var node = $scope.currentNode;
        var entityId = $scope.currentNode.id;
        var selection = $scope.selection;

        // Is a new parent selected?
        if (selection.length === 1) {

            // Move folder.
            var newParentId = selection[0];
            services.formulateFolders.moveFolder(entityId, newParentId).then(function(data) {

                // Remove the node from its old position in the tree.
                services.treeService.removeNode(node);

                // Update tree.
                var options = {
                    tree: "formulate",
                    path: data.path,
                    forceReload: true,
                    activate: false
                };
                services.navigationService.syncTree(options);

                // Send notifications that folder and descendants were moved.
                services.$rootScope.$broadcast("formulateEntityMoved", {
                    id: data.id,
                    path: data.path
                });
                for (var i = 0; i < data.descendants.length; i++) {
                    var entity = data.descendants[i];
                    services.$rootScope.$broadcast("formulateEntityMoved", {
                        id: entity.id,
                        path: entity.path
                    });
                }

                // Close dialog.
                services.navigationService.hideDialog();

            });

        } else {
            //TODO: Localize.
            alert("Make a selection first.");
        }

    };
}
},{}],22:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "$rootScope", "formulateVars", "formulateForms", "navigationService", "treeService"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.moveFormDialog", controller);
app.directive("formulateMoveFormDialog", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        controller: "formulate.moveFormDialog",
        template: formulateDirectives.get(
            "dialogs/moveEntity/moveEntity.html")
    };
}

// Controller.
function controller($scope, $rootScope, formulateVars, formulateForms,
    navigationService, treeService) {

    // Variables.
    var services = {
        $scope: $scope,
        $rootScope: $rootScope,
        formulateForms: formulateForms,
        navigationService: navigationService,
        treeService: treeService
    };

    // Initialize scope variables.
    $scope.selection = [];
    $scope.entityKinds = ["Folder", "Root"];
    $scope.rootId = formulateVars["Form.RootId"];

    // Set scope functions.
    $scope.cancel = getCancel(services);
    $scope.move = getMove(services);

}

// Returns the function that cancels the move.
function getCancel(services) {
    return function() {
        services.navigationService.hideDialog();
    };
}

// Returns the function that moves the form.
function getMove(services) {
    return function() {

        // Variables.
        var $scope = services.$scope;
        var node = $scope.currentNode;
        var entityId = $scope.currentNode.id;
        var selection = $scope.selection;

        // Is a new parent selected?
        if (selection.length === 1) {

            // Move form.
            var newParentId = selection[0];
            services.formulateForms.moveForm(entityId, newParentId).then(function(data) {

                // Remove the node from its old position in the tree.
                services.treeService.removeNode(node);

                // Update tree.
                var options = {
                    tree: "formulate",
                    path: data.path,
                    forceReload: true,
                    activate: false
                };
                services.navigationService.syncTree(options);

                // Send notifications that form and descendants were moved.
                services.$rootScope.$broadcast("formulateEntityMoved", {
                    id: data.id,
                    path: data.path
                });
                for (var i = 0; i < data.descendants.length; i++) {
                    var entity = data.descendants[i];
                    services.$rootScope.$broadcast("formulateEntityMoved", {
                        id: entity.id,
                        path: entity.path
                    });
                }

                // Close dialog.
                services.navigationService.hideDialog();

            });

        } else {
            //TODO: Localize.
            alert("Make a selection first.");
        }

    };
}
},{}],23:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "$rootScope", "formulateVars", "formulateLayouts", "navigationService", "treeService"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.moveLayoutDialog", controller);
app.directive("formulateMoveLayoutDialog", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        controller: "formulate.moveLayoutDialog",
        template: formulateDirectives.get(
            "dialogs/moveEntity/moveEntity.html")
    };
}

// Controller.
function controller($scope, $rootScope, formulateVars, formulateLayouts,
    navigationService, treeService) {

    // Variables.
    var services = {
        $scope: $scope,
        $rootScope: $rootScope,
        formulateLayouts: formulateLayouts,
        navigationService: navigationService,
        treeService: treeService
    };

    // Initialize scope variables.
    $scope.selection = [];
    $scope.entityKinds = ["Folder", "Root"];
    $scope.rootId = formulateVars["Layout.RootId"];

    // Set scope functions.
    $scope.cancel = getCancel(services);
    $scope.move = getMove(services);

}

// Returns the function that cancels the move.
function getCancel(services) {
    return function() {
        services.navigationService.hideDialog();
    };
}

// Returns the function that moves the layout.
function getMove(services) {
    return function() {

        // Variables.
        var $scope = services.$scope;
        var node = $scope.currentNode;
        var entityId = $scope.currentNode.id;
        var selection = $scope.selection;

        // Is a new parent selected?
        if (selection.length === 1) {

            // Move layout.
            var newParentId = selection[0];
            services.formulateLayouts.moveLayout(entityId, newParentId).then(function(data) {

                // Remove the node from its old position in the tree.
                services.treeService.removeNode(node);

                // Update tree.
                var options = {
                    tree: "formulate",
                    path: data.path,
                    forceReload: true,
                    activate: false
                };
                services.navigationService.syncTree(options);

                // Send notification that layout was moved.
                services.$rootScope.$broadcast("formulateEntityMoved", {
                    id: data.id,
                    path: data.path
                });

                // Close dialog.
                services.navigationService.hideDialog();

            });

        } else {
            //TODO: Localize.
            alert("Make a selection first.");
        }

    };
}
},{}],24:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "$rootScope", "formulateVars", "formulateValidations", "navigationService", "treeService"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.moveValidationDialog", controller);
app.directive("formulateMoveValidationDialog", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        controller: "formulate.moveValidationDialog",
        template: formulateDirectives.get(
            "dialogs/moveEntity/moveEntity.html")
    };
}

// Controller.
function controller($scope, $rootScope, formulateVars, formulateValidations,
    navigationService, treeService) {

    // Variables.
    var services = {
        $scope: $scope,
        $rootScope: $rootScope,
        formulateValidations: formulateValidations,
        navigationService: navigationService,
        treeService: treeService
    };

    // Initialize scope variables.
    $scope.selection = [];
    $scope.entityKinds = ["Folder", "Root"];
    $scope.rootId = formulateVars["Validation.RootId"];

    // Set scope functions.
    $scope.cancel = getCancel(services);
    $scope.move = getMove(services);

}

// Returns the function that cancels the move.
function getCancel(services) {
    return function() {
        services.navigationService.hideDialog();
    };
}

// Returns the function that moves the validation.
function getMove(services) {
    return function() {

        // Variables.
        var $scope = services.$scope;
        var node = $scope.currentNode;
        var entityId = $scope.currentNode.id;
        var selection = $scope.selection;

        // Is a new parent selected?
        if (selection.length === 1) {

            // Move validation.
            var newParentId = selection[0];
            services.formulateValidations.moveValidation(entityId, newParentId).then(function(data) {

                // Remove the node from its old position in the tree.
                services.treeService.removeNode(node);

                // Update tree.
                var options = {
                    tree: "formulate",
                    path: data.path,
                    forceReload: true,
                    activate: false
                };
                services.navigationService.syncTree(options);

                // Send notification that validation was moved.
                services.$rootScope.$broadcast("formulateEntityMoved", {
                    id: data.id,
                    path: data.path
                });

                // Close dialog.
                services.navigationService.hideDialog();

            });

        } else {
            //TODO: Localize.
            alert("Make a selection first.");
        }

    };
}
},{}],25:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "formulateVars"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.validationPickerDialog", controller);
app.directive("formulateValidationPickerDialog", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        controller: "formulate.validationPickerDialog",
        template: formulateDirectives.get(
            "dialogs/validationPicker/validationPicker.html"),
        scope: {
        }
    };
}

// Controller.
function controller($scope, formulateVars) {

    // Initialize scope variables.
    $scope.selection = [];
    $scope.entityKinds = ["Validation"];
    $scope.rootId = formulateVars["Validation.RootId"];

    // Set scope functions.
    $scope.cancel = function() {
        $scope.$parent.close();
    };
    $scope.select = function() {
        $scope.$parent.submit($scope.selection);
    }

}
},{}],26:[function(require,module,exports){
// Variables.
entityPickerDirective.$inject = ["formulateDirectives", "$compile"];
entityPickerController.$inject = ["$scope", "formulateEntities"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateEntityPicker", entityPickerDirective);
app.controller("formulate.entityPicker", entityPickerController);

// Directive.
function entityPickerDirective(formulateDirectives, $compile) {
    return {
        restrict: "E",
        template: formulateDirectives.get("entityPicker/entityPicker.html"),
        controller: "formulate.entityPicker",
        controllerAs: "ctrl",
        scope: {
            entityKinds: "=",
            rootId: "=",
            maxCount: "=",
            includeRoot: "=",
            selection: "="
        }
    };
}

// Controller.
function entityPickerController($scope, formulateEntities) {

    // Set scope variables.
    $scope.selectedNodes = [];

    // Include the root or skip to the children?
    if ($scope.includeRoot) {

        // Get root.
        formulateEntities.getEntity($scope.rootId).then(function(result) {
            $scope.rootNodes = [
                getViewModel(result)
            ];
        });

    } else {

        // Get children of root.
        formulateEntities.getEntityChildren($scope.rootId).then(function(result) {
            $scope.rootNodes = result.children.map(getViewModel);
        });

    }

    // Watch selected nodes and update selection.
    $scope.$watchCollection("selectedNodes", function(newValue) {
        $scope.selection.splice(0, $scope.selection.length);
        for (var i = 0; i < newValue.length; i++) {
            var id = newValue[i].id;
            $scope.selection.push(id);
        }
    });

}

// Gets the view model from a node.
function getViewModel(item) {
    return {
        id: item.id,
        name: item.name,
        icon: item.icon,
        kind: item.kind,
        children: item.children || [],
        hasChildren: item.hasChildren,
        expanded: false,
        selected: false
    };
}
},{}],27:[function(require,module,exports){
// Variables.
entityPickerDirective.$inject = ["formulateDirectives", "formulateRecursion"];
entityPickerController.$inject = ["$scope", "formulateEntities"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateEntityPickerTree", entityPickerDirective);
app.controller("formulate.entityPickerTree", entityPickerController);

// Directive.
function entityPickerDirective(formulateDirectives, formulateRecursion) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get("entityPicker/entityPickerTree.html"),
        controller: "formulate.entityPickerTree",
        controllerAs: "ctrl",
        scope: {
            nodes: "=",
            isRoot: "=",
            entityKinds: "=",
            selection: "=",
            maxCount: "="
        },
        compile: function(element) {
            return formulateRecursion.getCompiler(element);
        }
    };
}

// Controller.
function entityPickerController($scope, formulateEntities) {

    // Variables.
    var services = {
        $scope: $scope,
        formulateEntities: formulateEntities
    };

    // Set scope functions.
    $scope.toggleChildren = getToggleChildren(services);
    $scope.toggleNode = getToggleNode(services);

}

// Gets the function that toggles selected nodes.
function getToggleNode(services) {
    var $scope = services.$scope;
    return function(node) {
        var allowedKinds = $scope.entityKinds || [];
        if (allowedKinds.length === 0 || allowedKinds.indexOf(node.kind) >= 0) {
            node.selected = !node.selected;
            if (node.selected) {

                // Select node.
                $scope.selection.push(node);

                // If max count is exceeded, deselect another node.
                if ($scope.maxCount && $scope.selection.length > $scope.maxCount) {
                    var oldNode = $scope.selection.splice(0, 1)[0];
                    oldNode.selected = false;
                }

            } else {

                // Deselect node.
                var index = $scope.selection.indexOf(node);
                if (index >= 0) {
                    $scope.selection.splice(index, 1);
                }

            }
        }
    };
}

// Gets the function that toggles node children.
function getToggleChildren(services) {

    // Variables.
    var formulateEntities = services.formulateEntities;

    // Return function.
    return function(node) {

        // Variables.
        var childCount = (node.children || []).length;

        // Toggle.
        node.expanded = !node.expanded;

        // If just expanded and has unloaded children, load the children.
        if (node.expanded && node.hasChildren && childCount === 0) {
            formulateEntities.getEntityChildren(node.id).then(function(result) {
                node.children = result.children.map(getViewModel);
            });
        }

    };

}

// Gets the view model from a node.
function getViewModel(item) {
    return {
        id: item.id,
        name: item.name,
        icon: item.icon,
        kind: item.kind,
        children: item.children || [],
        hasChildren: item.hasChildren,
        expanded: false,
        selected: false
    };
}
},{}],28:[function(require,module,exports){
// Variables.
fieldChooserDirective.$inject = ["formulateDirectives"];
fieldChooserController.$inject = ["$scope", "$element", "formulateFields"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateFieldChooser", fieldChooserDirective);
app.controller("formulate.fieldChooser", fieldChooserController);

// Directive.
function fieldChooserDirective(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("fieldChooser/fieldChooser.html"),
        controller: "formulate.fieldChooser",
        scope: {
            show: "=",
            chosen: "&"
        }
    };
}

// Controller.
function fieldChooserController($scope, $element, formulateFields) {

    // Set scope variables.
    formulateFields.getFieldTypes().then(function(fieldTypes) {
        $scope.items = fieldTypes;
    });
    $scope.dialogStyles = {};

    // Handle chosen item.
    $scope.choseItem = function(item) {
        $scope.chosen({
            field: item
        });
    };

    // Cancel choice.
    $scope.cancel = function() {
        $scope.chosen({
            field: null
        });
    };

    // When the dialog appears, position it in view.
    $scope.$watch("show", function(newValue, oldValue) {
        if (newValue) {
            var top = calculateDialogTop({
                $element: $element
            });
            $scope.dialogStyles.top = top;
        }
    });

}

// Calculates the top of the dialog.
function calculateDialogTop(options) {

    // This is a magic formula I copied from Archetype. Seems to work.
    var $element = options.$element;
    var offset = $element.offset();
    var scrollTop = $element.closest(".umb-panel-body").scrollTop();
    if (offset.top < 400) {
        return 300 + scrollTop;
    } else {
        return offset.top - 150 + scrollTop;
    }

}
},{}],29:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives", "$compile"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateFieldEditor", directive);

// Directive.
function directive(formulateDirectives, $compile) {
    return {
        restrict: "E",
        template: formulateDirectives.get("fieldEditor/fieldEditor.html"),
        replace: true,
        scope: {
            directive: "=",
            configuration: "="
        },
        link: function (scope, element) {

            // Create directive.
            var markup = "<" + scope.directive + " configuration=\"configuration\"></" + scope.directive + ">";
            var directive = $compile(markup)(scope);
            element.replaceWith(directive);

        }
    };
}
},{}],30:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
Controller.$inject = ["formulateFields", "$scope"];
var app = angular.module("umbraco");

// Associate directive.
app.directive("formulateButtonField", directive);

// Controller.
function Controller(formulateFields, $scope) {

    // Variables.
    $scope.kinds = {
        values: []
    };

    // Get the button kinds.
    formulateFields.getButtonKinds().then(function (kinds) {
        $scope.kinds.values = kinds.map(function (kind) {
            return {
                label: kind,
                value: kind
            };
        });
    });

}

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        controller: Controller,
        template: formulateDirectives.get("fields/buttonField/buttonField.html"),
        scope: {
            configuration: "="
        }
    };
}
},{}],31:[function(require,module,exports){
// Variables.
checkboxFieldDirective.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateCheckboxField", checkboxFieldDirective);

// Directive.
function checkboxFieldDirective(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get("fields/checkboxField/checkboxField.html")
    };
}
},{}],32:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["$scope", "dialogService", "formulateDataValues"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateCheckboxListField", directive);
app.controller("formulate.checkboxListField", controller);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get(
            "fields/checkboxListField/checkboxListField.html"),
        controller: "formulate.checkboxListField",
        scope: {
            configuration: "="
        }
    };
}

// Controller.
function controller($scope, dialogService, formulateDataValues) {

    // Variables.
    var services = {
        $scope: $scope,
        dialogService: dialogService,
        formulateDataValues: formulateDataValues
    };

    // Set scope variables.
    $scope.pickDataValue = getPickDataValue(services);

    // Refresh the data value info.
    refreshDataValue(services);

}

// Allows the user to pick their data value.
function getPickDataValue(services) {
    var $scope = services.$scope;
    var dialogService = services.dialogService;
    return function() {
        dialogService.open({
            template: "../App_Plugins/formulate/dialogs/pickDataValue.html",
            show: true,
            callback: function(data) {

                // If no data value was picked, set data value to null.
                if (!data.length) {
                    $scope.dataValue = null;
                    $scope.configuration.dataValue = null;
                    return;
                }

                // Store data value to configuration.
                $scope.configuration.dataValue = data[0];
                refreshDataValue(services);

            }
        });
    };
}

// Update the scope with info about the data value based on its ID.
function refreshDataValue(services) {

    // Variables.
    var $scope = services.$scope;
    var formulateDataValues = services.formulateDataValues;

    // Return early if there is no data value to get info about.
    if (!$scope.configuration.dataValue) {
        return;
    }

    // Get info about data value.
    formulateDataValues.getDataValuesInfo([$scope.configuration.dataValue])
        .then(function (dataValues) {
            if (dataValues.length) {
                $scope.dataValue = {
                    id: dataValues[0].dataValueId,
                    name: dataValues[0].name
                };
            }
        });

}
},{}],33:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Associate directive.
app.directive("formulateDateField", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get("fields/dateField/dateField.html")
    };
}
},{}],34:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["$scope", "dialogService", "formulateDataValues"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateDropDownField", directive);
app.controller("formulate.dropDownField", controller);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get(
            "fields/dropDownField/dropDownField.html"),
        controller: "formulate.dropDownField",
        scope: {
            configuration: "="
        }
    };
}

// Controller.
function controller($scope, dialogService, formulateDataValues) {

    // Variables.
    var services = {
        $scope: $scope,
        dialogService: dialogService,
        formulateDataValues: formulateDataValues
    };

    // Set scope variables.
    $scope.pickDataValue = getPickDataValue(services);

    // Refresh the data value info.
    refreshDataValue(services);

}

// Allows the user to pick their data value.
function getPickDataValue(services) {
    var $scope = services.$scope;
    var dialogService = services.dialogService;
    return function() {
        dialogService.open({
            template: "../App_Plugins/formulate/dialogs/pickDataValue.html",
            show: true,
            callback: function(data) {

                // If no data value was picked, set data value to null.
                if (!data.length) {
                    $scope.dataValue = null;
                    $scope.configuration.dataValue = null;
                    return;
                }

                // Store data value to configuration.
                $scope.configuration.dataValue = data[0];
                refreshDataValue(services);

            }
        });
    };
}

// Update the scope with info about the data value based on its ID.
function refreshDataValue(services) {

    // Variables.
    var $scope = services.$scope;
    var formulateDataValues = services.formulateDataValues;

    // Return early if there is no data value to get info about.
    if (!$scope.configuration.dataValue) {
        return;
    }

    // Get info about data value.
    formulateDataValues.getDataValuesInfo([$scope.configuration.dataValue])
        .then(function (dataValues) {
            if (dataValues.length) {
                $scope.dataValue = {
                    id: dataValues[0].dataValueId,
                    name: dataValues[0].name
                };
            }
        });

}
},{}],35:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["$scope", "dialogService", "formulateDataValues"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateExtendedRadioButtonListField", directive);
app.controller("formulate.extendedRadioButtonListField", controller);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get(
            "fields/extendedRadioButtonListField/extendedRadioButtonListField.html"),
        controller: "formulate.extendedRadioButtonListField",
        scope: {
            configuration: "="
        }
    };
}

// Controller.
function controller($scope, dialogService, formulateDataValues) {

    // Variables.
    var services = {
        $scope: $scope,
        dialogService: dialogService,
        formulateDataValues: formulateDataValues
    };

    // Set scope variables.
    $scope.pickDataValue = getPickDataValue(services);

    // Refresh the data value info.
    refreshDataValue(services);

}

// Allows the user to pick their data value.
function getPickDataValue(services) {
    var $scope = services.$scope;
    var dialogService = services.dialogService;
    return function() {
        dialogService.open({
            template: "../App_Plugins/formulate/dialogs/pickDataValue.html",
            show: true,
            callback: function(data) {

                // If no data value was picked, set data value to null.
                if (!data.length) {
                    $scope.dataValue = null;
                    $scope.configuration.dataValue = null;
                    return;
                }

                // Store data value to configuration.
                $scope.configuration.dataValue = data[0];
                refreshDataValue(services);

            }
        });
    };
}

// Update the scope with info about the data value based on its ID.
function refreshDataValue(services) {

    // Variables.
    var $scope = services.$scope;
    var formulateDataValues = services.formulateDataValues;

    // Return early if there is no data value to get info about.
    if (!$scope.configuration.dataValue) {
        return;
    }

    // Get info about data value.
    formulateDataValues.getDataValuesInfo([$scope.configuration.dataValue])
        .then(function (dataValues) {
            if (dataValues.length) {
                $scope.dataValue = {
                    id: dataValues[0].dataValueId,
                    name: dataValues[0].name
                };
            }
        });

}
},{}],36:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Associate directive.
app.directive("formulateHeaderField", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get("fields/headerField/headerField.html"),
        scope: {
            configuration: "="
        }
    };
}
},{}],37:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Associate directive.
app.directive("formulateHiddenField", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get("fields/hiddenField/hiddenField.html")
    };
}
},{}],38:[function(require,module,exports){
// Variables.
Controller.$inject = ["$scope", "dialogService", "formulateDataValues"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get(
            "fields/radioButtonListField/radioButtonListField.html"),
        controller: Controller,
        scope: {
            configuration: "="
        }
    };
}
app.directive("formulateRadioButtonListField", directive);

// Controller.
function Controller($scope, dialogService, formulateDataValues) {

    // Variables.
    var services = {
        $scope: $scope,
        dialogService: dialogService,
        formulateDataValues: formulateDataValues
    };

    // Set scope variables.
    $scope.pickDataValue = getPickDataValue(services);
    $scope.orientations = {
        values: [
            {
                value: "Horizontal",
                label: "Horizontal"
            },
            {
                value: "Vertical",
                label: "Vertical"
            }
        ]
    };

    // Refresh the data value info.
    refreshDataValue(services);

}

// Allows the user to pick their data value.
function getPickDataValue(services) {
    var $scope = services.$scope;
    var dialogService = services.dialogService;
    return function() {
        dialogService.open({
            template: "../App_Plugins/formulate/dialogs/pickDataValue.html",
            show: true,
            callback: function(data) {

                // If no data value was picked, set data value to null.
                if (!data.length) {
                    $scope.dataValue = null;
                    $scope.configuration.dataValue = null;
                    return;
                }

                // Store data value to configuration.
                $scope.configuration.dataValue = data[0];
                refreshDataValue(services);

            }
        });
    };
}

// Update the scope with info about the data value based on its ID.
function refreshDataValue(services) {

    // Variables.
    var $scope = services.$scope;
    var formulateDataValues = services.formulateDataValues;

    // Return early if there is no data value to get info about.
    if (!$scope.configuration.dataValue) {
        return;
    }

    // Get info about data value.
    formulateDataValues.getDataValuesInfo([$scope.configuration.dataValue])
        .then(function (dataValues) {
            if (dataValues.length) {
                $scope.dataValue = {
                    id: dataValues[0].dataValueId,
                    name: dataValues[0].name
                };
            }
        });

}
},{}],39:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["formulateServerConfig", "$scope"];
var app = angular.module("umbraco");

// Associate directive.
app.directive("formulateRecaptchaField", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get("fields/recaptchaField/recaptchaField.html"),
        controller: controller
    };
}

// Controller.
function controller(formulateServerConfig, $scope) {
    $scope.hasConfiguredRecaptcha = true;
    formulateServerConfig.hasConfiguredRecaptcha().then(function(hasConfigured) {
        $scope.hasConfiguredRecaptcha = hasConfigured;
    });
}
},{}],40:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
Controller.$inject = ["$scope"];
var app = angular.module("umbraco");

// Associate directive.
app.directive("formulateRichTextField", directive);

// Controller.
function Controller($scope) {

    // Configure rich text editor model.
    $scope.textEditorModel = {
        editor: "Umbraco.TinyMCEv3",
        view: "rte",
        config: {
            editor: {
                toolbar: [
                    "code",
                    "removeformat",
                    "bold",
                    "italic",
                    "underline",
                    "strikethrough",
                    "alignleft",
                    "aligncenter",
                    "alignright",
                    "alignjustify",
                    "bullist",
                    "numlist",
                    "link",
                    "unlink",
                    "anchor",
                    "table",
                    "hr"
                ],
                dimensions: {
                    height: 250
                }
            }
        },
        value: $scope.configuration.text
    };

    // Update the text value when the rich text editor model changes.
    $scope.$watch("textEditorModel.value", function () {
        $scope.configuration.text = $scope.textEditorModel.value;
    });

}

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        controller: Controller,
        replace: true,
        template: formulateDirectives.get("fields/richTextField/richTextField.html"),
        scope: {
            configuration: "="
        }
    };
}
},{}],41:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Associate directive.
app.directive("formulateTextAreaField", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get("fields/textAreaField/textAreaField.html")
    };
}
},{}],42:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Associate directive.
app.directive("formulateTextConstantField", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get("fields/textConstantField/textConstantField.html"),
        scope: {
            configuration: "="
        }
    };
}
},{}],43:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Associate directive.
app.directive("formulateTextField", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get("fields/textField/textField.html")
    };
}
},{}],44:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Associate directive.
app.directive("formulateUploadField", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get("fields/uploadField/uploadField.html")
    };
}
},{}],45:[function(require,module,exports){
//TODO: Disable buttons during folder save.
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["$scope", "$routeParams", "$route", "formulateTrees", "formulateFolders", "formulateLocalization"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateFolderDesigner", directive);
app.controller("formulate.folderDesigner", controller);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("folderDesigner/designer.html"),
        controller: "formulate.folderDesigner"
    };
}

// Controller.
function controller($scope, $routeParams, $route, formulateTrees,
    formulateFolders, formulateLocalization) {

    // Variables.
    var id = $routeParams.id;
    var services = {
        formulateTrees: formulateTrees,
        formulateFolders: formulateFolders,
        $scope: $scope,
        $route: $route
    };

    // Set scope variables.
    $scope.folderId = id;
    $scope.info = {
        folderName: null,
        tabs: [
            {
                id: 5,
                active: true,
                label: "Folder",
                alias: "folder"
            }
        ]
    };
    $scope.parentId = null;

    // Set scope functions.
    $scope.save = getSaveFolder(services);
    $scope.canSave = getCanSave(services);

    // Tabs need to be translated.
    formulateLocalization.localizeTabs($scope.info.tabs);

    // Initializes folder.
    initializeFolder({
        id: id
    }, services);

    // Handle events.
    handleFolderMoves(services);

}

// Handles updating a folder when it's moved.
function handleFolderMoves(services) {
    var $scope = services.$scope;
    $scope.$on("formulateEntityMoved", function(event, data) {
        var id = data.id;
        var newPath = data.path;
        if ($scope.folderId === id) {

            // Store new path.
            $scope.folderPath = newPath;

            // Activate in tree.
            services.formulateTrees.activateEntity(data);

        }
    });
}

// Saves the folder.
function getSaveFolder(services) {
    return function () {

        // Variables.
        var $scope = services.$scope;
        var parentId = getParentId($scope);

        // Get folder data.
        var folderData = {
            parentId: parentId,
            folderId: $scope.folderId,
            name: $scope.info.folderName
        };

        // Persist folder on server.
        services.formulateFolders.persistFolder(folderData)
            .then(function() {

                // Even existing folders reload (e.g., to get new data).
                services.$route.reload();

            });

    };
}

// Gets the ID path to the folder.
function getFolderPath($scope) {
    var path = $scope.folderPath;
    if (!path) {
        path = [];
    }
    return path;
}

// Gets the ID of the folder's parent.
function getParentId($scope) {
    if ($scope.parentId) {
        return $scope.parentId;
    }
    var path = getFolderPath($scope);
    var parentId = path.length > 0
        ? path[path.length - 2]
        : null;
    return parentId;
}

// Initializes the folder.
function initializeFolder(options, services) {

    // Variables.
    var id = options.id;
    var $scope = services.$scope;

    // Disable folder saving until the data is populated.
    $scope.initialized = false;

    // Get the folder info.
    services.formulateFolders.getFolderInfo(id)
        .then(function(folder) {

            // Update tree.
            services.formulateTrees.activateEntity(folder);

            // Set the folder info.
            $scope.folderId = folder.folderId;
            $scope.info.folderName = folder.name;
            $scope.folderPath = folder.path;

            // The folder can be saved now.
            $scope.initialized = true;

        });

}

// Returns the function that indicates whether or not the folder can be saved.
function getCanSave(services) {
    return function() {
        return services.$scope.initialized;
    };
}
},{}],46:[function(require,module,exports){
//TODO: Disable buttons during form save.
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["$scope", "$routeParams", "$route", "formulateTrees", "formulateForms", "$location", "dialogService", "formulateValidations", "formulateLocalization", "formulateFields"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateFormDesigner", directive);
app.controller("formulate.formDesigner", controller);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("formDesigner/designer.html"),
        controller: "formulate.formDesigner"
    };
}

// Controller.
function controller($scope, $routeParams, $route, formulateTrees,
    formulateForms, $location, dialogService, formulateValidations, formulateLocalization, formulateFields) {

    // Variables.
    var id = $routeParams.id;
    var isNew = id === "null";
    var parentId = $routeParams.under;
    var hasParent = !!parentId;
    var services = {
        $scope: $scope,
        formulateTrees: formulateTrees,
        formulateForms: formulateForms,
        $location: $location,
        $route: $route,
        dialogService: dialogService,
        formulateValidations: formulateValidations,
        formulateFields: formulateFields
    };

    // Set scope variables.
    $scope.isNew = isNew;
    $scope.info = {
        formName: null,
        formAlias: null,
        tabs: [
            {
                id: 2,
                active: true,
                label: "Form",
                alias: "form"
            },
            {
                id: 25,
                active: false,
                label: "Handlers",
                alias: "handlers"
            }
        ]
    };
    $scope.fields = [];
    $scope.handlers = [];
    if (!isNew) {
        $scope.formId = id;
    }
    if (hasParent) {
        $scope.parentId = parentId;
    }
    $scope.fieldChooser = {
        show: false
    };
    $scope.handlerChooser = {
        show: false
    };
    $scope.sortableOptions = {
        axis: "y",
        cursor: "move",
        delay: 100,
        opacity: 0.5
    };
    $scope.sortableHandlerOptions = {
        axis: "y",
        cursor: "move",
        delay: 100,
        opacity: 0.5
    };

    // Tabs need to be translated.
    formulateLocalization.localizeTabs($scope.info.tabs);

    // Set scope functions.
    $scope.save = getSaveForm(services);
    $scope.addField = getAddField(services);
    $scope.addHandler = getAddHandler(services);
    $scope.canSave = getCanSave(services);
    $scope.canAddField = getCanAddField(services);
    $scope.canAddHandler = getCanAddHandler(services);
    $scope.fieldChosen = getFieldChosen(services);
    $scope.handlerChosen = getHandlerChosen(services);
    $scope.toggleField = getToggleField();
    $scope.toggleHandler = getToggleHandler();
    $scope.deleteField = getDeleteField(services);
    $scope.deleteHandler = getDeleteHandler(services);
    $scope.pickValidations = getPickValidations(services);

    // Initializes form.
    initializeForm({
        id: id,
        isNew: isNew
    }, services);

    // Handle events.
    handleFormMoves(services);

}

// Handles updating a form when it's moved.
function handleFormMoves(services) {
    var $scope = services.$scope;
    $scope.$on("formulateEntityMoved", function(event, data) {
        var id = data.id;
        var newPath = data.path;
        if ($scope.formId === id) {

            // Store new path.
            $scope.formPath = newPath;

            // Activate in tree.
            services.formulateTrees.activateEntity(data);

        }
    });
}

// Allows the user to pick their validations.
function getPickValidations(services) {
    var dialogService = services.dialogService;
    var formulateValidations = services.formulateValidations;
    return function(field) {
        dialogService.open({
            template: "../App_Plugins/formulate/dialogs/pickValidations.html",
            show: true,
            callback: function(data) {

                // Get info about validations based on their ID's,
                // then update the validations for the field.
                formulateValidations.getValidationsInfo(data)
                    .then(function (validations) {
                        field.validations = validations
                            .map(function (item) {
                                return {
                                    id: item.validationId,
                                    name: item.name
                                };
                            });
                    });

            }
        });
    };
}

// Saves the form.
function getSaveForm(services) {
    return function () {

        // Variables.
        var $scope = services.$scope;
        var fields = $scope.fields;
        var handlers = $scope.handlers;
        var parentId = getParentId($scope);

        // Get form data.
        var formData = {
            parentId: parentId,
            formId: $scope.formId,
            alias: $scope.info.formAlias,
            name: $scope.info.formName,
            fields: angular.fromJson(angular.toJson(fields)),
            handlers: angular.fromJson(angular.toJson(handlers))
        };

        // Persist form on server.
        services.formulateForms.persistForm(formData)
            .then(function(responseData) {

                // Variables.
                var isNew = $scope.isNew;

                // Prevent "discard" notification.
                $scope.formulateFormDesigner.$dirty = false;

                // Redirect or reload page.
                if (isNew) {
                    var url = "/formulate/formulate/editForm/"
                        + responseData.formId;
                    services.$location.url(url);
                } else {

                    // Even existing forms reload (e.g., to get new field ID's).
                    services.$route.reload();

                }

            });

    };
}

// Returns the function to display the field chooser.
function getAddField(services) {
    return function () {

        // Variables.
        var $scope = services.$scope;

        // Show field chooser.
        $scope.fieldChooser.show = true;

    };
}

// Returns the function to display the handler chooser.
function getAddHandler(services) {
    return function () {

        // Variables.
        var $scope = services.$scope;

        // Show handler chooser.
        $scope.handlerChooser.show = true;

    };
}

// Initializes the form.
function initializeForm(options, services) {

    // Variables.
    var id = options.id;
    var isNew = options.isNew;
    var $scope = services.$scope;

    // Get the field categories.
    services.formulateFields.getFieldCategories().then(function (categories) {
        $scope.categories = categories.map(function (category) {
            return {
                label: category.kind,
                value: category.kind,
                group: category.group
            };
        });
    });

    // Is this a new form?
    if (isNew) {

        // The form can be saved now.
        $scope.initialized = true;

    } else {

        // Disable form saving until the data is populated.
        $scope.initialized = false;

        // Get the form info.
        services.formulateForms.getFormInfo(id).then(function(form) {

            // Update tree.
            services.formulateTrees.activateEntity(form);

            // Set the form info.
            $scope.formId = form.formId;
            $scope.info.formAlias = form.alias;
            $scope.info.formName = form.name;
            $scope.fields = form.fields;
            $scope.handlers = form.handlers;
            $scope.formPath = form.path;

            // Collapse fields.
            for (var field in $scope.fields) {
                field.expanded = false;
            }

            // Collapse handlers.
            for (var handler in $scope.handlers) {
                handler.expanded = false;
            }

            // The form can be saved now.
            $scope.initialized = true;

        });

    }

}

// Returns the function that indicates whether or not the form can be saved.
function getCanSave(services) {
    return function() {
        return services.$scope.initialized;
    };
}

// Returns the function that indicates whether or not fields can be added.
function getCanAddField(services) {
    return function() {
        return services.$scope.initialized;
    };
}

// Returns the function that indicates whether or not handlers can be added.
function getCanAddHandler(services) {
    return function() {
        return services.$scope.initialized;
    };
}

// Gets the function that handles a chosen field.
function getFieldChosen(services) {
    return function(field) {
        var $scope = services.$scope;
        $scope.fieldChooser.show = false;
        if (field) {
            $scope.fields.push({
                name: null,
                alias: null,
                label: null,
                icon: field.icon,
                directive: field.directive,
                typeLabel: field.typeLabel,
                typeFullName: field.typeFullName,
                expanded: true,
                validations: [],
                configuration: {}
            });
        }
    };
}

// Gets the function that handles a chosen handler.
function getHandlerChosen(services) {
    return function(handler) {
        var $scope = services.$scope;
        $scope.handlerChooser.show = false;
        if (handler) {
            $scope.handlers.push({
                name: null,
                alias: null,
                icon: handler.icon,
                directive: handler.directive,
                typeLabel: handler.typeLabel,
                typeFullName: handler.typeFullName,
                expanded: true,
                configuration: {}
            });
        }
    };
}

// Gets the function that toggles the visibility of a field.
function getToggleField() {
    return function(field) {
        field.expanded = !field.expanded;
    };
}

// Gets the function that toggles the visibility of a handler.
function getToggleHandler() {
    return function(handler) {
        handler.expanded = !handler.expanded;
    };
}

// Gets the function that deletes a field.
function getDeleteField(services) {
    var $scope = services.$scope;
    return function(field) {

        // Confirm deletion.
        var name = field.name;
        if (name === null || !name.length) {
            name = "unnamed field";
        } else {
            name = "field, \"" + name + "\"";
        }
        var message = "Are you sure you wanted to delete the " +
            name + "?";
        var response = confirm(message);

        // Delete field?
        if (response) {
            var index = $scope.fields.indexOf(field);
            $scope.fields.splice(index, 1);
        }

    };
}

// Gets the function that deletes a handler.
function getDeleteHandler(services) {
    var $scope = services.$scope;
    return function(handler) {

        // Confirm deletion.
        var name = handler.name;
        if (name === null || !name.length) {
            name = "unnamed handler";
        } else {
            name = "handler, \"" + name + "\"";
        }
        var message = "Are you sure you wanted to delete the " +
            name + "?";
        var response = confirm(message);

        // Delete field?
        if (response) {
            var index = $scope.handlers.indexOf(handler);
            $scope.handlers.splice(index, 1);
        }

    };
}

// Gets the ID path to the form.
function getFormPath($scope) {
    var path = $scope.formPath;
    if (!path) {
        path = [];
    }
    return path;
}

// Gets the ID of the form's parent.
function getParentId($scope) {
    if ($scope.parentId) {
        return $scope.parentId;
    }
    var path = getFormPath($scope);
    var parentId = path.length > 0
        ? path[path.length - 2]
        : null;
    return parentId;
}
},{}],47:[function(require,module,exports){
// Variables.
formFieldsChooserDirective.$inject = ["formulateDirectives"];
Controller.$inject = ["$scope", "notificationsService"];
var app = angular.module("umbraco");

// Directive.
app.directive("formulateFormFieldsChooser", formFieldsChooserDirective);
function formFieldsChooserDirective(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("formFieldsChooser/formFieldsChooser.html"),
        controller: Controller,
        scope: {
            allFields: "=",
            chosenFields: "="
        }
    };
}

// Controller.
function Controller($scope, notificationsService) {

    // Variables.
    this.injected = {
        $scope: $scope,
        notificationsService: notificationsService
    };

    // Initialize scope variables.
    $scope.tempData = {
        field: null,
        fields: []
    };
    this.initializeFields();

    // Add scope functions.
    $scope.addField = this.addField.bind(this);
    $scope.deleteField = this.deleteField.bind(this);

    // Start watching changes to the temporary fields.
    this.watchFieldChanges();

}

/**
 * Adds the currently selected field to the list of fields.
 */
Controller.prototype.addField = function () {

    // Variables.
    var $scope = this.injected.$scope;
    var notificationsService = this.injected.notificationsService;
    var id = $scope.tempData.field;

    // Ensure the field to add wasn't already added (don't want duplicates).
    for (var i = 0; i < $scope.tempData.fields.length; i++) {
        var field = $scope.tempData.fields[i];
        if (field.id === id) {
            var title = "Duplicate Field";
            var message = "That field was already added. You cannot add the same field twice.";
            notificationsService.error(title, message);
            return;
        }
    }

    // Get the field based on the ID selected in the field selection drop down.
    var foundField = this.findFieldWithId(id);
    if (!foundField) {
        return;
    }

    // Add the field to the list of fields.
    $scope.tempData.fields.push(foundField);

};

/**
 * Deletes the field at the specified index.
 * @param index The index of the field to delete.
 */
Controller.prototype.deleteField = function (index) {
    var $scope = this.injected.$scope;
    $scope.tempData.fields.splice(index, 1);
};

/**
 * Initializes the fields.
 */
Controller.prototype.initializeFields = function () {

    // Variables.
    var $scope = this.injected.$scope;
    var fields = [];

    // Ensure the fields array exists.
    if (!$scope.chosenFields) {
        $scope.chosenFields = [];
    }

    // Based on the stored field ID's, create an array containing the full information
    // about the fields with those ID's.
    for (var i = 0; i < $scope.chosenFields.length; i++) {
        var fieldId = $scope.chosenFields[i].id;
        var field = this.findFieldWithId(fieldId);
        if (field) {
            fields.push(field);
        } else {
            fields.push({
                id: fieldId,
                name: "Unknown Field"
            });
        }
    }

    // Store the full field information to a temporary array used for display.
    $scope.tempData.fields = fields;

};

/**
 * Attempts to get the field with the specified field ID.
 * @param id The field ID.
 * @returns {*} The field, if one matching the ID could be found; otherwise, null.
 */
Controller.prototype.findFieldWithId = function (id) {
    var $scope = this.injected.$scope;
    if (!id) {
        return null;
    }
    var foundField = null;
    for (var i = 0; i < $scope.allFields.length; i++) {
        var field = $scope.allFields[i];
        if (field.id === id) {
            foundField = field;
            break;
        }
    }
    return foundField;
};

/**
 * Sets up a scope watcher to update the stored field ID's whenever the user changes the fields.
 */
Controller.prototype.watchFieldChanges = function () {
    var $scope = this.injected.$scope;
    $scope.$watchCollection("tempData.fields", function (fields) {
        var ids = [];
        for (var i = 0; i < fields.length; i++) {
            ids.push({
                id: fields[i].id
            });
        }
        $scope.chosenFields = ids;
    });
};
},{}],48:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["$scope", "$element", "formulateHandlers"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateHandlerChooser", directive);
app.controller("formulate.handlerChooser", controller);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("handlerChooser/handlerChooser.html"),
        controller: "formulate.handlerChooser",
        scope: {
            show: "=",
            chosen: "&"
        }
    };
}

// Controller.
function controller($scope, $element, formulateHandlers) {

    // Set scope variables.
    formulateHandlers.getHandlerTypes().then(function(handlerTypes) {
        $scope.items = handlerTypes;
    });
    $scope.dialogStyles = {};

    // Handle chosen item.
    $scope.choseItem = function(item) {
        $scope.chosen({
            handler: item
        });
    };

    // Cancel choice.
    $scope.cancel = function() {
        $scope.chosen({
            handler: null
        });
    };

    // When the dialog appears, position it in view.
    $scope.$watch("show", function(newValue, oldValue) {
        if (newValue) {
            var top = calculateDialogTop({
                $element: $element
            });
            $scope.dialogStyles.top = top;
        }
    });

}

// Calculates the top of the dialog.
function calculateDialogTop(options) {

    // This is a magic formula I copied from Archetype. Seems to work.
    var $element = options.$element;
    var offset = $element.offset();
    var scrollTop = $element.closest(".umb-panel-body").scrollTop();
    if (offset.top < 400) {
        return 300 + scrollTop;
    } else {
        return offset.top - 150 + scrollTop;
    }

}
},{}],49:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives", "$compile"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateHandlerEditor", directive);

// Directive.
function directive(formulateDirectives, $compile) {
    return {
        restrict: "E",
        template: formulateDirectives.get("handlerEditor/handlerEditor.html"),
        replace: true,
        scope: {
            directive: "=",
            configuration: "=",
            fields: "="
        },
        link: function (scope, element) {

            // Create directive.
            var markup = "<" + scope.directive + " configuration=\"configuration\" fields=\"fields\"></" + scope.directive + ">";
            var directive = $compile(markup)(scope);
            element.replaceWith(directive);

        }
    };
}
},{}],50:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
Controller.$inject = ["$scope", "notificationsService"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateEmailHandler", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get(
            "handlers/emailHandler/emailHandler.html"),
        scope: {
            configuration: "=",
            fields: "="
        },
        controller: Controller
    };
}

// Controller.
function Controller($scope, notificationsService) {

    // Variables.
    this.injected = {
        $scope: $scope,
        notificationsService: notificationsService
    };

    // Initialize scope variables.
    if (!$scope.configuration.recipients) {
        $scope.configuration.recipients = [];
    }

    // Add scope functions.
    $scope.addRecipient = this.addRecipient.bind(this);
    $scope.deleteRecipient = this.deleteRecipient.bind(this);

}

/**
 * Adds a blank email address to the list of recipients of emails.
 */
Controller.prototype.addRecipient = function () {
    var $scope = this.injected.$scope;
    $scope.configuration.recipients.push({
        email: ""
    });
};

/**
 * Deletes the email recipient at the specified index.
 * @param index The index of the email recipient to delete.
 */
Controller.prototype.deleteRecipient = function (index) {
    var $scope = this.injected.$scope;
    $scope.configuration.recipients.splice(index, 1);
};
},{}],51:[function(require,module,exports){
/*
 This directive handles the list of fields in a somewhat complicated way, so it could use some
 explaining. In short, the fields chosen by the users are stored both in the
 "$scope.configuration.fields" variable and the "$scope.tempData.chosenFields" variable. Both
 of those variables are arrays. The elements in the "chosenFields" array contain objects that
 have a "storedField" property. The values of the "storedField" properties are the same objects
 that are in the "fields" array. This facilitates a few things. For one, the objects in
 "fields" contain only the data necessary for persistence. The objects in "chosenFields" contain
 some additional information for temporary use (e.g., to show the Formulate field name, which is
 not persisted). By storing the "fields" objects as properties on the "chosenFields" objects,
 Angular is still able to perform binding (e.g., so when a user changes the value of the mapped
 field name, it will update the persisted version of the mapped field name). Phrased another way,
 you can think of "chosenFields" as the view model and "fields" as the data model, with a bit of
 extra magic to keep them synchronized.
  */

// Variables.
directive.$inject = ["formulateDirectives"];
Controller.$inject = ["$scope", "notificationsService", "formulateHandlers"];
var app = angular.module("umbraco");

// Associate directive.
app.directive("formulateSendDataHandler", directive);

/**
 * Defines the "Send Data Handler" directive.
 * @param formulateDirectives The service used to get information about Formulate directives.
 * @returns {{restrict: string, replace: boolean, template: (*|string), scope: {configuration: string, fields: string}, controller: Controller}}
 */
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get(
            "handlers/sendDataHandler/sendDataHandler.html"),
        scope: {
            configuration: "=",
            fields: "="
        },
        controller: Controller
    };
}

/**
 * Controller for the "Send Data" handler directive.
 * @param $scope The injected Angular scope.
 * @param notificationsService The injected Umbraco notifications service.
 * @constructor
 */
function Controller($scope, notificationsService, formulateHandlers) {

    // Variables.
    this.injected = {
        $scope: $scope,
        notificationsService: notificationsService,
        formulateHandlers: formulateHandlers
    };

    // Initialize scope variables.
    $scope.tempData = {
        chosenField: null,
        chosenFields: []
    };
    if (!$scope.configuration.method) {
        $scope.configuration.method = "GET";
    }
    if (!$scope.configuration.transmissionFormat) {
        $scope.configuration.transmissionFormat = "Query String";
    }
    $scope.sortableFieldOptions = {
        cursor: "move",
        delay: 100,
        opacity: 0.5
    };
    this.initializeFields();

    // Add scope functions.
    $scope.addField = this.addField.bind(this);
    $scope.deleteField = this.deleteField.bind(this);

    // Start watching changes to the fields.
    this.watchFieldChanges();

    // Get the result handler kinds.
    formulateHandlers.getResultHandlers().then(function (resultHandlers) {
        $scope.resultHandlers = resultHandlers;
    });

}

/**
 * Adds the currently selected field to the list of fields.
 */
Controller.prototype.addField = function () {

    // Variables.
    var $scope = this.injected.$scope;
    var notificationsService = this.injected.notificationsService;
    var id = $scope.tempData.chosenField;

    // Ensure the field to add wasn't already added (don't want duplicates).
    for (var i = 0; i < $scope.tempData.chosenFields.length; i++) {
        var field = $scope.tempData.chosenFields[i];
        if (field.storedField.id === id) {
            var title = "Duplicate Field";
            var message = "That field was already added. You cannot add the same field twice.";
            notificationsService.error(title, message);
            return;
        }
    }

    // Get the field based on the ID selected in the field selection drop down.
    var foundField = this.findFieldWithId(id);
    if (!foundField) {
        return;
    }

    // Add the field to the list of fields.
    $scope.tempData.chosenFields.push({
        fieldName: foundField.name,
        storedField: {
            id: id,
            name: foundField.alias
        }
    });

};

/**
 * Deletes the field at the specified index.
 * @param index The index of the field to delete.
 */
Controller.prototype.deleteField = function (index) {
    var $scope = this.injected.$scope;
    $scope.tempData.chosenFields.splice(index, 1);
};

/**
 * Initializes the fields based on the stored configuration of field ID's.
 */
Controller.prototype.initializeFields = function () {

    // Variables.
    var $scope = this.injected.$scope;
    var fields = [];

    // Ensure the configuration contains a fields array.
    if (!$scope.configuration.fields) {
        $scope.configuration.fields = [];
    }

    // Based on the stored field ID's, create an array containing the full
    // information about the fields with those ID's.
    for (var i = 0; i < $scope.configuration.fields.length; i++) {
        var storedField = $scope.configuration.fields[i];
        var field = this.findFieldWithId(storedField.id);
        var fieldName = field
            ? field.name
            : "Unknown Field";
        fields.push({
            fieldName: fieldName,
            storedField: storedField
        });
    }

    // Store the full field information to a temporary array used for display.
    $scope.tempData.chosenFields = fields;

};

/**
 * Attempts to get the field with the specified field ID.
 * @param id The field ID.
 * @returns {*} The field, if one matching the ID could be found; otherwise, null.
 */
Controller.prototype.findFieldWithId = function (id) {
    var $scope = this.injected.$scope;
    if (!id) {
        return null;
    }
    var foundField = null;
    for (var i = 0; i < $scope.fields.length; i++) {
        var field = $scope.fields[i];
        if (field.id === id) {
            foundField = field;
            break;
        }
    }
    return foundField;
};

/**
 * Sets up a scope watcher to update the stored fields whenever the user changes the
 * temporary fields.
 */
Controller.prototype.watchFieldChanges = function () {
    var $scope = this.injected.$scope;
    $scope.$watchCollection("tempData.chosenFields", function (chosenFields) {
        var storedFields = [];
        for (var i = 0; i < chosenFields.length; i++) {
            var storedField = chosenFields[i].storedField;
            storedFields.push(storedField);
        }
        $scope.configuration.fields = storedFields;
    });
};
},{}],52:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["$scope"];
var app = angular.module("umbraco");

// Directive.
app.directive("formulateStoreDataHandler", directive);
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get(
            "handlers/storeDataHandler/storeDataHandler.html"),
        scope: {
            configuration: "=",
            fields: "="
        },
        controller: controller
    };
}

// Controller.
function controller($scope) {
}
},{}],53:[function(require,module,exports){
// Variables.
directive.$inject = ["localizationService"];
var app = angular.module("umbraco");

// Register directive.
app.directive("formulateInjectLocalization", directive);

// Directive.
// Allows you to localize text that is inject into an element.
function directive(localizationService) {
    return {
        restrict: "A",
        link: getLocalizeLinker(localizationService)
    };
}

// Returns the link function.
function getLocalizeLinker(localizationService) {
    return function(scope, element, attrs) {

        // Variables.
        var key = attrs.formulateInjectLocalization;

        // Localize.
        localizationService
            .localize(key)
            .then(function (value) {

                // Set attribute to translated value.
                element.html("");
                element.append(angular.element(document.createTextNode(value)));

            });

    };
}
},{}],54:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Directive.
app.directive("formulateInstall", ["formulateDirectives", function (formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("install/install.html"),
        controller: "formulate.install"
    };
}]);

// Controller.
app.controller("formulate.install", ["$scope", "formulatePermissions", function($scope, formulatePermissions) {
    $scope.givePermission = function() {
        formulatePermissions.permitFormulateAccess();
    };
}]);
},{}],55:[function(require,module,exports){
//TODO: Disable buttons during layout save.
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["$scope", "$routeParams", "$route", "formulateTrees", "formulateLayouts", "formulateLocalization"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateLayoutDesigner", directive);
app.controller("formulate.layoutDesigner", controller);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("layoutDesigner/designer.html"),
        controller: "formulate.layoutDesigner"
    };
}

// Controller.
function controller($scope, $routeParams, $route, formulateTrees,
    formulateLayouts, formulateLocalization) {

    // Variables.
    var id = $routeParams.id;
    var services = {
        formulateTrees: formulateTrees,
        formulateLayouts: formulateLayouts,
        $scope: $scope,
        $route: $route
    };

    // Set scope variables.
    $scope.layoutId = id;
    $scope.info = {
        layoutName: null,
        layoutAlias: null,
        tabs: [
            {
                id: 4,
                active: true,
                label: "Layout",
                alias: "layout"
            }
        ]
    };
    $scope.kindId = null;
    $scope.parentId = null;
    $scope.directive = null;
    $scope.data = null;

    // Tabs need to be translated.
    formulateLocalization.localizeTabs($scope.info.tabs);

    // Set scope functions.
    $scope.save = getSaveLayout(services);
    $scope.canSave = getCanSave(services);

    // Initializes layout.
    initializeLayout({
        id: id
    }, services);

    // Handle events.
    handleLayoutMoves(services);

}

// Handles updating a layout when it's moved.
function handleLayoutMoves(services) {
    var $scope = services.$scope;
    $scope.$on("formulateEntityMoved", function(event, data) {
        var id = data.id;
        var newPath = data.path;
        if ($scope.layoutId === id) {

            // Store new path.
            $scope.layoutPath = newPath;

            // Activate in tree.
            services.formulateTrees.activateEntity(data);

        }
    });
}

// Saves the layout.
function getSaveLayout(services) {
    return function () {

        // Variables.
        var $scope = services.$scope;
        var parentId = getParentId($scope);

        // Get layout data.
        var layoutData = {
            parentId: parentId,
            kindId: $scope.kindId,
            layoutId: $scope.layoutId,
            alias: $scope.info.layoutAlias,
            name: $scope.info.layoutName,
            data: $scope.data
        };

        // Persist layout on server.
        services.formulateLayouts.persistLayout(layoutData)
            .then(function(responseData) {

                // Layout is no longer new.
                var isNew = $scope.isNew;
                $scope.isNew = false;

                // Redirect or reload page.
                if (isNew) {
                    var url = "/formulate/formulate/editLayout/"
                        + responseData.layoutId;
                    services.$location.url(url);
                } else {

                    // Even existing layouts reload (e.g., to get new data).
                    services.$route.reload();

                }

            });

    };
}

// Gets the ID path to the layout.
function getLayoutPath($scope) {
    var path = $scope.layoutPath;
    if (!path) {
        path = [];
    }
    return path;
}

// Gets the ID of the layout's parent.
function getParentId($scope) {
    if ($scope.parentId) {
        return $scope.parentId;
    }
    var path = getLayoutPath($scope);
    var parentId = path.length > 0
        ? path[path.length - 2]
        : null;
    return parentId;
}

// Initializes the layout.
function initializeLayout(options, services) {

    // Variables.
    var id = options.id;
    var $scope = services.$scope;

    // Disable layout saving until the data is populated.
    $scope.initialized = false;

    // Get the layout info.
    services.formulateLayouts.getLayoutInfo(id)
        .then(function(layout) {

            // Update tree.
            services.formulateTrees.activateEntity(layout);

            // Set the layout info.
            $scope.kindId = layout.kindId;
            $scope.layoutId = layout.layoutId;
            $scope.info.layoutAlias = layout.alias;
            $scope.info.layoutName = layout.name;
            $scope.layoutPath = layout.path;
            $scope.directive = layout.directive;
            $scope.data = layout.data;

            // The layout can be saved now.
            $scope.initialized = true;

        });

}

// Returns the function that indicates whether or not the layout can be saved.
function getCanSave(services) {
    return function() {
        return services.$scope.initialized;
    };
}
},{}],56:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives", "$compile"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateLayoutEditor", directive);

// Directive.
function directive(formulateDirectives, $compile) {
    return {
        restrict: "E",
        template: formulateDirectives.get("layoutEditor/layoutEditor.html"),
        replace: true,
        scope: {
            directive: "=",
            data: "="
        },
        link: function (scope, element) {

            // Create directive.
            var markup = "<" + scope.directive + " data=\"data\"></" + scope.directive + ">";
            var directive = $compile(markup)(scope);
            element.replaceWith(directive);

        }
    };
}
},{}],57:[function(require,module,exports){
/**
 * The "formulateLayoutBasic" directive allows the user to create
 * a form layout that uses multiple rows and multiple columns.
 */

// Variables.
controller.$inject = ["$scope", "formulateForms", "dialogService", "notificationsService"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.controller("formulate.layoutBasic", controller);
app.directive("formulateLayoutBasic", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get(
            "layoutKinds/layoutBasic/layoutBasic.html"),
        scope: {
            data: "="
        },
        controller: "formulate.layoutBasic"
    };
}

// Controller.
function controller($scope, formulateForms, dialogService, notificationsService) {

    // Variables.
    var services = {
        $scope: $scope,
        formulateForms: formulateForms,
        dialogService: dialogService,
        notificationsService: notificationsService
    };

    // Scope variables.
    $scope.editRows = false;
    $scope.allFields = [];
    $scope.rows = angular.copy($scope.data.rows || []);
    $scope.unusedFields = [];
    $scope.fieldSortableOptions = getFieldSortableOptions();
    $scope.rowsSortableOptions = getRowSortableOptions();
    $scope.getCellClass = getGetCellClass();
    $scope.deleteRow = getDeleteRow(services);
    $scope.addRow = getAddRow(services);
    $scope.pickForm = getPickForm(services);
    $scope.getSampleCellClasses = getGetSampleCellClasses();
    $scope.toggleCell = getToggleCell();
    $scope.sampleCells = getSampleCells();
    $scope.useField = getUseField(services);
    $scope.toggleEditRows = getToggleEditRows(services);

    // Initialize watchers.
    watchEditRowsSetting(services);
    watchRowChanges(services);

    // Initialize.
    ensureRowExists($scope);
    if ($scope.data.formId) {
        refreshFields($scope.data.formId, services);
    } else {
        replenishFields($scope);
    }

}

// Returns the function that moves a field from the unused collection to
// a cell in the layout.
function getUseField(services) {
    var $scope = services.$scope;
    return function (fieldIndex) {
        var field = $scope.unusedFields.splice(fieldIndex, 1)[0];
        $scope.rows[$scope.rows.length -1].cells[0].fields.push(field);
    };
}

// Returns the function that returns a class for the specified cell
// in the specified row.
function getGetCellClass() {
    return function (row, cell) {

        // If a column span is not present (e.g., for older versions of Formulate),
        // then fallback to the calculated column span.
        var columnSpan = cell.columnSpan  ?  cell.columnSpan : getFallbackColumnSpan(row, cell);
        return "span" + columnSpan.toString();

    };
}

// Deprecated. This will be deleted in a future version of Formulate.
// This calculates a fallback column span when one is not otherwise
// specified (useful for forms created in older versions of Formulate).
function getFallbackColumnSpan(row, cell) {
    return cell.columnSpan || (12 / row.cells.length);
}

// Returns the 12 sample cells.
function getSampleCells() {
    var cells = [];
    for (var i = 0; i < 12; i++) {
        cells.push({
            active: false
        });
    }
    return cells;
}

// Returns the function that returns the classes for the specified cell.
function getGetSampleCellClasses() {
    return function (cells, index) {
        var cell = cells[index];
        var activeClass = (cell.active ? "formulate-sample-cell--active" : "formulate-sample-cell--inactive");
        var nextCell = index + 1 < cells.length ? cells[index + 1] : null;
        var adjacentClass = nextCell && nextCell.active ? "formulate-sample-cell--adjacent" : null;
        var firstClass = index == 0 ? "formulate-sample-cell--first" : null;
        var lastClass = index == cells.length - 1 ? "formulate-sample-cell--last" : null;
        var classes = [activeClass, adjacentClass, firstClass, lastClass];
        var validClasses = [];
        for (var i = 0; i < classes.length; i++) {
            if (classes[i]) {
                validClasses.push(classes[i]);
            }
        }
        return validClasses.join(" ");
    };
}

// Returns the function that toggles the specified cell's active state.
function getToggleCell() {
    return function (cells, index) {
        var cell = cells[index];
        if (index > 0) {
            cell.active = !cell.active;
        }
    };
}

// Returns the function that toggles the "edit rows" option.
function getToggleEditRows(services) {
    var $scope = services.$scope;
    return function () {
        $scope.editRows = !$scope.editRows;
    };
}

// Returns the options to use when sorting fields.
function getFieldSortableOptions() {
    return {
        cursor: "move",
        connectWith: ".formulate-cell",
        tolerance: "pointer",
        items: ".formulate-cell-field",
        opacity: 0.5
    };
}

// Returns the options to use when sorting rows.
function getRowSortableOptions() {
    return {
        cursor: "move",
        tolerance: "pointer",
        axis: "y",
        opacity: 0.5,
        disabled: true
    };
}

// Returns a function that deletes the row at the specified index.
function getDeleteRow(services) {
    var $scope = services.$scope;
    var notificationsService = services.notificationsService;
    return function (index) {
        if ($scope.rows.length > 1) {
            $scope.rows.splice(index, 1);
            replenishFields($scope);
        } else {
            var title = "Unable to Delete Final Row";
            var message = "The layout must contain at least one row.";
            notificationsService.error(title, message);
        }
    };
}

// Returns a function that adds a row based on the specified sample cells.
function getAddRow(services) {
    var $scope = services.$scope;
    return function(sampleCells) {

        // Variables.
        var cells = [];
        var columnSpan = 0;

        // Add a new cell for each active sample cell.
        for (var i = 0; i < sampleCells.length; i++) {
            var sampleCell = sampleCells[i];
            if (sampleCell.active) {
                cells.push({
                    columnSpan: columnSpan,
                    fields: []
                });
                columnSpan = 0;
            }
            columnSpan = columnSpan + 1;
        }

        // Add a final cell to complete the row.
        cells.push({
            columnSpan: columnSpan,
            fields: []
        });

        // Add the new row.
        $scope.rows.push({
            cells: cells
        });

    };
}

// Returns the function that allows the user to pick a form.
function getPickForm(services) {
    var dialogService = services.dialogService;
    var $scope = services.$scope;
    return function() {
        dialogService.open({
            template: "../App_Plugins/formulate/dialogs/pickForm.html",
            show: true,
            callback: function(data) {

                // If no form was chosen, empty all fields.
                if (!data.length) {
                    $scope.data.formId = null;
                    $scope.allFields = [];
                    replenishFields($scope);
                    return;
                }

                // Update fields.
                var formId = data[0];
                $scope.data.formId = formId;
                refreshFields(formId, services);

            }
        });
    };
}

// Watches the "Edit Rows" setting to enable/disable sorting.
function watchEditRowsSetting(services) {
    var $scope = services.$scope;
    $scope.$watch("editRows", function (newValue) {
        $scope.rowsSortableOptions.disabled = !newValue;
    });
}

// Watches for changes to the rows and updates the saved
// data correspondingly.
function watchRowChanges(services) {
    var $scope = services.$scope;
    $scope.$watch("rows", function (newValue) {
        refreshDataRows(newValue, services);
    }, true);
}

// Copies from "rows" to create "data.rows"
// (the latter is stored to the server).
function refreshDataRows(rows, services) {
    var dataRows = [];
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var dataRow = {
            cells: []
        };
        dataRows.push(dataRow);
        for (var j = 0; j < row.cells.length; j++) {
            var cell = row.cells[j];
            var dataCell = {
                columnSpan: cell.columnSpan,
                fields: []
            };
            dataRow.cells.push(dataCell);
            for (var k = 0; k < cell.fields.length; k++) {
                var field = cell.fields[k];
                var dataField = {
                    id: field.id
                };
                dataCell.fields.push(dataField);
            }
        }
    }
    services.$scope.data.rows = dataRows;
}

// Ensures that no old fields exist in the rows and that all
// new fields exist in a row. This is called whenever the
// rows or the fields change.
function replenishFields($scope) {

    // Variables.
    var i, j, field, row, cell;
    var fields = {};

    // Place all fields in an associative array keyed by ID.
    for (i = 0; i < $scope.allFields.length; i++) {
        field = $scope.allFields[i];
        fields[field.id] = field;
    }

    // Remove or replenish the fields in the rows.
    for (i = 0; i < $scope.rows.length; i++) {
        row = $scope.rows[i];
        for (j = 0; j < row.cells.length; j++) {
            cell = row.cells[j];
            deleteAndUpdateFields(fields, cell.fields);
        }
    }

    // Remove or replenish the fields in the unused fields section.
    deleteAndUpdateFields(fields, $scope.unusedFields);

    // Aggregate all fields which aren't yet assigned to a row.
    var unassignedFields = [];
    for (var key in fields) {
        if (fields.hasOwnProperty(key)) {
            unassignedFields.push(fields[key]);
        }
    }

    // Add unassigned fields to the unused fields section.
    if (unassignedFields.length > 0) {
        $scope.unusedFields = $scope.unusedFields.concat(unassignedFields);
    }

    // Ensure each cell has a column span.
    ensureFallbackColumnSpans($scope.rows);

}

// Ensure at least one row exists (otherwise, there would be nothing to drop fields into).
function ensureRowExists($scope) {
    if ($scope.rows.length < 1) {
        $scope.rows.push({
            cells: [
                {
                    columnSpan: 12,
                    fields: []
                }
            ]
        });
    }
}

// Deletes and updates fields based on the information known about all fields.
function deleteAndUpdateFields(allFieldsById, fieldsToUpdate) {
    var i, field;
    for (i = fieldsToUpdate.length - 1; i >= 0; i--) {
        field = fieldsToUpdate[i];
        if (allFieldsById.hasOwnProperty(field.id)) {

            // Copy fresh data over.
            field.name = allFieldsById[field.id].name;

            // Remove field as it's accounted for.
            delete allFieldsById[field.id];

        } else {

            // This field no longer exists in the layout,
            // so remove it from the fields to update.
            fieldsToUpdate.splice(i, 1);

        }
    }
}

// Deprecated. This will be deleted in a future version of Formulate.
// Ensure each cell has a column span. This is done because
// older versions of Formulate did not have a column span
// specified for each cell.
function ensureFallbackColumnSpans(rows) {
    var i, row, cell;
    for (i = 0; i < rows.length; i++) {
        row = rows[i];
        for (j = 0; j < row.cells.length; j++) {
            cell = row.cells[j];
            if (!cell.columnSpan) {
                cell.columnSpan = 12 / row.cells.length;
            }
        }
    }
}

// Gets info about the form based on its ID,
// then updates the fields.
function refreshFields(formId, services) {
    var formulateForms = services.formulateForms;
    var $scope = services.$scope;
    formulateForms.getFormInfo(formId)
        .then(function (formData) {
            $scope.allFields = formData.fields
                .filter(function (item) {
                    return !item.isServerSideOnly;
                })
                .map(function (item) {
                    return {
                        id: item.id,
                        name: item.name
                    };
                });
            replenishFields($scope);
        });
}
},{}],58:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "$location", "$q", "$http", "navigationService", "formulateLayouts", "formulateVars"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.layoutTypeChooser", controller);
app.directive("formulateLayoutTypeChooser", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("layoutTypeChooser/layoutChooser.html"),
        controller: "formulate.layoutTypeChooser"
    };
}

// Controller.
function controller($scope, $location, $q, $http,
    navigationService, formulateLayouts, formulateVars) {

    // Variable containing the common services (easier to pass around).
    var services = {
        $scope: $scope,
        $location: $location,
        $q: $q,
        $http: $http,
        navigationService: navigationService,
        formulateLayouts: formulateLayouts,
        formulateVars: formulateVars
    };

    // Assign variables to scope.
    $scope.layoutName = null;
    $scope.layoutAlias = null;
    $scope.kind = {
        id: null,
        kinds: []
    };
    setLayoutKinds(services);

    // Assign functions on scope.
    $scope.createLayout = getCreateLayout(services);
    $scope.canCreate = getCanCreate(services);

}

// Sets the layout kinds on the scope.
function setLayoutKinds(services) {
    services.formulateLayouts.getKinds().then(function (data) {
        services.$scope.kind.kinds = data.map(function (item) {
            return {
                id: item.id,
                name: item.name
            };
        });
    });
}

// Returns a function that creates a new layout.
function getCreateLayout(services) {
    var $scope = services.$scope;
    return function() {
        var parentId = $scope.currentNode.id;
        var layoutInfo = {
            parentId: parentId,
            kindId: $scope.kind.id,
            name: $scope.layoutName,
            alias: $scope.layoutAlias,
            data: {}
        };
        addNodeToTree(layoutInfo, services)
            .then(function (node) {
                navigateToNode(node, services);
                services.navigationService.hideDialog();
            });
    };
}

// Adds a new node to the layout tree.
function addNodeToTree(layoutInfo, services) {
    return services.formulateLayouts.persistLayout(layoutInfo)
        .then(function (node) {

            // Refresh tree.
            var options = {
                tree: "formulate",
                path: node.path,
                forceReload: false,
                activate: true
            };
            services.navigationService.syncTree(options);

            // Return node.
            return node;

        },function () {
            services.$q.reject();
        });
}

// Navigates to a node.
function navigateToNode(node, services) {
    var nodeId = node.id;
    var url = services.formulateVars.EditLayoutBase + nodeId;
    services.$location.url(url);
}

// Returns a function that indicates whether or not the user can create.
function getCanCreate(services) {
    return function() {
        var layoutName = services.$scope.layoutName;
        var kindId = services.$scope.kind.id;
        //TODO: Check for whitespace and other edge cases that are invalid.
        if (layoutName && kindId && layoutName.length > 0) {
            return true;
        } else {
            return false;
        }
    };
}
},{}],59:[function(require,module,exports){
// Variables.
directive.$inject = ["localizationService"];
var app = angular.module("umbraco");

// Register directive.
app.directive("formulateLocalizeAttribute", directive);

// Directive.
// Allows you to localize an attribute.
function directive(localizationService) {
    return {
        restrict: "A",
        link: getLocalizeLinker(localizationService)
    };
}

// Returns the link function.
function getLocalizeLinker(localizationService) {
    return function(scope, element, attrs) {

        // Variables.
        var attrName = attrs.formulateLocalizeAttribute;
        var key = attrs[attrName];

        // Localize.
        localizationService
            .localize(key)
            .then(function (value) {

                // Set attribute to translated value.
                attrs.$set(attrName, value);

            });

    };
}
},{}],60:[function(require,module,exports){
// Variables.
directive.$inject = ["localizationService", "$compile"];
var app = angular.module("umbraco");

// Register directive.
app.directive("formulateLocalizeContent", directive);

// Directive.
// Allows you to localize content that requires AngularJS compilation.
function directive(localizationService, $compile) {
    return {
        restrict: "E",
        replace: true,
        link: getLocalizeLinker(localizationService, $compile)
    };
}

// Returns the link function.
function getLocalizeLinker(localizationService, $compile) {
    return function(scope, element, attrs) {

        // Variables.
        var key = attrs.key;

        // Localize.
        localizationService
            .localize(key)
            .then(function (value) {

                // Compile translated value and replace content.
                var template = angular.element($compile(value)(scope));
                element.replaceWith(template);

            });

    };
}
},{}],61:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["$routeParams", "formulateEntities", "formulateTrees"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateRootEntityOverview", directive);
app.controller("formulate.rootEntityOverview", controller);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        transclude: true,
        template: formulateDirectives.get("rootEntityOverview/rootEntityOverview.html"),
        controller: "formulate.rootEntityOverview"
    };
}

// Controller.
function controller($routeParams, formulateEntities, formulateTrees) {

    // Variables.
    var id = $routeParams.id;
    var services = {
        formulateEntities: formulateEntities,
        formulateTrees: formulateTrees
    };

    // Initialize the entity.
    initializeEntity({
        id: id
    }, services);

}

// Initializes the entity.
function initializeEntity(options, services) {

    // Variables.
    var id = options.id;

    // Get the entity info.
    services.formulateEntities.getEntity(id)
        .then(function(entity) {

            // Update tree.
            services.formulateTrees.activateEntity(entity);

        });

}
},{}],62:[function(require,module,exports){
//TODO: Disable buttons during validation save.
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["$scope", "$routeParams", "$route", "formulateValidations", "formulateTrees", "formulateLocalization"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateValidationDesigner", directive);
app.controller("formulate.validationDesigner", controller);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get("validationDesigner/designer.html"),
        controller: "formulate.validationDesigner"
    };
}

// Controller.
function controller($scope, $routeParams, $route, formulateValidations,
    formulateTrees, formulateLocalization) {

    // Variables.
    var id = $routeParams.id;
    var services = {
        formulateValidations: formulateValidations,
        $scope: $scope,
        $route: $route,
        formulateTrees: formulateTrees
    };

    // Set scope variables.
    $scope.validationId = id;
    $scope.info = {
        validationName: null,
        validationAlias: null,
        tabs: [
            {
                id: 3,
                active: true,
                label: "Validation",
                alias: "validation"
            }
        ]
    };
    $scope.kindId = null;
    $scope.parentId = null;
    $scope.directive = null;
    $scope.data = null;

    // Tabs need to be translated.
    formulateLocalization.localizeTabs($scope.info.tabs);

    // Set scope functions.
    $scope.save = getSaveValidation(services);
    $scope.canSave = getCanSave(services);

    // Initializes validation.
    initializeValidation({
        id: id
    }, services);

    // Handle events.
    handleValidationMoves(services);

}

// Handles updating a validation when it's moved.
function handleValidationMoves(services) {
    var $scope = services.$scope;
    $scope.$on("formulateEntityMoved", function(event, data) {
        var id = data.id;
        var newPath = data.path;
        if ($scope.validationId === id) {

            // Store new path.
            $scope.validationPath = newPath;

            // Activate in tree.
            services.formulateTrees.activateEntity(data);

        }
    });
}

// Saves the validation.
function getSaveValidation(services) {
    return function () {

        // Variables.
        var $scope = services.$scope;
        var parentId = getParentId($scope);

        // Get validation data.
        var validationData = {
            parentId: parentId,
            kindId: $scope.kindId,
            validationId: $scope.validationId,
            alias: $scope.info.validationAlias,
            name: $scope.info.validationName,
            data: angular.fromJson(angular.toJson($scope.data))
        };

        // Persist validation on server.
        services.formulateValidations.persistValidation(validationData)
            .then(function(responseData) {

                // Validation is no longer new.
                var isNew = $scope.isNew;
                $scope.isNew = false;

                // Redirect or reload page.
                if (isNew) {
                    var url = "/formulate/formulate/editValidation/"
                        + responseData.validationId;
                    services.$location.url(url);
                } else {

                    // Even existing validations reload (e.g., to get new data).
                    services.$route.reload();

                }

            });

    };
}

// Gets the ID path to the validation.
function getValidationPath($scope) {
    var path = $scope.validationPath;
    if (!path) {
        path = [];
    }
    return path;
}

// Gets the ID of the validation's parent.
function getParentId($scope) {
    if ($scope.parentId) {
        return $scope.parentId;
    }
    var path = getValidationPath($scope);
    var parentId = path.length > 0
        ? path[path.length - 2]
        : null;
    return parentId;
}

// Initializes the validation.
function initializeValidation(options, services) {

    // Variables.
    var id = options.id;
    var $scope = services.$scope;

    // Disable validation saving until the data is populated.
    $scope.initialized = false;

    // Get the validation info.
    services.formulateValidations.getValidationInfo(id)
        .then(function(validation) {

            // Update tree.
            services.formulateTrees.activateEntity(validation);

            // Set the validation info.
            $scope.kindId = validation.kindId;
            $scope.validationId = validation.validationId;
            $scope.info.validationAlias = validation.alias;
            $scope.info.validationName = validation.name;
            $scope.validationPath = validation.path;
            $scope.directive = validation.directive;
            $scope.data = validation.data;

            // The validation can be saved now.
            $scope.initialized = true;

        });

}

// Returns the function that indicates whether or not the validation can be saved.
function getCanSave(services) {
    return function() {
        return services.$scope.initialized;
    };
}
},{}],63:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives", "$compile"];
var app = angular.module("umbraco");

// Associate directive/controller.
app.directive("formulateValidationEditor", directive);

// Directive.
function directive(formulateDirectives, $compile) {
    return {
        restrict: "E",
        template: formulateDirectives.get("validationEditor/validationEditor.html"),
        replace: true,
        scope: {
            directive: "=",
            data: "="
        },
        link: function (scope, element) {

            // Create directive.
            var markup = "<" + scope.directive + " data=\"data\"></" + scope.directive + ">";
            var directive = $compile(markup)(scope);
            element.replaceWith(directive);

        }
    };
}
},{}],64:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Associate directive.
app.directive("formulateValidationMandatory", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get(
            "validationKinds/validationMandatory/validationMandatory.html"),
        scope: {
            data: "="
        }
    };
}
},{}],65:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Associate directive.
app.directive("formulateValidationRegex", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get(
            "validationKinds/validationRegex/validationRegex.html"),
        scope: {
            data: "="
        }
    };
}
},{}],66:[function(require,module,exports){
// Variables.
controller.$inject = ["$scope", "$location", "$q", "$http", "navigationService", "formulateValidations", "formulateVars"];
directive.$inject = ["formulateDirectives"];
var app = angular.module("umbraco");

// Register directive/controller.
app.controller("formulate.validationTypeChooser", controller);
app.directive("formulateValidationTypeChooser", directive);

// Directive.
function directive(formulateDirectives) {
    return {
        restrict: "E",
        template: formulateDirectives.get(
            "validationTypeChooser/validationChooser.html"),
        controller: "formulate.validationTypeChooser"
    };
}

// Controller.
function controller($scope, $location, $q, $http, navigationService,
    formulateValidations, formulateVars) {

    // Variable containing the common services (easier to pass around).
    var services = {
        $scope: $scope,
        $location: $location,
        $q: $q,
        $http: $http,
        navigationService: navigationService,
        formulateValidations: formulateValidations,
        formulateVars: formulateVars
    };

    // Assign variables to scope.
    $scope.validationName = null;
    $scope.validationAlias = null;
    $scope.kind = {
        id: null,
        kinds: []
    };
    setValidationKinds(services);

    // Assign functions on scope.
    $scope.createValidation = getCreateValidation(services);
    $scope.canCreate = getCanCreate(services);

}

// Sets the validation kinds on the scope.
function setValidationKinds(services) {
    services.formulateValidations.getKinds().then(function (data) {
        services.$scope.kind.kinds = data.map(function (item) {
            return {
                id: item.id,
                name: item.name
            };
        });
    });
}

// Returns a function that creates a new validation.
function getCreateValidation(services) {
    var $scope = services.$scope;
    return function() {
        var parentId = $scope.currentNode.id;
        var validationInfo = {
            parentId: parentId,
            kindId: $scope.kind.id,
            name: $scope.validationName,
            alias: $scope.validationAlias,
            data: {}
        };
        addNodeToTree(validationInfo, services)
            .then(function (node) {
                navigateToNode(node, services);
                services.navigationService.hideDialog();
            });
    };
}

// Adds a new node to the validation tree.
function addNodeToTree(validationInfo, services) {
    return services.formulateValidations.persistValidation(validationInfo)
        .then(function (node) {

            // Refresh tree.
            var options = {
                tree: "formulate",
                path: node.path,
                forceReload: false,
                activate: true
            };
            services.navigationService.syncTree(options);

            // Return node.
            return node;

        },function () {
            services.$q.reject();
        });
}

// Navigates to a node.
function navigateToNode(node, services) {
    var nodeId = node.id;
    var url = services.formulateVars.EditValidationBase + nodeId;
    services.$location.url(url);
}

// Returns a function that indicates whether or not the user can create.
function getCanCreate(services) {
    return function() {
        var validationName = services.$scope.validationName;
        var kindId = services.$scope.kind.id;
        //TODO: Check for whitespace and other edge cases that are invalid.
        if (validationName && kindId && validationName.length > 0) {
            return true;
        } else {
            return false;
        }
    };
}
},{}],67:[function(require,module,exports){
// Variables.
directive.$inject = ["formulateDirectives"];
controller.$inject = ["formulateSubmissions", "dialogService", "$scope", "formulateForms", "formulateVars"];
var app = angular.module("umbraco");
var itemsPerPage = 10;

// Directive.
app.directive("formulateViewSubmissions", directive);
function directive(formulateDirectives) {
    return {
        restrict: "E",
        replace: true,
        template: formulateDirectives.get(
            "viewSubmissions/viewSubmissions.html"),
        controller: controller
    };
}

// Controller.
function controller(formulateSubmissions, dialogService, $scope, formulateForms, formulateVars) {

    // Variables.
    var injected = {
        $scope: $scope,
        dialogService: dialogService,
        formulateForms: formulateForms,
        formulateSubmissions: formulateSubmissions,
        formulateVars: formulateVars
    };

    // Scope functions.
    $scope.pickForm = getPickForm(injected);
    $scope.getPage = getGetPage(injected);
    $scope.getPagerItems = getGetPagerItems(injected);
    $scope.getRowClass = getRowClass;
    $scope.getNodeUrl = getNodeUrl;
    $scope.getPagerItemClass = getPagerItemClass;
    $scope.getExportUrl = getGetExportUrl(injected);

    // Initialize scope variables.
    $scope.totalSubmissions = 0;
    $scope.submissions = [];
    $scope.currentPage = 0;
    $scope.pagerItems = [];
    $scope.info = {
        header: getFormHeader(),
        tabs: [
            {
                id: 6,
                active: true,
                label: "Submissions",
                alias: "submissions"
            }
        ]
    };

}

// Returns the header to show for the given form name.
function getFormHeader(formName) {
    if (formName) {
        return "Form Submisions (" + formName + ")";
    } else {
        return "Form Submissions";
    }
}

// Returns the URL that downloads an export to a CSV.
function getGetExportUrl(injected) {
    var formulateVars = injected.formulateVars;
    return function (formId) {
        var downloadUrlBase = formulateVars.DownloadCsvExport + "?FormId=";
        var url = downloadUrlBase + encodeURIComponent(formId);
        return url;
    };
}

// Returns the function that allows the user to pick a form.
function getPickForm(injected) {
    var dialogService = injected.dialogService;
    var $scope = injected.$scope;
    return function() {
        dialogService.open({
            template: "../App_Plugins/formulate/dialogs/pickForm.html",
            show: true,
            callback: function(data) {

                // If no form was chosen, unset values.
                if (!data.length) {
                    $scope.formId = null;
                    $scope.info.header = getFormHeader();
                    $scope.totalSubmissions = 0;
                    $scope.submissions = [];
                    $scope.currentPage = 0;
                    return;
                }

                // Update values.
                var formId = data[0];
                $scope.formId = formId;
                $scope.currentPage = 0;
                refreshForm(formId, injected);
                updateSubmissions(injected);

            }
        });
    };
}

// Gets info about the form based on its ID, then updates the info on the scope.
function refreshForm(formId, injected) {
    var $scope = injected.$scope;
    $scope.info.header = getFormHeader();
    var formulateForms = injected.formulateForms;
    formulateForms.getFormInfo(formId)
        .then(function (data) {
            $scope.info.header = getFormHeader(data.name);
        });
}

// Updates the form submissions table.
function updateSubmissions(injected) {
    var $scope = injected.$scope;
    var formulateSubmissions = injected.formulateSubmissions;
    var formId = $scope.formId;
    formulateSubmissions.getSubmissions(formId, $scope.currentPage + 1, itemsPerPage)
        .then(function (data) {
            $scope.totalSubmissions = data.total;
            $scope.submissions = data.submissions;
        });
}

// Returns the function that gets the specified page of form submissions.
function getGetPage(injected) {
    var $scope = injected.$scope;
    return function (pageNumber) {
        $scope.currentPage = pageNumber - 1;
        updateSubmissions(injected);
    };
}

// Returns a class to be used on a form submission row.
function getRowClass(index) {
    var isEven = (index % 2) === 0;
    return isEven
        ? "formulate-submission-row-even"
        : "formulate-submission-row-odd";
}

// Returns a class to be used on a pager item.
function getPagerItemClass(active) {
    return active
        ? "formulate-pager-item-active"
        : "formulate-pager-item-inactive";
}

// Gets the URL to edit a node with the specified ID.
function getNodeUrl(nodeId) {
    return "/umbraco/#/content/content/edit/" + nodeId.toString();
}

// Gets the function that returns items to be used when generating the pager.
function getGetPagerItems(injected) {
    var $scope = injected.$scope;
    return function () {
        adjustPagerItems(injected);
        return $scope.pagerItems;
    }
}

// Adjusts the pager items to contain the correct values.
function adjustPagerItems(injected) {

    // Variables.
    var $scope = injected.$scope;

    // If there are no submissions, set the pager items to an empty array.
    if ($scope.totalSubmissions === 0) {
        $scope.pagerItems = [];
        return;
    }

    // Variables.
    var pageCount = Math.ceil($scope.totalSubmissions / itemsPerPage);
    var minPage = Math.max(0, $scope.currentPage - 2);
    var maxPage = Math.min(minPage + 4, pageCount - 1);
    minPage = Math.max(0, maxPage - 4);
    var pages = $scope.pagerItems;
    var pagerItemCount = maxPage - minPage + 1;

    // Remove extra items from the pager.
    while (pages.length > pagerItemCount) {
        pages.pop();
    }

    // Add enough items to the pager.
    while(pages.length < pagerItemCount) {
        pages.push({
            pageNumber: 0,
            active: false
        });
    }

    // Adjust pager items to have correct values.
    for (var i = minPage; i <= maxPage; i++) {
        var indexIntoPager = i - minPage;
        pages[indexIntoPager].pageNumber = i + 1;
        pages[indexIntoPager].active = i === $scope.currentPage;
    }

}
},{}],68:[function(require,module,exports){
// Associate controller.
controller.$inject = ["$scope", "formulateConfiguredForms", "dialogService"];
app.controller("formulate.editors.configuredFormPicker", controller);

// Controller.
function controller($scope, formulateConfiguredForms, dialogService) {

    // Variables.
    var services = {
        $scope: $scope,
        formulateConfiguredForms: formulateConfiguredForms,
        dialogService: dialogService
    };

    // Scope functions.
    $scope.pickForm = getPickForm(services);

    // Initialize.
    initialize(services);

}

// Initializes the scope variables.
function initialize(services) {
    var $scope = services.$scope;
    if (!$scope.model.value) {
        $scope.model.value = {
            id: null
        };
    }
    var id = $scope.model.value.id
    if (id) {
        refreshForm(id, services);
    }
}

// Returns the function that opens a dialog to allow the user to pick a form.
function getPickForm(services) {
    var dialogService = services.dialogService;
    var $scope = services.$scope;
    return function() {
        dialogService.open({
            template: "../App_Plugins/formulate/dialogs/pickConfiguredForm.html",
            show: true,
            callback: function(data) {

                // If no form was chosen, deselect form.
                if (!data.length) {
                    $scope.model.value.id = null;
                    return;
                }

                // Store form ID.
                var conFormId = data[0];
                $scope.model.value.id = conFormId;

                // Update form info.
                refreshForm(conFormId, services);

            }
        });
    };
}

// Gets info about the form based on its ID, then updates the info on the scope.
function refreshForm(conFormId, services) {
    var $scope = services.$scope;
    $scope.formName = null;
    var formulateConfiguredForms = services.formulateConfiguredForms;
    formulateConfiguredForms.getConfiguredFormInfo(conFormId)
        .then(function (data) {
            $scope.formName = data.name;
        });
}
},{}],69:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");
var translations = {};

// A filter that facilitates conditional localization.
app.filter("formulatelocalize", ["localizationService", function (localizationService) {
    var filterFn = function(input, shouldLocalize) {
        if (shouldLocalize === false) {
            return input;
        } else if (translations[input]) {
            return translations[input];
        } else {

            // Store translation for later.
            return localizationService
                .localize(input)
                .then(function (value) {
                    translations[input] = value;
                });

        }
    };
    filterFn.$stateful = true;
    return filterFn;
}]);
},{}],70:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with Formulate configured forms.
app.factory("formulateConfiguredForms", ["formulateVars", "formulateServer", function (formulateVars,
    formulateServer) {

    // Variables.
    var services = {
        formulateVars: formulateVars,
        formulateServer: formulateServer
    };

    // Return service.
    return {

        // Gets the configured form info for the configured form with the specified ID.
        getConfiguredFormInfo: getGetConfiguredFormInfo(services),

        // Saves the configured form on the server.
        persistConfiguredForm: getPersistConfiguredForm(services),

        // Deletes a configured form from the server.
        deleteConfiguredForm: getDeleteConfiguredForm(services)

    };

}]);

// Returns the function that gets information about a configured form.
function getGetConfiguredFormInfo(services) {
    return function (id) {

        // Variables.
        var url = services.formulateVars.GetConfiguredFormInfo;
        var params = {
            ConFormId: id
        };

        // Get configured form info from server.
        return services.formulateServer.get(url, params, function (data) {
            return {
                conFormId: data.ConFormId,
                path: data.Path,
                name: data.Name,
                layoutId: data.LayoutId,
                templateId: data.TemplateId
            };
        });

    };
}

// Returns the function that persists a configured form on the server.
function getPersistConfiguredForm(services) {
    return function (conFormInfo) {

        // Variables.
        var url = services.formulateVars.PersistConfiguredForm;
        var data = {
            ParentId: conFormInfo.parentId,
            ConFormId: conFormInfo.conFormId,
            Name: conFormInfo.name,
            LayoutId: conFormInfo.layoutId,
            TemplateId: conFormInfo.templateId
        };

        // Send request to create the configured form.
        return services.formulateServer.post(url, data, function (data) {

            // Return configured form information.
            return {
                id: data.Id,
                path: data.Path
            };

        });

    };
}

// Returns the function that deletes a configured form from the server.
function getDeleteConfiguredForm(services) {
    return function(conFormId) {

        // Variables.
        var url = services.formulateVars.DeleteConfiguredForm;
        var data = {
            ConFormId: conFormId
        };

        // Send request to delete the configured form.
        return services.formulateServer.post(url, data, function (data) {

            // Return empty data.
            return {};

        });

    };
}
},{}],71:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with Formulate data values.
app.factory("formulateDataValues", ["formulateVars", "formulateServer", function (formulateVars,
    formulateServer) {

    // Variables.
    var services = {
        formulateVars: formulateVars,
        formulateServer: formulateServer
    };

    // Return service.
    return {

        // Gets the data value info for the data value with the specified ID.
        getDataValueInfo: getGetDataValueInfo(services),

        // Gets the data value info for the data values with
        // the specified ID's.
        getDataValuesInfo: getGetDataValuesInfo(services),

        // Saves the data value on the server.
        persistDataValue: getPersistDataValue(services),

        // Deletes a data value from the server.
        deleteDataValue: getDeleteDataValue(services),

        // Gets the kind of data values from the server.
        getKinds: getGetKinds(services),

        // Moves a data value to a new parent on the server.
        moveDataValue: getMoveDataValue(services),

        // Gets the data value suppliers from the server.
        getSuppliers: getGetSuppliers(services)

    };

}]);

// Returns the function that gets information about a data value.
function getGetDataValueInfo(services) {
    return function (id) {

        // Variables.
        var url = services.formulateVars.GetDataValueInfo;
        var params = {
            DataValueId: id
        };

        // Get data value info from server.
        return services.formulateServer.get(url, params, function (data) {
            return {
                kindId: data.KindId,
                dataValueId: data.DataValueId,
                path: data.Path,
                name: data.Name,
                alias: data.Alias,
                directive: data.Directive,
                data: data.Data
            };
        });

    };
}

// Returns the function that gets information about data values.
function getGetDataValuesInfo(services) {
    return function (ids) {

        // Variables.
        var url = services.formulateVars.GetDataValuesInfo;
        var params = {
            DataValueIds: ids
        };

        // Get data value info from server.
        return services.formulateServer.get(url, params, function (data) {
            return data.DataValues.map(function (item) {
                return {
                    kindId: item.KindId,
                    dataValueId: item.DataValueId,
                    path: item.Path,
                    name: item.Name,
                    alias: item.Alias,
                    directive: item.Directive,
                    data: item.Data
                };
            });
        });


    };
}

// Returns the function that persists a data value on the server.
function getPersistDataValue(services) {
    return function (dataValueInfo) {

        // Variables.
        var url = services.formulateVars.PersistDataValue;
        var data = {
            KindId: dataValueInfo.kindId,
            ParentId: dataValueInfo.parentId,
            DataValueId: dataValueInfo.dataValueId,
            DataValueName: dataValueInfo.name,
            DataValueAlias: dataValueInfo.alias,
            Data: dataValueInfo.data
        };

        // Send request to create the data value.
        return services.formulateServer.post(url, data, function (data) {

            // Return data value information.
            return {
                id: data.Id,
                path: data.Path
            };

        });

    };
}

// Returns the function that deletes a data value from the server.
function getDeleteDataValue(services) {
    return function(dataValueId) {

        // Variables.
        var url = services.formulateVars.DeleteDataValue;
        var data = {
            DataValueId: dataValueId
        };

        // Send request to delete the data value.
        return services.formulateServer.post(url, data, function (data) {

            // Return empty data.
            return {};

        });

    };
}

// Returns the function that gets the data value kinds.
function getGetKinds(services) {
    return function () {

        // Variables.
        var url = services.formulateVars.GetDataValueKinds;

        // Get data value kinds from server.
        return services.formulateServer.get(url, {}, function (data) {
            return data.Kinds.map(function (item) {
                return {
                    id: item.Id,
                    name: item.Name,
                    directive: item.Directive
                };
            });
        });

    };
}

// Returns the function that gets the data value suppliers.
function getGetSuppliers(services) {
    return function () {

        // Variables.
        var url = services.formulateVars.GetDataValueSuppliers;

        // Get data value kinds from server.
        return services.formulateServer.get(url, {}, function (data) {
            return data.Kinds.map(function (item) {
                return {
                    name: item.Name,
                    className: item.ClassName
                };
            });
        });

    };
}

// Returns the function that moves a data value.
function getMoveDataValue(services) {
    return function (dataValueId, newParentId) {

        // Variables.
        var url = services.formulateVars.MoveDataValue;
        var data = {
            DataValueId: dataValueId,
            NewParentId: newParentId
        };

        // Send request to persist the data value.
        return services.formulateServer.post(url, data, function (data) {

            // Return data value info.
            return {
                id: data.Id,
                path: data.Path
            };

        });

    };
}
},{}],72:[function(require,module,exports){
// Requirements.
var getDirective = require("../Utilities/getDirective.js");

// Variables.
var app = angular.module("umbraco");

// Service to help with directives.
app.factory("formulateDirectives", function() {

    /**
     * Handles retrieval of directives.
     * @module services/formulateDirectives
     */
    return {

        /**
         * Retrieves the markup for a directive.
         * @param {string} path - The path to the directive (e.g., "layoutDesigner/designer.html").
         * @returns {string} The markup for the directive.
         */
        get: function(path) {
            return getDirective(path);
        }

    };
});
},{"../Utilities/getDirective.js":89}],73:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with Formulate entities.
app.factory("formulateEntities", ["formulateVars", "formulateServer", function (formulateVars,
    formulateServer) {

    // Variables.
    var services = {
        formulateVars: formulateVars,
        formulateServer: formulateServer
    };

    // Return service.
    return {

        // Gets the children for the entity with the specified ID.
        getEntityChildren: getGetEntityChildren(services),

        // Gets the entity with the specified ID.
        getEntity: getGetEntity(services)

    };

}]);

// Returns the function that gets children for an entity.
function getGetEntityChildren(services) {
    return function (id) {

        // Variables.
        var url = services.formulateVars.GetEntityChildren;
        var params = {
            EntityId: id
        };

        // Get entity children from server.
        return services.formulateServer.get(url, params, function (data) {

            // Return entity children.
            return {
                children: data.Children.map(function (child) {
                    return {
                        id: child.Id,
                        name: child.Name,
                        icon: child.Icon,
                        kind: child.Kind,
                        hasChildren: child.HasChildren,
                        children: []
                    };
                })
            };

        });

    };
}


// Returns the function that gets an entity.
function getGetEntity(services) {
    return function (id) {

        // Variables.
        var url = services.formulateVars.GetEntity;
        var params = {
            EntityId: id
        };

        // Get entity from server.
        return services.formulateServer.get(url, params, function (data) {

            // Return entity.
            return {
                id: data.Id,
                path: data.Path,
                name: data.Name,
                icon: data.Icon,
                kind: data.Kind,
                hasChildren: data.HasChildren,
                children: []
            };

        });

    };
}
},{}],74:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with Formulate fields.
app.factory("formulateFields", ["formulateVars", "formulateServer", function (formulateVars,
    formulateServer) {

    // Variables.
    var services = {
        formulateVars: formulateVars,
        formulateServer: formulateServer
    };

    // Return service.
    return {

        // Gets the field types.
        getFieldTypes: getGetFieldTypes(services),


        // Gets the button kinds.
        getButtonKinds: getGetButtonKinds(services),


        // Gets the field categories.
        getFieldCategories: getGetFieldCategories(services)

    };

}]);

// Returns the function that gets field types.
function getGetFieldTypes(services) {
    return function () {

        // Variables.
        var url = services.formulateVars.GetFieldTypes;

        // Get field types from server.
        return services.formulateServer.get(url, {}, function (data) {

            // Return field types.
            return data.FieldTypes.map(function (field) {
                return {
                    icon: field.Icon,
                    typeLabel: field.TypeLabel,
                    directive: field.Directive,
                    typeFullName: field.TypeFullName
                };
            });

        });

    };
}


// Returns the function that gets button kinds.
function getGetButtonKinds(services) {
    return function () {

        // Variables.
        var url = services.formulateVars.GetButtonKinds;

        // Get button kinds from server.
        return services.formulateServer.get(url, {}, function (data) {

            // Return button kinds.
            return data.ButtonKinds;

        });

    };
}


// Returns the function that gets field categories.
function getGetFieldCategories(services) {
    return function () {

        // Variables.
        var url = services.formulateVars.GetFieldCategories;

        // Get field categories from server.
        return services.formulateServer.get(url, {}, function (data) {

            // Return field categories.
            return data.FieldCategories.map(function (category) {
                return {
                    kind: category.Kind,
                    group: category.Group
                };
            });

        });

    };
}
},{}],75:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with Formulate folders.
app.factory("formulateFolders", ["formulateVars", "formulateServer", function (formulateVars,
    formulateServer) {

    // Variables.
    var services = {
        formulateVars: formulateVars,
        formulateServer: formulateServer
    };

    // Return service.
    return {

        // Gets the folder info for the folder with the specified ID.
        getFolderInfo: getGetFolderInfo(services),

        // Saves the folder on the server.
        persistFolder: getPersistFolder(services),

        // Creates the folder.
        createFolder: getCreateFolder(services),

        // Moves a folder to a new parent on the server.
        moveFolder: getMoveFolder(services),

        // Deletes a folder from the server.
        deleteFolder: getDeleteFolder(services),

    };

}]);

// Returns the function that gets information about a folder.
function getGetFolderInfo(services) {
    return function (id) {

        // Variables.
        var url = services.formulateVars.GetFolderInfo;
        var params = {
            FolderId: id
        };

        // Get folder info from server.
        return services.formulateServer.get(url, params, function (data) {
            return {
                folderId: data.FolderId,
                path: data.Path,
                name: data.Name
            };
        });

    };
}

// Returns the function that creates a folder on the server.
function getCreateFolder(services) {
    return function (folderData) {

        // Variables.
        var url = services.formulateVars.PersistFolder;
        var data = {
            ParentId: folderData.parentId,
            FolderName: folderData.folderName
        };

        // Send request to create the folder.
        return services.formulateServer.post(url, data, function (data) {

            // Return form ID.
            return {
                folderId: data.FolderId,
                path: data.Path
            };

        });

    };
}

// Returns the function that persists a folder on the server.
function getPersistFolder(services) {
    return function (folderInfo) {

        // Variables.
        var url = services.formulateVars.PersistFolder;
        var data = {
            ParentId: folderInfo.parentId,
            FolderId: folderInfo.folderId,
            FolderName: folderInfo.name
        };

        // Send request to create the folder.
        return services.formulateServer.post(url, data, function (data) {

            // Return folder information.
            return {
                id: data.Id,
                path: data.Path
            };

        });

    };
}

// Returns the function that moves a folder.
function getMoveFolder(services) {
    return function (folderId, newParentId) {

        // Variables.
        var url = services.formulateVars.MoveFolder;
        var data = {
            FolderId: folderId,
            NewParentId: newParentId
        };

        // Send request to persist the folder.
        return services.formulateServer.post(url, data, function (data) {

            // Return folder info.
            return {
                id: data.Id,
                path: data.Path,
                descendants: data.Descendants.map(function (item) {
                    return {
                        id: item.Id,
                        path: item.Path
                    };
                })
            };

        });

    };
}


// Returns the function that deletes a folder from the server.
function getDeleteFolder(services) {
    return function(folderId) {

        // Variables.
        var url = services.formulateVars.DeleteFolder;
        var data = {
            FolderId: folderId
        };

        // Send request to delete the folder.
        return services.formulateServer.post(url, data, function (data) {

            // Return empty data.
            return {};

        });

    };
}
},{}],76:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with Formulate forms.
app.factory("formulateForms", ["formulateVars", "formulateServer", function (formulateVars,
    formulateServer) {

    // Variables.
    var services = {
        formulateVars: formulateVars,
        formulateServer: formulateServer
    };

    // Return service.
    return {

        // Gets the form info for the form with the specified ID.
        getFormInfo: getGetFormInfo(services),

        // Saves the form on the server.
        persistForm: getPersistForm(services),

        // Deletes a form from the server.
        deleteForm: getDeleteForm(services),

        // Moves a form to a new parent on the server.
        moveForm: getMoveForm(services)

    };

}]);

// Returns the function that gets information about a form.
function getGetFormInfo(services) {
    return function (id) {

        // Variables.
        var url = services.formulateVars.GetFormInfo;
        var params = {
            FormId: id
        };

        // Get form info from server.
        return services.formulateServer.get(url, params, function (data) {

            // Return form information.
            return {
                formId: data.FormId,
                alias: data.Alias,
                name: data.Name,
                path: data.Path,
                fields: data.Fields.map(function (field) {
                    return {
                        id: field.Id,
                        name: field.Name,
                        alias: field.Alias,
                        label: field.Label,
                        category: field.Category,
                        directive: field.Directive,
                        icon: field.Icon,
                        isServerSideOnly: field.IsServerSideOnly,
                        typeLabel: field.TypeLabel,
                        typeFullName: field.TypeFullName,
                        validations: field.Validations
                            .map(function(validation) {
                                return {
                                    id: validation.Id,
                                    name: validation.Name
                                };
                            }),
                        configuration: field.Configuration || {}
                    };
                }),
                handlers: data.Handlers.map(function (handler) {
                    return {
                        id: handler.Id,
                        name: handler.Name,
                        alias: handler.Alias,
                        directive: handler.Directive,
                        icon: handler.Icon,
                        typeLabel: handler.TypeLabel,
                        typeFullName: handler.TypeFullName,
                        configuration: handler.Configuration || {}
                    };
                })
            };

        });

    };
}

// Returns the function that persists a form on the server.
function getPersistForm(services) {
    return function (formData, isNew) {

        // Variables.
        var url = services.formulateVars.PersistForm;
        var data = {
            ParentId: formData.parentId,
            Alias: formData.alias,
            Name: formData.name,
            Fields: formData.fields.map(function(field) {
                var result = {
                    Name: field.name,
                    Alias: field.alias,
                    Label: field.label,
                    Category: field.category,
                    TypeFullName: field.typeFullName,
                    Validations: (field.validations || [])
                        .map(function(validation) {
                            return validation.id;
                        }),
                    Configuration: field.configuration
                };
                if (field.id) {
                    result.Id = field.id;
                }
                return result;
            }),
            Handlers: formData.handlers.map(function(handler) {
                var result = {
                    Name: handler.name,
                    Alias: handler.alias,
                    TypeFullName: handler.typeFullName,
                    Configuration: handler.configuration
                };
                if (handler.id) {
                    result.Id = handler.id;
                }
                return result;
            })
        };
        if (!isNew) {
            data.FormId = formData.formId
        }

        // Send request to persist the form.
        return services.formulateServer.post(url, data, function (data) {

            // Return form ID.
            return {
                formId: data.FormId
            };

        });

    };
}

// Returns the function that deletes a form from the server.
function getDeleteForm(services) {
    return function(formId) {

        // Variables.
        var url = services.formulateVars.DeleteForm;
        var data = {
            FormId: formId
        };

        // Send request to delete the form.
        return services.formulateServer.post(url, data, function () {

            // Return empty data.
            return {};

        });

    };
}

// Returns the function that moves a form.
function getMoveForm(services) {
    return function (formId, newParentId) {

        // Variables.
        var url = services.formulateVars.MoveForm;
        var data = {
            FormId: formId,
            NewParentId: newParentId
        };

        // Send request to persist the form.
        return services.formulateServer.post(url, data, function (data) {

            // Return form info.
            return {
                id: data.Id,
                path: data.Path,
                descendants: data.Descendants.map(function (item) {
                    return {
                        id: item.Id,
                        path: item.Path
                    };
                })
            };

        });

    };
}
},{}],77:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with Formulate handlers.
app.factory("formulateHandlers", ["formulateVars", "formulateServer", function (formulateVars,
    formulateServer) {

    // Variables.
    var services = {
        formulateVars: formulateVars,
        formulateServer: formulateServer
    };

    // Return service.
    return {

        // Gets the handler types.
        getHandlerTypes: getGetHandlerTypes(services),

        // Gets the result handler kinds.
        getResultHandlers: getGetResultHandlers(services)

    };

}]);

// Returns the function that gets handler types.
function getGetHandlerTypes(services) {
    return function () {

        // Variables.
        var url = services.formulateVars.GetHandlerTypes;

        // Get handler types from server.
        return services.formulateServer.get(url, {}, function (data) {

            // Return handler types.
            return data.HandlerTypes.map(function (handler) {
                return {
                    icon: handler.Icon,
                    typeLabel: handler.TypeLabel,
                    directive: handler.Directive,
                    typeFullName: handler.TypeFullName
                };
            });

        });

    };
}

// Returns the function that gets the result handler functions.
function getGetResultHandlers(services) {
    return function () {

        // Variables.
        var url = services.formulateVars.GetResultHandlers;

        // Get result handler kinds from server.
        return services.formulateServer.get(url, {}, function (data) {
            return data.Kinds.map(function (item) {
                return {
                    name: item.Name,
                    className: item.ClassName
                };
            });
        });

    };
}
},{}],78:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with Formulate layouts.
app.factory("formulateLayouts", ["formulateVars", "formulateServer", function (formulateVars,
    formulateServer) {

    // Variables.
    var services = {
        formulateVars: formulateVars,
        formulateServer: formulateServer
    };

    // Return service.
    return {

        // Gets the layout info for the layout with the specified ID.
        getLayoutInfo: getGetLayoutInfo(services),

        // Saves the layout on the server.
        persistLayout: getPersistLayout(services),

        // Deletes a layout from the server.
        deleteLayout: getDeleteLayout(services),

        // Gets the kind of layouts from the server.
        getKinds: getGetKinds(services),

        // Moves a layout to a new parent on the server.
        moveLayout: getMoveLayout(services)

    };

}]);

// Returns the function that gets information about a layout.
function getGetLayoutInfo(services) {
    return function (id) {

        // Variables.
        var url = services.formulateVars.GetLayoutInfo;
        var params = {
            LayoutId: id
        };

        // Get layout info from server.
        return services.formulateServer.get(url, params, function (data) {
            return {
                kindId: data.KindId,
                layoutId: data.LayoutId,
                path: data.Path,
                name: data.Name,
                alias: data.Alias,
                directive: data.Directive,
                data: data.Data
            };
        });

    };
}

// Returns the function that persists a layout on the server.
function getPersistLayout(services) {
    return function (layoutInfo) {

        // Variables.
        var url = services.formulateVars.PersistLayout;
        var data = {
            KindId: layoutInfo.kindId,
            ParentId: layoutInfo.parentId,
            LayoutId: layoutInfo.layoutId,
            LayoutName: layoutInfo.name,
            LayoutAlias: layoutInfo.alias,
            Data: layoutInfo.data
        };

        // Send request to create the layout.
        return services.formulateServer.post(url, data, function (data) {

            // Return layout information.
            return {
                id: data.Id,
                path: data.Path
            };

        });

    };
}

// Returns the function that deletes a layout from the server.
function getDeleteLayout(services) {
    return function(layoutId) {

        // Variables.
        var url = services.formulateVars.DeleteLayout;
        var data = {
            LayoutId: layoutId
        };

        // Send request to delete the layout.
        return services.formulateServer.post(url, data, function (data) {

            // Return empty data.
            return {};

        });

    };
}

// Returns the function that gets layout kinds.
function getGetKinds(services) {
    return function () {

        // Variables.
        var url = services.formulateVars.GetLayoutKinds;

        // Get layout kinds from server.
        return services.formulateServer.get(url, {}, function (data) {
            return data.Kinds.map(function (item) {
                return {
                    id: item.Id,
                    name: item.Name,
                    directive: item.Directive
                };
            });
        });

    };
}

// Returns the function that moves a layout.
function getMoveLayout(services) {
    return function (layoutId, newParentId) {

        // Variables.
        var url = services.formulateVars.MoveLayout;
        var data = {
            LayoutId: layoutId,
            NewParentId: newParentId
        };

        // Send request to persist the layout.
        return services.formulateServer.post(url, data, function (data) {

            // Return layout info.
            return {
                id: data.Id,
                path: data.Path
            };

        });

    };
}
},{}],79:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with Formulate localization.
app.factory("formulateLocalization", ["localizationService", function (localizationService) {

    // Variables.
    var services = {
        localizationService: localizationService
    };

    // Return service.
    return {

        // Localizes the tab labels.
        localizeTabs: getLocalizeTabs(services)

    };

}]);

// Returns the function that translates the tabs.
function getLocalizeTabs(services) {
    return function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            localizeTab(tabs[i], services.localizationService);
        }
    };
}

// Translates the tab label.
function localizeTab(tab, localizationService) {
    localizationService
        .localize("formulate-tabs_" + tab.label)
        .then(function (value) {

            // Set tab label to translated value.
            tab.label = value;

        });
}
},{}],80:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with permissions.
app.factory("formulatePermissions", ["notificationsService", "formulateVars", "formulateServer", function (notificationsService,
    formulateVars, formulateServer) {
    var services = {
        notificationsService: notificationsService,
        formulateVars: formulateVars,
        formulateServer: formulateServer
    };
    return {
        permitFormulateAccess:
            getPermitFormulateAccess(services)
    };
}]);

// Returns a function that will request that the current
// user be given access to the "Formulate" section in Umbraco.
function getPermitFormulateAccess(services) {

    // Variables.
    var notificationsService = services.notificationsService,
        formulateVars = services.formulateVars;

    // Return function.
    return function () {

        // Variables.
        var url = formulateVars.PermitAccess;

        // Send request to set permissions.
        services.formulateServer.post(url, {}, function (data) {

            // Success notification.
            showSuccess(notificationsService);

            // Reload page.
            reloadPage();

        });

    };

}

// Reloads the page after 3 seconds.
function reloadPage() {
    setTimeout(function () {
        window.location.reload(true);
    }, 3000);
}

// Shows a success notification.
function showSuccess(notificationsService) {
    var title = "Success";
    var message = "You have been granted access to the \"Formulate\" section. The page will automatically refresh in a few seconds.";
    notificationsService.success(title, message);
}
},{}],81:[function(require,module,exports){
// See: http://stackoverflow.com/a/18609594/2052963

// Variables.
var app = angular.module("umbraco");

// Service to help with recursion.
app.factory('formulateRecursion', ["$compile", function($compile) {
    return {
        getCompiler: function(element) {

            // Break the recursion loop by removing the contents.
            var contents = element.contents().remove();
            var compiledContents;
            return {
                pre: null,

                // Compiles and re-adds the contents.
                post: function(scope, element) {

                    // Compile the contents.
                    if(!compiledContents) {
                        compiledContents = $compile(contents);
                    }

                    // Re-add the compiled contents to the element.
                    compiledContents(scope, function(clone) {
                        element.append(clone);
                    });

                }

            };
        }
    };
}]);
},{}],82:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with server communication.
app.factory("formulateServer", ["$http", "$q", "notificationsService", function ($http, $q, notificationsService) {

    // Variables.
    var services = {
        $http: $http,
        $q: $q,
        notificationsService: notificationsService
    };

    // Return service.
    return {

        // Performs an HTTP GET.
        get: getGet(services),

        // Performs an HTTP POST.
        post: getPost(services)

    };

}]);

// Returns the function that makes a GET request to the server.
function getGet(services) {
    return function (url, params, successCallback) {

        // Set options.
        var options = {
            cache: false,
            params: {
                // Cache buster ensures requests aren't cached.
                CacheBuster: Math.random()
            }
        };
        angular.extend(options.params, params || {});

        // Make request.
        return services.$http.get(url, options)
            .then(
                getHandleResponse(services, successCallback),
                getHandleServerError(services));

    };

}

// Returns the function that makes a POST request to the server.
function getPost(services) {
    return function (url, data, successCallback) {

        // Variables.
        var strData = JSON.stringify(data);
        var options = {
            headers: {
                "Content-Type": "application/json"
            }
        };

        // Send request to server.
        return services.$http.post(url, strData, options)
            .then(
                getHandleResponse(services, successCallback),
                getHandleServerError(services));

    };
}

// Returns the function that handles a server error.
function getHandleServerError(services) {
    return function() {

        // Indicate error with notification.
        var title = "Server Error";
        var message = "There was an issue communicating with the server.";
        services.notificationsService.error(title, message);
        return services.$q.reject();

    };
}

// Returns the function that handles a server response.
function getHandleResponse(services, successCallback) {
    return function (response) {

        // Variables.
        var data = response.data;

        // Was the request successful?
        if (data.Success) {
            return successCallback(data);
        } else {

            // Error notification.
            var title = "Unexpected Error";
            var message = data.Reason;
            services.notificationsService.error(title, message);
            return services.$q.reject();

        }

    };
}
},{}],83:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with server-side configuration.
app.factory("formulateServerConfig", ["formulateVars", "formulateServer", function (formulateVars, formulateServer) {

    // Variables.
    var services = {
        formulateVars: formulateVars,
        formulateServer: formulateServer
    };

    // Return service.
    return {

        // Checks whether or not recaptcha has been configured.
        hasConfiguredRecaptcha: getHasConfiguredRecaptcha(services)

    };

}]);

// Returns the function that checks if the server has been configured for recaptcha.
function getHasConfiguredRecaptcha(services) {
    return function () {

        // Variables.
        var url = services.formulateVars.HasConfiguredRecaptcha;

        // Check if the server has configured recaptcha.
        return services.formulateServer.get(url, {}, function (data) {

            // Return whether or not the server is configured for recaptcha.
            return data.HasConfigured

        });

    };
}
},{}],84:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with Formulate form submissions.
app.factory("formulateSubmissions", ["formulateVars", "formulateServer", function (formulateVars,
   formulateServer) {

    // Variables.
    var services = {
        formulateVars: formulateVars,
        formulateServer: formulateServer
    };

    // Return service.
    return {

        // Gets the form submissions based on the specified criteria.
        getSubmissions: getGetSubmissions(services)

    };

}]);

// Returns the function that gets the form submissions.
function getGetSubmissions(services) {
    return function (formId, page, itemsPerPage) {

        // Variables.
        var url = services.formulateVars.GetSubmissions;
        var downloadUrlBase = services.formulateVars.DownloadFile + "?PathSegment=";
        var params = {
            FormId: formId,
            Page: page,
            ItemsPerPage: itemsPerPage,
            TimezoneOffset: (new Date()).getTimezoneOffset()
        };

        // Get submissions from server.
        return services.formulateServer.get(url, params, function (data) {

            // Return information about submissions.
            return {
                total: data.Total,
                submissions: data.Submissions.map(function (item) {
                    return {
                        pageId: item.PageId,
                        url: item.Url,
                        creationDate: item.CreationDate,
                        fields: item.Fields.map(function (field) {
                            return {
                                name: field.Name,
                                value: field.Value
                            };
                        }),
                        files: item.Files.map(function (field) {
                            var path = encodeURIComponent(field.PathSegment);
                            var filename = encodeURIComponent(field.Filename);
                            return {
                                name: field.Name,
                                filename: field.Filename,
                                path: downloadUrlBase + path + "&Filename=" + filename
                            };
                        })
                    };
                })
            };

        });

    };
}
},{}],85:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with Formulate templates.
app.factory("formulateTemplates", ["formulateVars", "formulateServer", function (formulateVars,
    formulateServer) {

    // Variables.
    var services = {
        formulateVars: formulateVars,
        formulateServer: formulateServer
    };

    // Return service.
    return {

        // Gets the templates from the server.
        getTemplates: getGetTemplates(services)

    };

}]);

// Returns the function that gets templates.
function getGetTemplates(services) {
    return function () {

        // Variables.
        var url = services.formulateVars.GetTemplates;

        // Get templates from server.
        return services.formulateServer.get(url, {}, function (data) {
            return data.Templates.map(function (item) {
                return {
                    id: item.Id,
                    name: item.Name
                };
            });
        });

    };
}
},{}],86:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with Formulate trees.
app.factory("formulateTrees", ["navigationService", function (navigationService) {

    // Variables.
    var services = {
        navigationService: navigationService
    };

    // Return service.
    return {

        // Activates the specified entity in the tree.
        activateEntity: getActivateEntity(services)

    };

}]);

// Shows/highlights the node in the Formulate tree.
function getActivateEntity(services) {
    return function (entity) {
        var options = {
            tree: "formulate",
            path: entity.path,
            forceReload: true,
            activate: true
        };
        services.navigationService.syncTree(options);
    };
}
},{}],87:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with Formulate validations.
app.factory("formulateValidations", ["formulateVars", "formulateServer", function (formulateVars,
    formulateServer) {

    // Variables.
    var services = {
        formulateVars: formulateVars,
        formulateServer: formulateServer
    };

    // Return service.
    return {

        // Gets the validation info for the validation with the specified ID.
        getValidationInfo: getGetValidationInfo(services),

        // Gets the info for the validations with the specified IDs.
        getValidationsInfo: getGetValidationsInfo(services),

        // Saves the validation on the server.
        persistValidation: getPersistValidation(services),

        // Deletes a validation from the server.
        deleteValidation: getDeleteValidation(services),

        // Gets the kind of validations from the server.
        getKinds: getGetKinds(services),

        // Moves a validation to a new parent on the server.
        moveValidation: getMoveValidation(services)

    };

}]);

// Returns the function that gets information about a validation.
function getGetValidationInfo(services) {
    return function (id) {

        // Variables.
        var url = services.formulateVars.GetValidationInfo;
        var params = {
            ValidationId: id
        };

        // Get validation info from server.
        return services.formulateServer.get(url, params, function (data) {
            return {
                kindId: data.KindId,
                validationId: data.ValidationId,
                path: data.Path,
                name: data.Name,
                alias: data.Alias,
                directive: data.Directive,
                data: data.Data
            };
        });

    };
}

// Returns the function that gets information about validations.
function getGetValidationsInfo(services) {
    return function (ids) {

        // Variables.
        var url = services.formulateVars.GetValidationsInfo;
        var params = {
            ValidationIds: ids
        };

        // Get validation info from server.
        return services.formulateServer.get(url, params, function (data) {
            return data.Validations.map(function(item) {
                return {
                    kindId: item.KindId,
                    validationId: item.ValidationId,
                    path: item.Path,
                    name: item.Name,
                    alias: item.Alias,
                    directive: item.Directive,
                    data: item.Data
                };
            });
        });

    };
}

// Returns the function that persists a validation on the server.
function getPersistValidation(services) {
    return function (validationInfo) {

        // Variables.
        var url = services.formulateVars.PersistValidation;
        var data = {
            KindId: validationInfo.kindId,
            ParentId: validationInfo.parentId,
            ValidationId: validationInfo.validationId,
            ValidationName: validationInfo.name,
            ValidationAlias: validationInfo.alias,
            Data: validationInfo.data
        };

        // Send request to create the validation.
        return services.formulateServer.post(url, data, function (data) {

            // Return validation information.
            return {
                id: data.Id,
                path: data.Path
            };

        });

    };
}

// Returns the function that deletes a validation from the server.
function getDeleteValidation(services) {
    return function(validationId) {

        // Variables.
        var url = services.formulateVars.DeleteValidation;
        var data = {
            ValidationId: validationId
        };

        // Send request to delete the validation.
        return services.formulateServer.post(url, data, function (data) {

            // Return empty data.
            return {};

        });

    };
}

// Returns the function that gets validation kinds.
function getGetKinds(services) {
    return function () {

        // Variables.
        var url = services.formulateVars.GetValidationKinds;

        // Get validation kinds from server.
        return services.formulateServer.get(url, {}, function (data) {
            return data.Kinds.map(function (item) {
                return {
                    id: item.Id,
                    name: item.Name,
                    directive: item.Directive
                };
            });
        });

    };
}

// Returns the function that moves a validation.
function getMoveValidation(services) {
    return function (validationId, newParentId) {

        // Variables.
        var url = services.formulateVars.MoveValidation;
        var data = {
            ValidationId: validationId,
            NewParentId: newParentId
        };

        // Send request to persist the validation.
        return services.formulateServer.post(url, data, function (data) {

            // Return validation info.
            return {
                id: data.Id,
                path: data.Path
            };

        });

    };
}
},{}],88:[function(require,module,exports){
// Variables.
var app = angular.module("umbraco");

// Service to help with server variables.
app.factory("formulateVars", function() {
    return Umbraco.Sys.ServerVariables.formulate;
});
},{}],89:[function(require,module,exports){
// Require the auto-generated file containing the directives.
var directives = require("../../../FormulateTemp/directives.js")();

// Gets a directive.
var getDirective = function (path) {
    return directives[path];
};

// Export function.
module.exports = getDirective;
},{"../../../FormulateTemp/directives.js":1}],90:[function(require,module,exports){
// Include all services.
require('./Services/formulateConfiguredForms.js');require('./Services/formulateDataValues.js');require('./Services/formulateDirectives.js');require('./Services/formulateEntities.js');require('./Services/formulateFields.js');require('./Services/formulateFolders.js');require('./Services/formulateForms.js');require('./Services/formulateHandlers.js');require('./Services/formulateLayouts.js');require('./Services/formulateLocalization.js');require('./Services/formulatePermissions.js');require('./Services/formulateRecursion.js');require('./Services/formulateServer.js');require('./Services/formulateServerConfig.js');require('./Services/formulateSubmissions.js');require('./Services/formulateTemplates.js');require('./Services/formulateTrees.js');require('./Services/formulateValidations.js');require('./Services/formulateVars.js');

// Include all filters.
require('./Filters/formulateLocalize.js');

// Include all property editors.
require('./Editors/configuredFormPicker.js');

// Include all directives.
require('../Directives/configuredFormDesigner/designer.js');require('../Directives/createFolder/createFolder.js');require('../Directives/dataValueDesigner/designer.js');require('../Directives/dataValueEditor/dataValueEditor.js');require('../Directives/dataValueKinds/dataValueList/dataValueList.js');require('../Directives/dataValueKinds/dataValueListFunction/dataValueListFunction.js');require('../Directives/dataValueKinds/dataValuePairList/dataValuePairList.js');require('../Directives/dataValueTypeChooser/dataValueChooser.js');require('../Directives/deleteConfiguredFormConfirmation/deleteConfiguredForm.js');require('../Directives/deleteDataValueConfirmation/deleteDataValue.js');require('../Directives/deleteFolderConfirmation/deleteFolder.js');require('../Directives/deleteFormConfirmation/deleteForm.js');require('../Directives/deleteLayoutConfirmation/deleteLayout.js');require('../Directives/deleteValidationConfirmation/deleteValidation.js');require('../Directives/dialogs/configuredFormPicker/formPicker.js');require('../Directives/dialogs/dataValuePicker/dataValuePicker.js');require('../Directives/dialogs/formPicker/formPicker.js');require('../Directives/dialogs/layoutPicker/layoutPicker.js');require('../Directives/dialogs/moveDataValue/moveDataValue.js');require('../Directives/dialogs/moveFolder/moveFolder.js');require('../Directives/dialogs/moveForm/moveForm.js');require('../Directives/dialogs/moveLayout/moveLayout.js');require('../Directives/dialogs/moveValidation/moveValidation.js');require('../Directives/dialogs/validationPicker/validationPicker.js');require('../Directives/entityPicker/entityPicker.js');require('../Directives/entityPicker/entityPickerTree.js');require('../Directives/fieldChooser/fieldChooser.js');require('../Directives/fieldEditor/fieldEditor.js');require('../Directives/fields/buttonField/buttonField.js');require('../Directives/fields/checkboxField/checkboxField.js');require('../Directives/fields/checkboxListField/checkboxListField.js');require('../Directives/fields/dateField/dateField.js');require('../Directives/fields/dropDownField/dropDownField.js');require('../Directives/fields/extendedRadioButtonListField/extendedRadioButtonListField.js');require('../Directives/fields/headerField/headerField.js');require('../Directives/fields/hiddenField/hiddenField.js');require('../Directives/fields/radioButtonListField/radioButtonListField.js');require('../Directives/fields/recaptchaField/recaptchaField.js');require('../Directives/fields/richTextField/richTextField.js');require('../Directives/fields/textAreaField/textAreaField.js');require('../Directives/fields/textConstantField/textConstantField.js');require('../Directives/fields/textField/textField.js');require('../Directives/fields/uploadField/uploadField.js');require('../Directives/folderDesigner/designer.js');require('../Directives/formDesigner/designer.js');require('../Directives/formFieldsChooser/formFieldsChooser.js');require('../Directives/handlerChooser/handlerChooser.js');require('../Directives/handlerEditor/handlerEditor.js');require('../Directives/handlers/emailHandler/emailHandler.js');require('../Directives/handlers/sendDataHandler/sendDataHandler.js');require('../Directives/handlers/storeDataHandler/storeDataHandler.js');require('../Directives/injectLocalization/injectLocalization.js');require('../Directives/install/install.js');require('../Directives/layoutDesigner/designer.js');require('../Directives/layoutEditor/layoutEditor.js');require('../Directives/layoutKinds/layoutBasic/layoutBasic.js');require('../Directives/layoutTypeChooser/layoutChooser.js');require('../Directives/localizeAttribute/localizeAttribute.js');require('../Directives/localizeContent/localizeContent.js');require('../Directives/rootEntityOverview/rootEntityOverview.js');require('../Directives/validationDesigner/designer.js');require('../Directives/validationEditor/validationEditor.js');require('../Directives/validationKinds/validationMandatory/validationMandatory.js');require('../Directives/validationKinds/validationRegex/validationRegex.js');require('../Directives/validationTypeChooser/validationChooser.js');require('../Directives/viewSubmissions/viewSubmissions.js');
},{"../Directives/configuredFormDesigner/designer.js":2,"../Directives/createFolder/createFolder.js":3,"../Directives/dataValueDesigner/designer.js":4,"../Directives/dataValueEditor/dataValueEditor.js":5,"../Directives/dataValueKinds/dataValueList/dataValueList.js":7,"../Directives/dataValueKinds/dataValueListFunction/dataValueListFunction.js":6,"../Directives/dataValueKinds/dataValuePairList/dataValuePairList.js":8,"../Directives/dataValueTypeChooser/dataValueChooser.js":9,"../Directives/deleteConfiguredFormConfirmation/deleteConfiguredForm.js":10,"../Directives/deleteDataValueConfirmation/deleteDataValue.js":11,"../Directives/deleteFolderConfirmation/deleteFolder.js":12,"../Directives/deleteFormConfirmation/deleteForm.js":13,"../Directives/deleteLayoutConfirmation/deleteLayout.js":14,"../Directives/deleteValidationConfirmation/deleteValidation.js":15,"../Directives/dialogs/configuredFormPicker/formPicker.js":16,"../Directives/dialogs/dataValuePicker/dataValuePicker.js":17,"../Directives/dialogs/formPicker/formPicker.js":18,"../Directives/dialogs/layoutPicker/layoutPicker.js":19,"../Directives/dialogs/moveDataValue/moveDataValue.js":20,"../Directives/dialogs/moveFolder/moveFolder.js":21,"../Directives/dialogs/moveForm/moveForm.js":22,"../Directives/dialogs/moveLayout/moveLayout.js":23,"../Directives/dialogs/moveValidation/moveValidation.js":24,"../Directives/dialogs/validationPicker/validationPicker.js":25,"../Directives/entityPicker/entityPicker.js":26,"../Directives/entityPicker/entityPickerTree.js":27,"../Directives/fieldChooser/fieldChooser.js":28,"../Directives/fieldEditor/fieldEditor.js":29,"../Directives/fields/buttonField/buttonField.js":30,"../Directives/fields/checkboxField/checkboxField.js":31,"../Directives/fields/checkboxListField/checkboxListField.js":32,"../Directives/fields/dateField/dateField.js":33,"../Directives/fields/dropDownField/dropDownField.js":34,"../Directives/fields/extendedRadioButtonListField/extendedRadioButtonListField.js":35,"../Directives/fields/headerField/headerField.js":36,"../Directives/fields/hiddenField/hiddenField.js":37,"../Directives/fields/radioButtonListField/radioButtonListField.js":38,"../Directives/fields/recaptchaField/recaptchaField.js":39,"../Directives/fields/richTextField/richTextField.js":40,"../Directives/fields/textAreaField/textAreaField.js":41,"../Directives/fields/textConstantField/textConstantField.js":42,"../Directives/fields/textField/textField.js":43,"../Directives/fields/uploadField/uploadField.js":44,"../Directives/folderDesigner/designer.js":45,"../Directives/formDesigner/designer.js":46,"../Directives/formFieldsChooser/formFieldsChooser.js":47,"../Directives/handlerChooser/handlerChooser.js":48,"../Directives/handlerEditor/handlerEditor.js":49,"../Directives/handlers/emailHandler/emailHandler.js":50,"../Directives/handlers/sendDataHandler/sendDataHandler.js":51,"../Directives/handlers/storeDataHandler/storeDataHandler.js":52,"../Directives/injectLocalization/injectLocalization.js":53,"../Directives/install/install.js":54,"../Directives/layoutDesigner/designer.js":55,"../Directives/layoutEditor/layoutEditor.js":56,"../Directives/layoutKinds/layoutBasic/layoutBasic.js":57,"../Directives/layoutTypeChooser/layoutChooser.js":58,"../Directives/localizeAttribute/localizeAttribute.js":59,"../Directives/localizeContent/localizeContent.js":60,"../Directives/rootEntityOverview/rootEntityOverview.js":61,"../Directives/validationDesigner/designer.js":62,"../Directives/validationEditor/validationEditor.js":63,"../Directives/validationKinds/validationMandatory/validationMandatory.js":64,"../Directives/validationKinds/validationRegex/validationRegex.js":65,"../Directives/validationTypeChooser/validationChooser.js":66,"../Directives/viewSubmissions/viewSubmissions.js":67,"./Editors/configuredFormPicker.js":68,"./Filters/formulateLocalize.js":69,"./Services/formulateConfiguredForms.js":70,"./Services/formulateDataValues.js":71,"./Services/formulateDirectives.js":72,"./Services/formulateEntities.js":73,"./Services/formulateFields.js":74,"./Services/formulateFolders.js":75,"./Services/formulateForms.js":76,"./Services/formulateHandlers.js":77,"./Services/formulateLayouts.js":78,"./Services/formulateLocalization.js":79,"./Services/formulatePermissions.js":80,"./Services/formulateRecursion.js":81,"./Services/formulateServer.js":82,"./Services/formulateServerConfig.js":83,"./Services/formulateSubmissions.js":84,"./Services/formulateTemplates.js":85,"./Services/formulateTrees.js":86,"./Services/formulateValidations.js":87,"./Services/formulateVars.js":88}]},{},[90]);
