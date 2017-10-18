angular.module("umbraco").controller("FormEditor.Config.EmailTemplatesController", ["$scope", "assetsService", "formEditorPropertyEditorResource",
  function ($scope, assetsService, formEditorPropertyEditorResource) {
    assetsService.loadCss("/App_Plugins/FormEditor/css/form.css");

    $scope.model.value = $scope.model.value || null;
    $scope.model.templates = [];

    formEditorPropertyEditorResource.getEmailTemplates().then(function (data) {
      $scope.model.templates = data;
    });
  }
]);

angular.module("umbraco").controller("FormEditor.Config.FieldTypeGroupsController", ["$scope", "assetsService", "angularHelper", "formEditorPropertyEditorResource",
  function ($scope, assetsService, angularHelper, formEditorPropertyEditorResource) {
    assetsService.loadCss("/App_Plugins/FormEditor/css/form.css");

    $scope.model.value = $scope.model.value || defaultValue();
    $scope.model.fieldTypes = [];
    $scope.model.unassignedFieldTypes = [];

    formEditorPropertyEditorResource.getAllFieldTypes().then(function (data) {
      $scope.model.fieldTypes = data;
      loadUnassignedFieldTypes();
    });

    function defaultValue() {
      return [];
    }

    function loadUnassignedFieldTypes() {
      $scope.model.unassignedFieldTypes = [];
      _.each($scope.model.fieldTypes, function (fieldType) {
        if (_.find($scope.model.value, function (fieldTypeGroup) {
          return _.find(fieldTypeGroup.fieldTypes, function (field) {
            return field.type === fieldType.type;
          }) != null;
        }) == null) {
          $scope.model.unassignedFieldTypes.push(fieldType);
        }
      });
    }

    $scope.addFieldTypeGroup = function () {
      $scope.model.value.push({
        name: "Field group",
        expanded: true,
        fieldTypes: []
      });
    }

    $scope.deleteFieldTypeGroup = function (fieldTypeGroup) {
      if (confirm("Are you sure you want to delete this field type group?")) {
        $scope.model.value.splice($scope.model.value.indexOf(fieldTypeGroup), 1);
        loadUnassignedFieldTypes();
      }
    }

    $scope.deleteFieldType = function (fieldType, fieldTypeGroup) {
      fieldTypeGroup.fieldTypes.splice(fieldTypeGroup.fieldTypes.indexOf(fieldType), 1);
      loadUnassignedFieldTypes();
    }

    $scope.availableFieldTypes = function () {
      return $scope.model.fieldTypes;
    };

    $scope.addSelectedFieldType = function (fieldTypeGroup) {
      fieldTypeGroup.fieldTypes.push({ prettyName: $scope.model.selectedFieldType.prettyName, type: $scope.model.selectedFieldType.type });
      $scope.model.selectedFieldType = null;
      loadUnassignedFieldTypes();
    };

    //$scope.$on("formSubmitting", function (ev, args) {
    //});

    $scope.sortableOptionsFieldTypeGroup = {
      axis: "y",
      cursor: "move",
      handle: ".collapsible-block",
      update: function (ev, ui) {
        $scope.setDirty();
      },
      stop: function (ev, ui) {

      }
    };

    $scope.sortableOptionsFieldType = {
      axis: "y",
      cursor: "move",
      handle: ".assigned-field",
      update: function (ev, ui) {
        $scope.setDirty();
      },
      stop: function (ev, ui) {

      }
    };

    // helper to force the current form into the dirty state
    $scope.setDirty = function () {
      angularHelper.getCurrentForm($scope).$setDirty();
    }
  }
]);

angular.module("umbraco").controller("FormEditor.Config.RowLayoutsController", ["$scope", "assetsService", "angularHelper", "formEditorPropertyEditorResource",
  function ($scope, assetsService, angularHelper, formEditorPropertyEditorResource) {
    assetsService.loadCss("/App_Plugins/FormEditor/css/form.css");

    $scope.model.value = $scope.model.value || defaultValue();
    $scope.model.rowIcons = [];

    formEditorPropertyEditorResource.getRowIcons().then(function (data) {
      $scope.model.rowIcons = data;
    });

    function defaultValue() {
      return [{
        alias: "one-column",
        icon: "core.one-column.png",
        prettyName: "One column",
        expanded: true,
        cellLayouts: [
            {
              alias: "col-md-12",
              width: 100
            }
        ]
      }, {
        alias: "two-column",
        icon: "core.two-column.png",
        prettyName: "Two columns",
        expanded: true,
        cellLayouts: [
            {
              alias: "col-md-6",
              width: 50
            },
            {
              alias: "col-md-6",
              width: 50
            }
        ]
      }];
    }

    $scope.addRowLayout = function () {
      $scope.model.value.push({
        alias: "one-column",
        icon: "core.one-column.png",
        prettyName: "One column",
        expanded: true,
        cellLayouts: []
      });
      var newRowLayout = $scope.model.value[$scope.model.value.length - 1];
      $scope.addCellLayout(newRowLayout);
    }

    $scope.deleteRowLayout = function (rowLayout) {
      if (confirm("Are you sure you want to delete this row?")) {
        $scope.model.value.splice($scope.model.value.indexOf(rowLayout), 1);
      }
    }

    $scope.deleteCellLayout = function (rowLayout, cellLayout) {
      if (confirm("Are you sure you want to delete this cell?")) {
        rowLayout.cellLayouts.splice(rowLayout.cellLayouts.indexOf(cellLayout), 1);
      }
    }

    $scope.addCellLayout = function (rowLayout) {
      var width = 100 - totalCellWidth(rowLayout);
      var alias = width == 100
        ? "col-md-12"
        : width == 75
          ? "col-md-9"
          : width == 50
            ? "col-md-6"
            : width == 25
              ? "col-md-3"
              : width >= 32 && width <= 35
                  ? "col-md-4"
                  : width >= 65 && width <= 68
                    ? "col-md-8"
                    : "alias";
      rowLayout.cellLayouts.push({
        alias: alias,
        width: width
      });
    }

    function totalCellWidth(rowLayout) {
      var totalWidth = 0.0;
      _.each(rowLayout.cellLayouts, function (c) {
        totalWidth += c.width;
      });

      return totalWidth.toFixed(2);
    }

    $scope.isValidCellLayout = function (rowLayout) {
      if (rowLayout.cellLayouts.length == 0) {
        return false;
      }

      return totalCellWidth(rowLayout) == 100;
    }

    // validate all row layouts when the form submits
    $scope.$on("formSubmitting", function (ev, args) {
      var allRowLayoutsValid = _.find($scope.model.value, function (rowLayout) {
        return $scope.isValidCellLayout(rowLayout) == false
      }) == null;
      angularHelper.getCurrentForm($scope).$setValidity("validation", allRowLayoutsValid);
    });

    $scope.sortableOptionsRowLayout = {
      axis: "y",
      cursor: "move",
      handle: ".collapsible-block",
      update: function (ev, ui) {
        $scope.setDirty();
      },
      stop: function (ev, ui) {

      }
    };

    $scope.sortableOptionsCellLayout = {
      axis: "y",
      cursor: "move",
      handle: ".cell-layout",
      update: function (ev, ui) {
        $scope.setDirty();
      },
      stop: function (ev, ui) {

      }
    };

    $scope.pathToRowFile = function (file) {
      return formEditorPropertyEditorResource.pathToRowFile(file);
    }

    // helper to force the current form into the dirty state
    $scope.setDirty = function () {
      angularHelper.getCurrentForm($scope).$setDirty();
    }
  }
]);

