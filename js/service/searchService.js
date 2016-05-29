searchApp.factory('searchService', function($http) {

  	return {
  		 getData : function(repuri){
  			return $http.get(repuri)
  			.success(function(data) {
         			//console.log(data);
           		return data;
         	})
         		.error(function(data) {
           		return data;
         	});
         	//console.log(jsonData);	
  		}
  	}	
});