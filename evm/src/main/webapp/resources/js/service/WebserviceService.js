'use strict';

App.factory('FamilyService', ['$http', '$q', function($http, $q){

	return {
		
			getAllFamilyMembers: function() {
					return $http.get('http://localhost:8080/eigenverbrauchsmanager/item/'+category)
							.then(
									function(response){
										return response.data;
									}, 
									function(errResponse){
										console.error('Error while fetching family members');
										return $q.reject(errResponse);
									}
							);
			},
		    
	};

}]);