angular.module("umbraco").controller("FormEditor.Config.TabOrderController", ["$scope", "$filter", "assetsService", "angularHelper", 
  function ($scope, $filter, assetsService, angularHelper) {
    assetsService.loadCss("/App_Plugins/FormEditor/css/form.css");

    var tabs = [
      { name: "Form layout", icon: "icon-layout", id: "layout", visible: true },
      { name: "Validation", icon: "icon-check", id: "validation", visible: true },
      { name: "Actions", icon: "icon-wand", id: "actions", visible: true },
      { name: "Emails", icon: "icon-message", id: "emails", visible: true },
      { name: "Receipt", icon: "icon-document", id: "receipt", visible: true },
      { name: "Limitations", icon: "icon-filter", id: "limitations", visible: true },
      { name: "Submissions", icon: "icon-list", id: "submissions", visible: true }
    ];

    if (!$scope.model.value) {
      $scope.model.value = tabs;
    }
    else {
      _.each(tabs, function (tab) {
        if (_.find($scope.model.value, function (t) { return t.id == tab.id; }) == null) {
          tab.visible = false;
          $scope.model.value.push(tab);
        }
      });
    }

    $scope.sortableOptionsTabs = {
      axis: "y",
      cursor: "move",
      update: function (ev, ui) {
        $scope.setDirty();
      },
      stop: function (ev, ui) {

      }
    };

    $scope.isLastVisibleTab = function (tab) {
      return tab.visible == true && _.where($scope.model.value, { visible: true }).length == 1;
    }

    // helper to force the current form into the dirty state
    $scope.setDirty = function () {
      angularHelper.getCurrentForm($scope).$setDirty();
    }
  }
]);

angular.module("umbraco").controller("FormEditor.Config.WebServiceController", ["$scope", "$filter", "assetsService", "angularHelper", 
  function ($scope, $filter, assetsService, angularHelper) {
    assetsService.loadCss("/App_Plugins/FormEditor/css/form.css");

    $scope.model.value = $scope.model.value || defaultValue();

    function defaultValue() {
      return {
        url: "",
        userName: "",
        password: ""
      }
    }

    // helper to force the current form into the dirty state
    $scope.setDirty = function () {
      angularHelper.getCurrentForm($scope).$setDirty();
    }
  }
]);

angular.module("umbraco").controller("FormEditor.Editor.DataController", ["$scope", "$filter", "$timeout", "assetsService", "dialogService", "angularHelper", "formEditorPropertyEditorResource", "editorState",
  function ($scope, $filter, $timeout, assetsService, dialogService, angularHelper, formEditorPropertyEditorResource, editorState) {
    assetsService.loadCss("/App_Plugins/FormEditor/css/form.css");

    // hide the property label?
    $scope.model.hideLabel = $scope.model.config.hideLabel == 1;

    // default sorting by date descending 
    $scope.model.sortField = "_created";
    $scope.model.sortDescending = true;

    $scope.model.value = $scope.model.value || {};

    $scope.actionInProgress = false;
    $scope.dataState = "loading";

    $scope.expandedState = {
      visibleFields: {
        expanded: false
      }
    };

    $scope.hasSelection = function () {
      if (!$scope.model.data) {
        return false;
      }
      return _.find($scope.model.data.rows, function (row) {
        return row.selected == true;
      }) != null;
    }

    $scope.selectAll = function () {
      var select = !$scope.allSelected();
      _.each($scope.model.data.rows, function (row) {
        row.selected = select;
      });
    }

    $scope.allSelected = function () {
      if (!$scope.model.data) {
        return false;
      }
      return _.find($scope.model.data.rows, function (row) {
        return row.selected == false;
      }) == null;
    }

    $scope.getSelectedIds = function () {
      var ids = [];
      _.each($scope.model.data.rows, function (row) {
        if (row.selected == true) {
          ids.push(row._id);
        }
      });
      return ids;
    }

    $scope.getDocumentId = function () {
      return editorState.current.id;
    }

    $scope.sort = function (fieldName) {
      if ($scope.model.sortField == fieldName) {
        $scope.model.sortDescending = !$scope.model.sortDescending;
      }
      else {
        $scope.model.sortField = fieldName;
        $scope.model.sortDescending = false;
      }
      $scope.loadPage($scope.model.data.currentPage);
    }

    $scope.goToPage = function (page) {
      if (page <= 0 || page > $scope.model.data.totalPages || page == $scope.model.data.currentPage) {
        return;
      }

      $scope.loadPage(page);
    }

    $scope.loadPage = function (page) {
      $scope.actionInProgress = true;
      formEditorPropertyEditorResource.getData(editorState.current.id, page, $scope.model.sortField, $scope.model.sortDescending, $scope.model.searchQuery).then(function (data) {

        if (data == null || data.rows == null || data.rows.length == 0) {
          $scope.model.data = null;
          $scope.dataState = $scope.model.searchQuery ? $scope.dataState : "no-data";
          $scope.actionInProgress = false;
          return;
        }

        _.each(data.rows, function (row) {
          row.selected = false;
          // for reasons unknown the view messes up in-view date filters on documet save, so we'll execute the filters on load and use local properties per row
          row._createdDateShort = $filter("date")(row._createdDate, "yyyy-MM-dd");
          row._createdDateLong = $filter("date")(row._createdDate, "yyyy-MM-dd HH:mm:ss");
        });

        // make sure we don't end up with a gazillion pagination links if we have lots of submissions
        var start, end;
        var maxPages = 10;
        if (data.totalPages > maxPages) {
          start = page - maxPages / 2;
          if (start < 1) {
            start = 1;
          }
          end = start + maxPages;
          if (end > data.totalPages) {
            end = data.totalPages;
            start = end - maxPages;
          }
        }
        else {
          start = 1;
          end = data.totalPages;
        }
        data.pages = [];
        for (var i = start; i <= end; i++) {
          data.pages.push(i);
        }

        $scope.supportsSearch = data.supportsSearch;
        $scope.supportsStatistics = data.supportsStatistics;
        $scope.supportsApproval = data.supportsApproval;
        $scope.actionInProgress = false;
        $scope.dataState = "data";
        $scope.model.data = data;

        // default to all fields visible
        if (!$scope.model.value.visibleFields) {
          $scope.model.value.visibleFields = [];
          _.each($scope.model.data.fields, function (field) {
            $scope.model.value.visibleFields.push(field.name);
          });
        }
        // clean up any fields that have been deleted from the form
        $scope.model.value.visibleFields = $filter("filter")($scope.model.value.visibleFields, function (fieldName, index, array) {
          return _.find($scope.model.data.fields, function (field) {
            return field.name == fieldName;
          }) != null;
        });
        $scope.actionInProgress = false;
      });
    }

    $scope.deleteSelected = function () {
      var ids = $scope.getSelectedIds();
      if (ids.length == 0) {
        return;
      }

      $scope.actionInProgress = true;

      formEditorPropertyEditorResource.deleteData(editorState.current.id, ids).then(function (data) {
        $scope.loadPage($scope.model.data.currentPage);
      });
    }

    $scope.viewEntry = function (index) {
      if ($scope.hasHiddenFields() == false) {
        return;
      }
      dialogService.open({
        dialogData: {
          row: $scope.model.data.rows[index],
          fields: $scope.model.data.fields
        },
        template: "data.viewEntry.html"
      });
    }

    $scope.selectFields = function () {
      dialogService.open({
        dialogData: {
          fieldConfigurations: _.map($scope.model.data.fields, function(field) {
            return {
              field: field,
              selected: $scope.isFieldVisible(field)
            };
          })
        },
        template: "data.selectFields.html",
        callback: function (dialogData) {
          $scope.model.value.visibleFields = _.map(_.where(dialogData.fieldConfigurations, { selected: true }), function(fieldConfiguration) {
            return fieldConfiguration.field.name;
          });
        }
      });
    }

    $scope.isFieldVisible = function (field) {
      return !$scope.model.value.visibleFields || $scope.model.value.visibleFields.indexOf(field.name) >= 0;
    }

    $scope.hasHiddenFields = function () {
      if (!$scope.model.data) {
        return false;
      }
      return $scope.model.value.visibleFields && $scope.model.value.visibleFields.length !== $scope.model.data.fields.length;
    }

    // helper to force the current form into the dirty state
    $scope.setDirty = function () {
      angularHelper.getCurrentForm($scope).$setDirty();
    }

    $scope.searchPromise = null;
    $scope.search = function () {
      if ($scope.searchPromise != null) {
        $timeout.cancel($scope.searchPromise);
      }
      $scope.searchPromise = $timeout(function () {
        $scope.loadPage(1);
      }, 600);
    }

    $scope.showStatistics = function () {
      dialogService.open({
        dialogData: {},
        template: "data.statistics.html",
        modalClass: "umb-modal stats-modal"
      });
    }

    $scope.toggleApproval = function (row, $event) {
      $event.stopPropagation();
      if (row._actionInProgress) {
        return;
      }
      row._actionInProgress = true;
      var newApprovalState = row._approval === "undecided" ? "approved" : "undecided";
      formEditorPropertyEditorResource.setApprovalState(editorState.current.id, newApprovalState, row._id).then(function (data) {
        if (data && data.newApprovalState) {
          row._approval = data.newApprovalState;
          row._actionInProgress = false;
        }
      });
    }

    $scope.loadPage(1);
  }
]);

