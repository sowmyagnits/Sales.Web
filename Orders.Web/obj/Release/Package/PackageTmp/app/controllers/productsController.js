'use strict';
app.controller('productsController', ['$scope', 'productsService', function ($scope,$filter, productsService) {

    $scope.products = [];
    $scope.filteredProducts = [];
    $scope.filteredCount = 0;
    $scope.searchText = null;

    init();

    function init() {

        getProducts();
    }

    function getProducts() {

        productsService.getProducts().then(function (results) {

            $scope.products = results.data;
            filterProducts('');

        }, function (error) {
            //alert(error.data.message);
        });
    };
   
    function filterProducts(filterInput) {
        $scope.filteredProducts = $filter("descriptionBrandReview")($scope.products, filterInput);
        $scope.filteredCount = $scope.filteredProducts.length;
    }

    $scope.searchTextChanged = function () {
        filterProducts($scope.searchText);
    };


}]);