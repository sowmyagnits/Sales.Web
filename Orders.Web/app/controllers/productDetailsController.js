'use strict';
app.controller('productDetailsController', ['$scope','$routeParams', 'productsService', function ($scope,$routeParams, productsService) {

    var productId = ($routeParams.productId) ? parseInt($routeParams.productId) : 0;
    $scope.product = {};
    $scope.productDetails = [];

    init();

    function init() {
        if (productId > 0) {
            productsService.getProductDetails(productId)
            .then(function (results) {
                $scope.productDetails = results.data;
            }, function (error) {
               // $window.alert("Sorry, an error occurred: " + error.message);
            });
        }
    }

   

}]);