angular.module("umbraco").controller("FormEditor.Editor.FieldController", ["$scope", "$filter", "formEditorPropertyEditorFieldValidator", "formEditorPropertyEditorResource", "dialogService", "contentResource", 
  function ($scope, $filter, formEditorPropertyEditorFieldValidator, formEditorPropertyEditorResource, dialogService, contentResource) {
    $scope.originalFieldName = $scope.dialogData.field.name;
    $scope.addFieldValue = function () {
      $scope.dialogData.field.fieldValues.push({});
    };
    $scope.removeFieldValue = function (index) {
      $scope.dialogData.field.fieldValues.splice(index, 1);
    };
    $scope.setSelectedFieldValue = function (index) {
      if (!$scope.dialogData.field.multiSelect) {
        _.each($scope.dialogData.field.fieldValues, function (fieldValue) {
          if ($scope.dialogData.field.fieldValues.indexOf(fieldValue) != index) {
            fieldValue.selected = false;
          }
        });
      }
    };
    $scope.validateFieldName = function ($event) {
      return formEditorPropertyEditorFieldValidator.validateFieldName($scope.dialogData.field);
    };
    $scope.pickImage = function () {
      dialogService.mediaPicker({
        multiPicker: false,
        callback: function (data) {
          $scope.dialogData.field.mediaId = data.id;
          $scope.loadMediaUrl();
        }
      });
    }
    $scope.pickPage = function () {
      dialogService.contentPicker({
        multiPicker: false,
        callback: function (data) {
          $scope.dialogData.field.pageId = data.id;
          $scope.dialogData.page = {
            name: data.name,
            id: data.id,
            cssClass: "icon " + data.icon
          };
        }
      });
    }
    $scope.removePage = function () {
      $scope.dialogData.field.pageId = 0;
      $scope.dialogData.page = null;
    }
    $scope.loadMediaUrl = function () {
      formEditorPropertyEditorResource.getMediaUrl($scope.dialogData.field.mediaId).then(function (data) {
        //console.log("Got media URL", $scope.dialogData.field.mediaId, data);
        $scope.dialogData.field.mediaUrl = data.url;
      });
    }
    $scope.loadPage = function() {
      contentResource.getById($scope.dialogData.field.pageId).then(
        // success
        function (data) {
          $scope.dialogData.page = {
            name: data.name,
            id: data.id,
            cssClass: "icon " + data.icon
          };
        },
        // error
        function (data) {
          // ignore for now
        }
      );
    }
    $scope.fieldNameChanged = function() {
      if ($scope.dialogData.warnWhenRenaming) {
        $scope.showRenameWarning = $scope.dialogData.field.name != $scope.originalFieldName;
      }
    }
    $scope.allValueFields = function () {
      return $filter("filter")(formEditorPropertyEditorFieldValidator.fields, { isValueField: true });
    }
    if ($scope.dialogData.field.mediaId) {
      $scope.loadMediaUrl();
    }
    if ($scope.dialogData.field.pageId) {
      $scope.loadPage();
    }
    $scope.sortableOptionsFieldValues = {
      axis: "y",
      cursor: "move",
      update: function (ev, ui) {
      },
      stop: function (ev, ui) {
      }
    };
  }
]);

