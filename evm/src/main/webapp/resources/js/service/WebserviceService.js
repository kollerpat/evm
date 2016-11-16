'use strict';

App.controller("WebserviceController", function($scope) {
	$scope.products = [ "Item 1", "Item 2", "Item 3" ];

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
});