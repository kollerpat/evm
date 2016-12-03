'use strict';

App.factory('EigenverbrauchService', ['$http', '$q', function($http, $q){

	return {
		
			getStatistics: function() {
					return $http.get('http://localhost:8080/EM/App/getCurrentStatistics')
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching Eigenverbrauchs Statistik');
										return $q.reject(errResponse);
									}
							);
			},
		    
	};

}]);