angular.module("umbraco").controller("FormEditor.Editor.FormController", ["$scope", "$filter", "assetsService", "dialogService", "angularHelper", "contentResource", "formEditorPropertyEditorResource", "formEditorPropertyEditorFieldValidator", "formEditorLocalizationService",
  function ($scope, $filter, assetsService, dialogService, angularHelper, contentResource, formEditorPropertyEditorResource, formEditorPropertyEditorFieldValidator, formEditorLocalizationService) {
    assetsService.loadCss("/App_Plugins/FormEditor/css/form.css");
    if ($scope.model.config.customCss) {
      assetsService.loadCss($scope.model.config.customCss);
    }

    // hide the property label?
    $scope.model.hideLabel = $scope.model.config.hideLabel == 1;
    // confirm row and field deletes?
    $scope.model.confirmDelete = $scope.model.config.confirmDelete == 1;
    // are multiple form pages enabled?
    $scope.model.enablePages = $scope.model.config.enablePages == 1;
    // is field cloning enabled?
    $scope.model.enableFieldCloning = $scope.model.config.enableFieldCloning == 1;

    $scope.emailTemplates = { notification: $scope.model.config.notificationEmailTemplate, confirmation: $scope.model.config.confirmationEmailTemplate };

    $scope.tabs = getVisibleTabs();

    // initialize default model if applicable
    $scope.model.value = $scope.model.value || defaultValue();

    // this is for backwards compatability with v0.10.0.1 - should be removed at some point
    if ($scope.model.value.pages == null) {
      $scope.model.value.pages = [
        {
          rows: $scope.model.value.rows || [],
          title: ""
        }
      ];
    }
    $scope.model.value.rows = null;

    // this is for storing the newly added fields, so we know which fields need a warning when they're renamed
    $scope.newlyAddedFields = [];

    $scope.model.successPage = null;
    if ($scope.model.value.successPageId > 0) {
      contentResource.getById($scope.model.value.successPageId).then(
        // success
        function (data) {
          $scope.model.successPage = {
            name: data.name,
            id: data.id,
            cssClass: "icon " + data.icon
          };
        },
        // error
        function (data) {
          // ignore for now
        }
      );
    }

    $scope.model.config.fieldTypes = [];
    $scope.model.config.conditionTypes = [];

    // get the available field types
    formEditorPropertyEditorResource.getAllFieldTypes().then(function (data) {
      $scope.model.config.fieldTypes = data;
    });
    // get the available validation condition types
    formEditorPropertyEditorResource.getAllConditionTypes().then(function (data) {
      $scope.model.config.conditionTypes = data;
    });

    function defaultValue() {
      return {
        rows: []
      };
    }

    function getCellLayout(row, cell) {
      var rowLayout = getRowLayout(row.alias);
      if (rowLayout == null) {
        return;
      }
      return rowLayout.cellLayouts[row.cells.indexOf(cell)];
    }

    $scope.cellWidth = function (row, cell) {
      var rowLayout = getRowLayout(row.alias);
      if (rowLayout == null) {
        return 0;
      }
      var cellLayout = getCellLayout(row, cell);
      if (cellLayout == null) {
        return 0;
      }
      // allocate 2% width for the row trash can
      return (cellLayout.width - (2 / rowLayout.cellLayouts.length));
    }

    $scope.cellAlias = function (row, cell) {
      var cellLayout = getCellLayout(row, cell);
      if (cellLayout == null) {
        return 0;
      }
      return cellLayout.width;
    }

    function getRowLayout(alias) {
      return _.find($scope.model.config.rowLayouts, function (r) {
        return r.alias === alias;
      });
    }

    function pick(type, options, callback, orderBy) {
      dialogService.open({
        dialogData: {
          type: type,
          options: options,
          orderBy: orderBy
        },
        template: "formEditor.compositionPicker.html",
        callback: callback
      });
    }

    $scope.pickRow = function (page) {
      // if we only have one row, let's not bother the user with the dialog
      if ($scope.model.config.rowLayouts.length == 1) {
        $scope.addRow(page, $scope.model.config.rowLayouts[0].alias);
        return;
      }
      if (!$scope.rowTypeOptions) {
        var options = [];
        _.each($scope.model.config.rowLayouts, function (rowLayout) {
          formEditorLocalizationService.localize("composition.row." + rowLayout.alias, rowLayout.prettyName).then(function (value) {
            options.push({
              name: value,
              value: rowLayout.alias,
              iconPath: $scope.pathToRowFile(rowLayout.icon)
            });
          });
        });
        // the composition picker expects groups of options, so let's add all row types to one group
        $scope.rowTypeOptions = [
          {
            title: "",
            options: options
          }
        ];
      }
      pick("row", $scope.rowTypeOptions, function (alias) {
        $scope.addRow(page, alias);
      });
    }

    $scope.addPage = function() {
      $scope.model.value.pages.push({
        rows: [],
        title: ""
      });
    }

    $scope.addRow = function (page, alias) {
      var rowLayout = getRowLayout(alias);
      if (rowLayout == null) {
        return;
      }

      var row = {
        alias: alias,
        cells: []
      };

      for (var i = 0; i < rowLayout.cellLayouts.length; i++) {
        var cellLayout = rowLayout.cellLayouts[i];
        row.cells.push({
          alias: cellLayout.alias,
          fields: []
        });
      }
      page.rows.push(row);
      $scope.setDirty();
    }

    function getFieldType(fieldType) {
      return _.find($scope.model.config.fieldTypes, function (f) {
        return f.type === fieldType;
      });
    }

    $scope.removePage = function (page) {
      if ($scope.model.confirmDelete) {
        formEditorLocalizationService.localize("composition.page.deleteConfirmation", "Are you sure you want to delete this page?").then(function (value) {
          if (confirm(value)) {
            deletePage(page);
          }
        });
      }
      else {
        deletePage(page);
      }
    }

    function deletePage(page) {
      // deleteRow() modifies the rows collection on page, so we need to extract all first rows to delete them one by one
      var containedRows = [];
      _.each(page.rows, function (row) {
        containedRows.push(row);
      });
      _.each(containedRows, function (row) {
        deleteRow(row, page);
      });

      var index = $scope.model.value.pages.indexOf(page);
      $scope.model.value.pages.splice(index, 1);
    }

    $scope.removeRow = function (row, page) {
      if ($scope.model.confirmDelete) {
        formEditorLocalizationService.localize("composition.row.deleteConfirmation", "Are you sure you want to delete this row?").then(function (value) {
          if (confirm(value)) {
            deleteRow(row, page);
          }
        });
      }
      else {
        deleteRow(row, page);
      }
    }

    function deleteRow(row, page) {
      var index = page.rows.indexOf(row);
      page.rows.splice(index, 1);

      var containedFields = [];
      _.each(row.cells, function (cell) {
        _.each(cell.fields, function (field) {
          containedFields.push(field);
        });
      });
      deleteFields(containedFields);
    }

    $scope.getFieldName = function (field) {
      if (field.name) {
        return field.name;
      }
      else if (field.text) {
        // no name... does the field have a text property? e.g. heading, paragraph
        return field.text;
      }
      // default to the field pretty name
      return field.prettyName;
    }

    $scope.pickField = function (cell) {
      if (!$scope.fieldTypeOptions) {
        // lazy load field type groups
        var fieldTypeGroups;
        if ($scope.model.config.fieldTypeGroups && $scope.model.config.fieldTypeGroups.length) {
          // only display the predefined field type groups
          fieldTypeGroups = $scope.model.config.fieldTypeGroups;
        }
        else {
          // display all fields in one group
          var fieldTypes = $scope.model.config.fieldTypes;
          var fieldTypeGroup = {
            name: null,
            fieldTypes: []
          };
          // sort the fields by name, as we have no custom sort order to use
          _.each($filter("orderBy")(fieldTypes, "prettyName"), function (fieldType) {
            fieldTypeGroup.fieldTypes.push({
              type: fieldType.type,
              prettyName: fieldType.prettyName
            });
          });

          fieldTypeGroups = [fieldTypeGroup];
        }

        $scope.fieldTypeOptions = [];
        _.each(fieldTypeGroups, function (fieldTypeGroup) {
          var optionGroup = {
            title: fieldTypeGroup.name,
            options: []
          };
          $scope.fieldTypeOptions.push(optionGroup);
          _.each(fieldTypeGroup.fieldTypes, function (fieldType) {
            var ft = getFieldType(fieldType.type);
            if (ft != null) {
              formEditorLocalizationService.localize("composition.field." + fieldType.type, fieldType.prettyName).then(function (value) {
                optionGroup.options.push({
                  name: value,
                  value: ft.type,
                  iconPath: $scope.pathToFieldFile(ft.icon)
                });
              });
            }
          });
        });
      }

      pick("field", $scope.fieldTypeOptions, function (fieldType) {
        $scope.addField(fieldType, cell);
      }, "");
    }

    $scope.addField = function (fieldType, cell) {
      var field = angular.copy(getFieldType(fieldType));
      // localize the field type - by default use the field type pretty name as field name
      formEditorLocalizationService.localize("composition.field." + field.type, field.prettyName).then(function (value) {
        if (field.hasOwnProperty("name") && field.name == null) {
          field.name = value;
        }
          // does the field have a text property? e.g. heading, paragraph
        else if (field.hasOwnProperty("text") && field.text == null) {
          field.text = value;
        }
        cell.fields.push(field);
        $scope.newlyAddedFields.push(field);
        $scope.clearFieldCache();
        formEditorPropertyEditorFieldValidator.registerFields($scope.allFields());
        $scope.editField(field);

      });
    }

    $scope.editField = function (field) {
      // always set dirty when opening the edit dialog because we can't react properly to it closing
      $scope.setDirty();

      dialogService.open({
        dialogData: {
          field: field,
          warnWhenRenaming: _.contains($scope.newlyAddedFields, field) == false
        },
        template: $scope.pathToFieldFile(field.view),
        callback: function (field) {
        }
      });
    }

    $scope.cloneField = function (field, cell) {
      var newField = angular.copy(field);
      if (field.isValueField) {
        // remove any existing " (xxx)" name postfix from the previous cloning, when cloning an already cloned field
        var fieldName = field.name.replace(/\s\(\d*\)$/, "");
        var newNameCounter = 1;
        while (_.find($scope.allValueFields(),
            function (f) {
              return f.name == fieldName + " (" + newNameCounter + ")";
            }) !=
          null) {
          newNameCounter++;
        }
        newField.name = fieldName + " (" + newNameCounter + ")";
      }
      cell.fields.push(newField);
      $scope.clearFieldCache();
    }

    $scope.removeField = function (field, cell) {
      if ($scope.model.confirmDelete) {
        formEditorLocalizationService.localize("composition.field.deleteConfirmation", "Are you sure you want to delete this field?").then(function (value) {
          if (confirm(value)) {
            deleteField(field, cell);
          }
        });
      }
      else {
        deleteField(field, cell);
      }
    }

    function deleteField(field, cell) {
      var index = cell.fields.indexOf(field);
      cell.fields.splice(index, 1);

      deleteFields([field]);
    }

    function deleteFields(fields) {
      _.each($scope.model.value.validations, function (validation) {
        validation.rules = $filter("filter")(validation.rules, function (rule, index, array) {
          return fields.indexOf(rule.field) < 0;
        });
      });
      _.each($scope.model.value.actions, function (action) {
        action.rules = $filter("filter")(action.rules, function (rule, index, array) {
          return fields.indexOf(rule.field) < 0;
        });
        if (fields.indexOf(action.field) >= 0) {
          action.field = null;
        }
      });

      $scope.clearFieldCache();
      formEditorPropertyEditorFieldValidator.registerFields($scope.allFields());
      $scope.setDirty();
    }

    $scope.isInvalidField = function (field) {
      return formEditorPropertyEditorFieldValidator.validateField(field) == false;
    }

    $scope.allValueFields = function () {
      if (!$scope._allValueFieldsCache) {
        $scope._allValueFieldsCache = $filter("filter")($scope.allFields(), { isValueField: true });
      }
      return $scope._allValueFieldsCache;
    }

    $scope.clearFieldCache = function () {
      $scope._allFieldsCache = undefined;
      $scope._allValueFieldsCache = undefined;
    }
    $scope.clearFieldCache();

    $scope.allFields = function () {
      if (!$scope._allFieldsCache) {
        $scope._allFieldsCache = [];
        _.each($scope.model.value.pages, function(page) {
          _.each(page.rows, function (row) {
            _.each(row.cells, function (cell) {
              _.each(cell.fields, function (field) {
                $scope._allFieldsCache.push(field);
              });
            });
          });
        });
      }
      return $scope._allFieldsCache;
    }
    formEditorPropertyEditorFieldValidator.registerFields($scope.allFields());

    $scope.allFieldNames = function () {
      var fieldNames = [];
      _.each($scope.allFields(), function (field) {
        if (formEditorPropertyEditorFieldValidator.isNamedField(field)) {
          fieldNames.push(field.name);
        }
      });
      return fieldNames;
    }

    $scope.pathToFieldFile = function (file) {
      return formEditorPropertyEditorResource.pathToFieldFile(file);
    }

    $scope.pathToRowFile = function (file) {
      return formEditorPropertyEditorResource.pathToRowFile(file);
    }

    $scope.pathToConditionFile = function (file) {
      return formEditorPropertyEditorResource.pathToConditionFile(file);
    }

    $scope.pickSuccessPage = function () {
      dialogService.contentPicker({
        multiPicker: false,
        callback: function (data) {
          $scope.model.value.successPageId = data.id;
          $scope.model.successPage = {
            name: data.name,
            id: data.id,
            cssClass: "icon " + data.icon
          };
          $scope.setDirty();
        }
      });
    }

    $scope.removeSuccessPage = function () {
      $scope.model.successPage = null;
      $scope.model.value.successPageId = 0;
      $scope.setDirty();
    }

    $scope.sortableOptionsPage = {
      axis: "y",
      cursor: "move",
      //handle: ".form-page",
      update: function (ev, ui) {
        $scope.setDirty();
      },
      stop: function (ev, ui) {

      }
    };

    $scope.sortableOptionsRow = {
      axis: "y",
      cursor: "move",
      handle: ".form-cells",
      connectWith: ".form-rows",
      items: "li:not(.no-form-rows)",
      update: function (ev, ui) {
        $scope.setDirty();
      },
      stop: function (ev, ui) {

      }
    };

    $scope.sortableOptionsField = {
      cursor: "move",
      handle: ".form-field-content",
      connectWith: ".form-fields",
      update: function (ev, ui) {
        $scope.setDirty();
      },
      stop: function (ev, ui) {

      }
    };

    // helper to force the current form into the dirty state
    $scope.setDirty = function () {
      angularHelper.getCurrentForm($scope).$setDirty();
    }

    // watch for changes
    $scope.$watch("model.value", function (v) {
      $scope.newlyAddedFields = [];
      // wire up the rule fields so any field changes are reflected on the rule fields
      $scope.clearFieldCache();
      wireUpFields($scope.model.value.validations);
      wireUpFields($scope.model.value.actions);
    });

    function wireUpFields(ruleContainers) {
      _.each(ruleContainers, function (ruleContainer) {
        _.each(ruleContainer.rules, function (rule) {
          var field = _.find($scope.allFields(), function (f) {
            return f.name == rule.field.name;
          });
          if (field != null) {
            rule.field = field;
          }
        });
        if(ruleContainer.field) {
          ruleContainer.field = _.find($scope.allValueFields(), function (f) {
            return f.name == ruleContainer.field.name;
          });
        }
      });
    }

    // validate all fields when the form submits
    $scope.$on("formSubmitting", function (ev, args) {
      var allFieldsValid = _.find($scope.allFields(), function (field) {
        return formEditorPropertyEditorFieldValidator.validateField(field) == false;
      }) == null;
      angularHelper.getCurrentForm($scope).$setValidity("validation", allFieldsValid);
    });

    $scope.$on("formSubmitted", function (ev, args) {
      // reset the fields collection on validation helper
      formEditorPropertyEditorFieldValidator.registerFields([]);
    });

    // ###############################################################
    // ################# validation and action stuff #################
    // ###############################################################

    $scope.model.value.validations = $scope.model.value.validations || [];
    $scope.model.value.actions = $scope.model.value.actions || [];

    // backwards compability for before configurable conditions
    function ensureConditionView(ruleContainers) {
      _.each(ruleContainers, function (c) {
        _.each(c.rules, function(r) {
          if (!r.condition || r.condition.view) {
            return;
          }
          r.condition.view = r.condition.type;
        });
      });
    }

    ensureConditionView($scope.model.value.validations);
    ensureConditionView($scope.model.value.actions);

    function getConditionType(conditionType) {
      return _.find($scope.model.config.conditionTypes, function (r) {
        return r.type === conditionType;
      });
    }

    $scope.addValidation = function () {
      $scope.model.value.validations.push({ rules: [], errorMessage: "" });
      $scope.setDirty();
    }
    $scope.addAction = function () {
      $scope.model.value.actions.push({ rules: [], task: "core.showfield", field: null });
      $scope.setDirty();
    }
    $scope.editRule = function (rule, ruleContainer) {
      $scope.pickRule(rule, function (r) {
        if (rule == null) {
          ruleContainer.rules.push(r);
        }
        $scope.setDirty();
      });
    }
    $scope.pickRule = function (rule, callback) {
      rule = rule || { field: { name: null }, condition: { type: null } };

      var fields = [];
      _.each($scope.allValueFields(), function (field) {
        fields.push({
          name: field.name,
          iconPath: $scope.pathToFieldFile(field.icon)
        });
      });

      var conditions = [];
      _.each($scope.model.config.conditionTypes, function (condition) {
        formEditorLocalizationService.localize("validation.condition." + condition.type, condition.prettyName).then(function (value) {
          conditions.push({
            name: value,
            type: condition.type,
            iconPath: $scope.pathToConditionFile(condition.icon)
          });
        });
      });

      dialogService.open({
        dialogData: {
          fields: fields,
          conditions: conditions,
          fieldName: rule.field.name,
          conditionType: rule.condition.type
        },
        template: "formEditor.validationPicker.html",
        callback: function (dialogData) {
          var field = _.find($scope.allValueFields(), function (f) {
            return f.name === dialogData.fieldName;
          });

          if (field) {
            var condition = angular.copy(getConditionType(dialogData.conditionType));
            rule.field = field;
            rule.condition = condition;
            callback(rule);
          }
        }
      });
    }
    $scope.removeRule = function (rule, ruleContainer) {
      if ($scope.model.confirmDelete) {
        formEditorLocalizationService.localize("validation.condition.deleteRule", "Are you sure you want to delete this rule?").then(function (value) {
          if (confirm(value)) {
            deleteRule(rule, ruleContainer);
          }
        });
      }
      else {
        deleteRule(rule, ruleContainer);
      }
    }
    $scope.removeValidation = function (validation) {
      if ($scope.model.confirmDelete) {
        formEditorLocalizationService.localize("validation.deleteConfirmation", "Are you sure you want to delete this validation?").then(function (value) {
          if (confirm(value)) {
            deleteValidation(validation);
          }
        });
      }
      else {
        deleteValidation(validation);
      }
    }
    $scope.removeAction = function (action) {
      if ($scope.model.confirmDelete) {
        formEditorLocalizationService.localize("action.deleteConfirmation", "Are you sure you want to delete this action?").then(function (value) {
          if (confirm(value)) {
            deleteAction(action);
          }
        });
      }
      else {
        deleteAction(action);
      }
    }
    function deleteRule(rule, ruleContainer) {
      var index = ruleContainer.rules.indexOf(rule);
      ruleContainer.rules.splice(index, 1);
      $scope.setDirty();
    }
    function deleteValidation(validation) {
      var index = $scope.model.value.validations.indexOf(validation);
      $scope.model.value.validations.splice(index, 1);
      $scope.setDirty();
    }
    function deleteAction(action) {
      var index = $scope.model.value.actions.indexOf(action);
      $scope.model.value.actions.splice(index, 1);
      $scope.setDirty();
    }

    $scope.isActiveTab = function (id) {
      var tab = _.find($scope.tabs, function (t) { return t.id == id; });
      return tab != null && tab.active;
    }

    $scope.isVisibleTab = function (id) {
      return _.find($scope.tabs, function (t) { return t.id == id; }) != null;
    }

    function getVisibleTabs() {
      var tabs = [
        { title: "Form layout", localizationKey: "composition.header", icon: "icon-layout", id: "layout", anchor: "tabFormEditorLayout", visible: true, sortOrder: 0 },
        { title: "Validation", localizationKey: "validation.header", icon: "icon-check", id: "validation", anchor: "tabFormEditorValidation", visible: true, sortOrder: 1 },
        { title: "Actions", localizationKey: "actions.header", icon: "icon-wand", id: "actions", anchor: "tabFormEditorActions", visible: true, sortOrder: 2 },
        { title: "Emails", localizationKey: "emails.header", icon: "icon-message", id: "emails", anchor: "tabFormEditorEmails", visible: true, sortOrder: 3 },
        { title: "Receipt", localizationKey: "receipt.header", icon: "icon-document", id: "receipt", anchor: "tabFormEditorReceipt", visible: true, sortOrder: 4 },
        { title: "Limitations", localizationKey: "limitations.header", icon: "icon-filter", id: "limitations", anchor: "tabFormEditorLimitations", visible: true, sortOrder: 5 },
        { title: "Submissions", localizationKey: "data.header", icon: "icon-list", id: "submissions", anchor: "tabFormEditorData", visible: true, sortOrder: 6 }
      ];

      _.each($scope.model.config.tabOrder, function (tabOrder, index) {
        var tab = _.find(tabs, function (t) { return t.id == tabOrder.id; });
        tab.sortOrder = index;
        tab.visible = tabOrder.visible;
        if (tab.id == "emails" && tab.visible) {
          tab.visible = ($scope.emailTemplates.notification || $scope.emailTemplates.confirmation) != null;
        }
      });

      var orderedTabs = $filter("orderBy")(_.where(tabs, { visible: true }), "sortOrder");
      orderedTabs[0].active = true;
      return orderedTabs;
    }
  }
]);

