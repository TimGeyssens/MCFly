angular.module("umbraco.resources")
	.factory("uioMaticExportResource", function ($http, umbRequestHelper) {
	    return {
	        getExport: function (typeAlias) {
	            return umbRequestHelper.resourcePromise(
                    $http.get(Umbraco.Sys.ServerVariables.uioMaticAddons.ecBaseUrl + "GetExport?typeAlias="+typeAlias),
                    'Failed to generate export'
                );
	        }
	    }
	});