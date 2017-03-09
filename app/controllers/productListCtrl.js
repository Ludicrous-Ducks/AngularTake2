'use strict';
app.controller("productListCtrl", function($scope, $location, $http, RootFactory, $timeout){

	RootFactory.getApiRoot()
		.then((rootes)=> {
			$http({
				url:`${rootes.products}`,
				method: 'GET',
				headers: {
					'Authorization': `Token ${RootFactory.getToken()}`
				}
			})
			.then((items)=> {
				console.log("results from rootes.products", items);
				$scope.products = items.data.results;
				$scope.timeout();
			});
		});

});