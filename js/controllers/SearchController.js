searchApp.controller('SearchController', function($scope,$localStorage, searchService){
	$scope.searchStr = '';
	$scope.orderVal = '';
	$scope.loderFlag =false;
	//console.log($scope.searchStr);
	$scope.searchedList = function(){
		if($scope.searchStr!=''){
			$scope.loderFlag = true;
			//console.log($scope.searchStr);
			//console.log("hello")
			var queryStr = '';
			if($scope.orderVal==''){
				queryStr += $scope.searchStr;
			}
			else{
				queryStr += $scope.searchStr+'&sort=stars&order='+$scope.orderVal;
			}
			var repuri ='https://api.github.com/search/repositories?q='+queryStr+'&per_page=200';
			//console.log(repuri);
			searchService.getData(repuri).success(function(data){
				$scope.loderFlag =false;
				$localStorage.storedData = data;
				//console.log($localStorage.storedData);
				$scope.totalCount = $localStorage.storedData.total_count;
				$scope.searchItems = $localStorage.storedData.items;
			});
		}	
	}

	$scope.initPage = function(){
		//console.log($localStorage.storedData.total_count);
		$scope.totalCount = $localStorage.storedData.total_count;
		$scope.searchItems = $localStorage.storedData.items;
		//$scope.searchedList();
	}


});