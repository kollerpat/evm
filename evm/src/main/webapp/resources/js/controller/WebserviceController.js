'use strict';

App.controller("WebserviceController", function($scope, $http) {
	$scope.products = [ "Item 1", "Item 2", "Item 3" ];
	 
	//Eigentlich würde man hier einen Service aufrufen 
	$scope.jsonObject = {
		"personen" : [ {
			"Name" : "Patrick",
			"Vorname" : "Koller"
		}, {
			"Name" : "Michael",
			"Vorname" : "Koller"
		}, {
			"Name" : "Heinz",
			"Vorname" : "Koller"
		}, {
			"Name" : "Lotti",
			"Vorname" : "Koller"
		} ]
	};
	

	$scope.addItem = function() {
		$scope.errortext = "";
		if (!$scope.addMe) {
			return;
		}
		if ($scope.products.indexOf($scope.addMe) == -1) {
			$scope.products.push($scope.addMe);
		} else {
			$scope.errortext = "The item is already in your shopping list.";
		}
	}
	$scope.removeItem = function(x) {
		$scope.errortext = "";
		$scope.products.splice(x, 1);
	}
	
	
	$scope.getGreetings= function() {
	    $http.get('http://localhost:8081/eigenverbrauchsmanager/greeting').
        then(function(response) {
            $scope.greeting = response.data;
        });
	}
	
	$scope.getStatisticData= function() {
	    $http.get('	http://localhost:8002/EM/App/getCurrentStatistics').
        then(function(response) {
        	$scope.currentStatistics = response.data;
        });
	}
	
});