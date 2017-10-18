angular.module("umbraco.resources")
    .factory("mcFlyResource", function ($http) {
        return {
            getSafeAlias: function (value) {
                return $http.get("backoffice/MCFly/MCFlyApi/GetSafeAlias?value="+ value);
            },
            getSummaryDashboardTypes: function () {
                return $http.get("backoffice/MCFly/MCFlyApi/GetSummaryDashboardTypes");
            },
            getFormBuilderData: function () {
                return $http.get("backoffice/MCFly/MCFlyApi/GetFormBuilderData");
            },
            getById: function (id) {
                return $http.get("backoffice/MCFly/MCFlyApi/GetById?id=" + id);
            },
            save: function (form) {
                return $http.post("backoffice/MCFly/MCFlyApi/PostSave", angular.toJson(form));
            },
            deleteById: function (id) {
                return $http.delete("backoffice/MCFly/MCFlyApi/DeleteById?id=" + id);
            }
        };
    });