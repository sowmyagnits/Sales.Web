'use strict';
app.factory('productsService', ['$http', 'ngAppSettings', function ($http, ngAppSettings) {

    var serviceBase = ngAppSettings.apiServiceBaseUri;

    var productsServiceFactory = {};

    var _getProducts = function () {

        return $http.get(serviceBase + 'api/GetAll').then(function (results) {
            return results;
        });
    };

    var _getProductDetails = function (productId) {

        return $http.get(serviceBase + 'api/GetProduct/' + id).then(function (results) {
            return results;
        });
    };

    productsServiceFactory.getProducts = _getProducts;
    productsServiceFactory.getProductDetails = _getProductDetails;

    return productsServiceFactory;

}]);