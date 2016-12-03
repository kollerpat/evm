'use strict';

App.controller("EigenverbrauchsController", function($scope, $http) {
	$scope.products = [ "Item 1", "Item 2", "Item 3" ];

	
	/*
	$scope.getstatisticData= function() {
	    $http.get('http://localhost:8080/EM/App/getCurrentStatistics').
        then(function(response) {
            $scope.statisticData = response.data;
        });
	}
	*/
				
});