angular.module("umbraco").controller("FormEditor.Editor.StatisticsController", ["$scope", "$timeout", "assetsService", "formEditorPropertyEditorResource", "editorState",
    function ($scope, $timeout, assetsService, formEditorPropertyEditorResource, editorState) {

      $scope.fields = null;
      $scope.loading = true;

      // for the time being we only have field value frequency statistics. hopefully this will be extended over time.
      formEditorPropertyEditorResource.getFieldValueFrequencyStatistics(editorState.current.id).then(function (data) {
        $scope.fields = data.fields;
        $scope.totalRows = data.totalRows;

        // make sure there is actually any statistics to show before loading a whole bunch of graph stuff
        if ($scope.fields != null && $scope.fields.length) {
          assetsService.loadJs("https://www.gstatic.com/charts/loader.js").then(function () {
            if (formEditorPropertyEditorResource.googleChartsLoaded == false) {
              google.charts.load("current", { "packages": ["corechart", "bar"] });
              google.charts.setOnLoadCallback(googleChartsLoadCallback);
            }
            else {
              googleChartsLoadCallback();
            }
          });
        }
      });

      function googleChartsLoadCallback() {
        formEditorPropertyEditorResource.googleChartsLoaded = true;
        _.each($scope.fields, function (field) {
          field.chartData = [["", ""]]; // legend header - leave empty
          _.each(field.values, function (value) {
            field.chartData.push([value.value, value.frequency]);
          });
        });
        $timeout(function () {
          drawCharts();
        }, 200);
      }

      function drawCharts() {
        _.each($scope.fields, function (field) {
          var data = google.visualization.arrayToDataTable(field.chartData);

          var chart, options;
          var chartContainer = document.getElementById(field.formSafeName);

          if (field.multipleValuesPerEntry) {
            // use bar charts for multiselect fields
            options = {
              chartArea: { width: "60%" },
              hAxis: {
                minValue: 0
              },
              vAxis: {
              },
              legend: "none"
            };
            chart = new google.visualization.BarChart(chartContainer);
          }
          else {
            // use pie charts for singleselect fields
            options = {
              chartArea: { left: 20, top: 20 },
              legend: {
                position: "bottom"
              }
            };
            chart = new google.visualization.PieChart(chartContainer);
          }

          chart.draw(data, options);
        });
        $scope.loading = false;
      }
    }
]);

