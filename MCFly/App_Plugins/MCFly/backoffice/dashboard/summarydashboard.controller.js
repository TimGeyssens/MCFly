angular.module("umbraco").controller("MCFly.DashboardController",
    function ($scope, mcFlyResource, uioMaticObjectResource) {

	    // Get summary types
        mcFlyResource.getSummaryDashboardTypes().then(function (resp) {
            $scope.types = resp.data;
	    });

	   

	});