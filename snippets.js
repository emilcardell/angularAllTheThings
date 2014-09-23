var myApp = angular.module('productAdminApp', []);


//------------routing
<div ng-view></div>

myApp.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider.when('/', {
            templateUrl: '/index.html',
            controller: 'MainControllerController'
        }).
        when('/product/:productId',
            {
                templateUrl: '/product.html',
                controller: 'ProductProductController'
            });

    }]);

myApp.controller('ProductController', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.ProductId = $routeParams.productId;
  }]);

//------------routing

//------------directive
<div my-product></div>

myApp.directive('myProduct', function() {
    return {
      template: 'Name: {{product.Name}} Price: {{product.Price}}'
    };
  });

//------------directive


myApp.service('myService', myServiceFunction);
myApp.factory('myFactory', myFactoryFunction);
Service: the function that you write will be new-ed:
Factory: the function that you write will be invoked:

myApp.controller('CreateProductController', ['$scope', '$http', function($scope, $http){
  $http.post('/todo', { Message: "Meep" }).success(function(data, status, headers, config)  {
    alert("POsted");
  });
  
}])


//Kör schema.
1. Visa double binding.
2. Bygga upp controller för att skapa produkter. Visa inbyggd validering
3. Skriva ut
4. Deletea en produkt.
5. Http grejer
6. Facotry/Service
7. Routing
8. NG include på repeater
9. $q