angular.module("umbraco.directives").directive("formEditorCondition", ["$http", "$compile", "formEditorPropertyEditorResource",
  function ($http, $compile, formEditorPropertyEditorResource) {
    var linker = function (scope, element, attrs) {
      attrs.$observe("type", function () {
        $http.get(formEditorPropertyEditorResource.pathToConditionFile(scope.rule.condition.view + ".html")).then(function (result) {
          element.html(result.data);
          $compile(element.contents())(scope);
        });
      });
    }

    return {
      restrict: "E",
      link: linker
    }
  }
]);

angular.module("umbraco.directives").directive("formEditorExpandableHeader", [
  function () {
    return {
      scope: {
        expandable: "="
      },
      restrict: "E",
      templateUrl: "formEditor.expandableHeader.html",
      link: function (scope, element, attributes) {
        scope.headerTextKey = attributes["headerTextKey"] || "missing.headerTextKey";
        scope.headerTextDefault = attributes["headerTextDefault"] || "Missing headerTextDefault";
      }
    }
  }
]);

angular.module("umbraco.directives").directive("formEditorFieldBasics", [
  function () {
    return {
      restrict: "E",
      templateUrl: "formEditor.fieldBasics.html"
    }
  }
]);

angular.module("umbraco.directives").directive("formEditorFieldErrorMessage", [
  function () {
    return {
      restrict: "E",
      templateUrl: "formEditor.fieldErrorMessage.html"
    }
  }
]);

