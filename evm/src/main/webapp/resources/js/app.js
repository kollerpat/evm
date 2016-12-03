'use strict';

var App = angular.module('myApp',['ngRoute']);

App.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/items/webservice', {
			templateUrl: 'items/webservice',
			controller : "WebserviceController as webserviceCtrl"
		})		
		.when('/items/statistic', {
			templateUrl: 'items/statistic'
			//controller : "Webservice2Controller as webserviceCtrl"
		})
					
		.otherwise({redirectTo:'/items/webservice'});		
}]);

