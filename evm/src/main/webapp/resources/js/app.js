'use strict';

var App = angular.module('myApp',['ngRoute']);

App.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/items/computers', {
			templateUrl: 'items/statistics',
			controller : "ItemListController as itemListCtrl",
		})
		.when('/items/phones', {
			templateUrl: 'items/phones',
			controller : "ItemListController as itemListCtrl",
			resolve: {
                async: ['ItemService', function(ItemService) {
                    return ItemService.fetchAllItems('phones');
               	}]
            }
		})
		.when('/items/printers', {
			templateUrl: 'items/printers',
			controller : "ItemListController as itemListCtrl",
			resolve: {
                async: ['ItemService', function(ItemService) {
                    return ItemService.fetchAllItems('printers');
               	}]
            }
		})
		.when('/items/computerdetails/:id', {
			templateUrl: 'items/computerdetails',
			controller : "ItemDetailsController as itemDetailsCtrl",
			resolve: {
                async: ['ItemService','$route', function(ItemService , $route) {
                    return ItemService.fetchSpecificItem('computers',$route.current.params.id);
               	}]
            }
		})
		.when('/items/phonedetails/:id', {
			templateUrl: 'items/phonedetails',
			controller : "ItemDetailsController as itemDetailsCtrl",
			resolve: {
                async: ['ItemService','$route', function(ItemService , $route) {
                    return ItemService.fetchSpecificItem('phones',$route.current.params.id);
               	}]
            }
		})
		.when('/items/printerdetails/:id', {
			templateUrl: 'items/printerdetails',
			controller : "ItemDetailsController as itemDetailsCtrl",
			resolve: {
                async: ['ItemService','$route', function(ItemService , $route) {
                    return ItemService.fetchSpecificItem('printers',$route.current.params.id);
               	}]
            }
		})		
		.when('/items/webservice', {
			templateUrl: 'items/webservice',
			controller : "WebserviceController as webserviceCtrl"
		})
		.when('/statistics', {
			templateUrl: 'statistics',
			controller : "WebserviceController as webserviceCtrl"
		})
			
		
		.when('/items/test', {
			templateUrl: 'items/test',
			controller : "WebserviceController as webserviceCtrl"
		})
				
		.otherwise({redirectTo:'/items/computers'});		
}]);