angular.module("umbraco.directives").directive("formEditorFieldFooter", [
  function () {
    return {
      restrict: "E",
      templateUrl: "formEditor.fieldFooter.html"
    }
  }
]);

angular.module("umbraco.directives").directive("formEditorFieldHeader", [
  function () {
    return {
      restrict: "E",
      templateUrl: "formEditor.fieldHeader.html"
    }
  }
]);

angular.module("umbraco.directives").directive("formEditorFieldMandatory", [
  function () {
    return {
      restrict: "E",
      templateUrl: "formEditor.fieldMandatory.html"
    }
  }
]);

angular.module("umbraco.directives").directive("formEditorFieldName", [
  function () {
    return {
      restrict: "E",
      templateUrl: "formEditor.fieldName.html"
    }
  }
]);

angular.module("umbraco.directives").directive("formEditorFieldOptions", [
  function () {
    return {
      restrict: "E",
      templateUrl: "formEditor.fieldOptions.html",
      link: function (scope, element, attributes) {
        scope.optionSelectedTextKey = attributes["optionSelectedTextKey"] || "edit.options.selected";
        scope.optionSelectedTextDefault = attributes["optionSelectedTextDefault"] || "Selected";
        scope.multiValueField = attributes["multiValueField"] ? true : false;
      }
    }
  }
]);

angular.module("umbraco.directives").directive("formEditorFieldPlaceholder", [
  function () {
    return {
      restrict: "E",
      templateUrl: "formEditor.fieldPlaceholder.html"
    }
  }
]);

angular.module("umbraco.directives").directive("formEditorLocalize", ["formEditorLocalizationService",
  function (formEditorLocalizationService) {
    var linker = function (scope, element, attrs) {

      attrs.$observe("key", function () {
        var key = attrs.key;
        var defaultValue = attrs.defaultValue;
        formEditorLocalizationService.localize(key, defaultValue).then(function (value) {
          if (value) {
            element.html(value);
          }
        });
      });
    }

    return {
      restrict: "EA",
      replace: true,
      link: linker
    }
  }
]);

