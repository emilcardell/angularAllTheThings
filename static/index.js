var myApp = angular.module('myApp', []);


myApp.controller('CreateProductController', ['$scope', '$http', function($scope, $http) {
	$scope.Product = {};
	$scope.products = [];
	
	$http.get('/products').success(function(data, status, headers, config)  {
		$scope.products = data;
	});


	
	$scope.AddProduct = function(newProduct) {
		

		var aNewProduct = {
			Name: newProduct.Name,
			Price: newProduct.Price
		};	

		$http.post('/product', aNewProduct).success(function(data, status, headers, config)  {
		    $scope.products.push(aNewProduct);
		  });


		
	}
}]); 
