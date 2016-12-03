'use strict';

var App = angular.module('myApp',['ngRoute']);

App.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/items/webservice', {
			templateUrl: 'items/webservice',
			controller : "WebserviceController as webserviceCtrl"
		})
		.when('/items/webservice2', {
			templateUrl: 'items/webservice2',
			controller : "Webservice2Controller as webserviceCtrl"
		})
		.when('/test', {
			templateUrl: 'items/test',
			//controller : "WebserviceController as webserviceCtrl"
		})
						
		.otherwise({redirectTo:'/items/webservice'});		
}]);