angular.module("umbraco.directives").directive("formEditorMultiSelectValue", [
  function () {
    return {
      restrict: "A",
      require: "ngModel",
      link: function (scope, element, attr, ngModel) {

        ngModel.$formatters.push(function (viewValue) {
          return validValue(viewValue);
        });

        function validValue(viewValue) {
          if (!viewValue) {
            return viewValue;
          }
          // #133 - multi value fields cannot have comma in their values
          return viewValue.replace(/,/g, "");
        }
      }
    }
  }
]);

angular.module("umbraco.directives").directive("formEditorMultipleEmails", [
  function () {
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return {
      require: "ngModel",
      restrict: "A",
      link: function (scope, element, attrs, ctrl) {
        ctrl.$parsers.unshift(function (viewValue) {
          if (!viewValue) {
            ctrl.$setValidity("formEditorMultipleEmails", true);
            return viewValue;
          }

          var valid = _.every(viewValue.split(','), function (email) {
            return EMAIL_REGEXP.test(email.trim());
          });

          if (valid) {
            ctrl.$setValidity("formEditorMultipleEmails", true);
            return viewValue;
          } else {
            ctrl.$setValidity("formEditorMultipleEmails", false);
            return undefined;
          }
        });
      }
    };
  }
]);
angular.module("umbraco.resources").factory("formEditorPropertyEditorFieldValidator", [
  function () {
    function propertyEditorFieldValidator() {
      this.fields = null;
      this.indexSafeFieldName = function (field) {
        // lower case comparison and remove white spaces and other stuff
        // - this must match the corresponding method for index safe field names in the C# code!
        return "_" + field.name.replace(/[^a-zA-Z0-9_]/gi, "");
      }
      this.registerFields = function (allFields) {
        this.fields = allFields;
      };
      this.isNamedField = function (field) {
        return field.hasOwnProperty("name");
      }
      this.validateFieldName = function (field) {
        if (this.isNamedField(field) == false) {
          // no name property - must be a field with no index name
          return true;
        }
        if (field.name == null || field.name == "") {
          return false;
        }
        var $this = this;
        var fieldWithSameName = _.find(this.fields, function (f) {
          return $this.isNamedField(f) && f != field && $this.indexSafeFieldName(f) == $this.indexSafeFieldName(field);
        });
        if (fieldWithSameName != null) {
          return false;
        }
        return true;
      };
      // added for future extensibility
      this.validateField = function (field) {
        return this.validateFieldName(field);
      };
    }
    return new propertyEditorFieldValidator();
  }
]);

angular.module("umbraco.resources").factory("formEditorPropertyEditorResource", ["$q", "$http", "$timeout", "umbRequestHelper",
  function ($q, $http, $timeout, umbRequestHelper) {
    return {
      getAllFieldTypes: function () {
        return umbRequestHelper.resourcePromise(
            $http.get("/umbraco/backoffice/FormEditorApi/PropertyEditor/GetAllFieldTypes"), "Could not retrieve field types"
        );
      },
      getAllConditionTypes: function () {
        return umbRequestHelper.resourcePromise(
            $http.get("/umbraco/backoffice/FormEditorApi/PropertyEditor/GetAllConditionTypes"), "Could not retrieve condition types"
        );
      },
      getEmailTemplates: function () {
        return umbRequestHelper.resourcePromise(
            $http.get("/umbraco/backoffice/FormEditorApi/PropertyEditor/GetEmailTemplates"), "Could not retrieve email templates"
        );
      },
      getRowIcons: function () {
        return umbRequestHelper.resourcePromise(
            $http.get("/umbraco/backoffice/FormEditorApi/PropertyEditor/GetRowIcons"), "Could not retrieve row icons"
        );
      },
      getData: function (documentId, page, sortField, sortDescending, searchQuery) {
        return umbRequestHelper.resourcePromise(
            $http.get("/umbraco/backoffice/FormEditorApi/PropertyEditor/GetData/" + documentId, { params: { page: page, sortField: sortField, sortDescending: sortDescending, searchQuery: searchQuery } }), "Could not retrieve data"
        );
      },
      getFieldValueFrequencyStatistics: function (documentId) {
        return umbRequestHelper.resourcePromise(
            $http.get("/umbraco/backoffice/FormEditorApi/PropertyEditor/GetFieldValueFrequencyStatistics/" + documentId), "Could not retrieve field value frequency statistics"
        );
      },
      deleteData: function (documentId, ids) {
        // posting all IDs for deletion here in one bulk operation .. not quite the REST way but more efficient this way.
        return umbRequestHelper.resourcePromise(
            $http.post("/umbraco/backoffice/FormEditorApi/PropertyEditor/RemoveData/" + documentId, ids), "Could not delete data"
        );
      },
      setApprovalState: function (documentId, approvalState, rowId) {
        return umbRequestHelper.resourcePromise(
            $http.put("/umbraco/backoffice/FormEditorApi/PropertyEditor/SetApprovalState/" + documentId, { rowId: rowId, approvalState: approvalState }), "Could not set approval state"
        );
      },
      getMediaUrl: function (mediaId) {
        return umbRequestHelper.resourcePromise(
            $http.get("/umbraco/backoffice/FormEditorApi/PropertyEditor/GetMediaUrl/" + mediaId), "Could not retrieve media URL"
        );
      },
      // for future support for views and icons and stuff outside the default location
      pathToFieldFile: function (file) {
        return "/App_Plugins/FormEditor/editor/fields/" + file;
      },
      // for future support for views and icons and stuff outside the default location
      pathToRowFile: function (file) {
        return "/App_Plugins/FormEditor/editor/rows/" + file;
      },
      // for future support for views and icons and stuff outside the default location
      pathToConditionFile: function (file) {
        return "/App_Plugins/FormEditor/editor/conditions/" + file;
      },
      // this indicates if the google charts loader has been executed or not
      googleChartsLoaded: false
    }
  }
]);

angular.module("umbraco.services").factory("formEditorLocalizationService", ["$http", "$q", "userService",
  function ($http, $q, userService) {
    var service = {
      resourceFileLoaded: false,
      dictionary: {},
      localize: function (key, defaultValue) {
        var deferred = $q.defer();

        if (service.resourceFileLoaded) {
          var value = service._lookup(key, defaultValue);
          deferred.resolve(value);
        }
        else {
          service.initLocalizedResources().then(function (dictionary) {
            var value = service._lookup(key, defaultValue);
            deferred.resolve(value);
          });
        }

        return deferred.promise;
      },
      _lookup: function (key, defaultValue) {
        var value = service.dictionary[key];
        if (value == null) {
          value = defaultValue;
        }
        return value;
      },
      initLocalizedResources: function () {
        var deferred = $q.defer();
        userService.getCurrentUser().then(function (user) {
          $http.get("/App_Plugins/FormEditor/js/langs/" + user.locale + ".js", { cache: true })
              .then(function (response) {
                service.resourceFileLoaded = true;
                service.dictionary = response.data;

                return deferred.resolve(service.dictionary);
              }, function (err) {
                return deferred.reject("Lang file missing");
              });
        });
        return deferred.promise;
      }
    }

    return service;
  }
]);

//# sourceMappingURL=form.js.map