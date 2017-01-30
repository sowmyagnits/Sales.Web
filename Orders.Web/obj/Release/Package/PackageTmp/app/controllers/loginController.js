'use strict';
app.controller('loginController', ['$scope', '$location', 'authService', 'ngAppSettings', function ($scope, $location, authService, ngAppSettings) {

    $scope.loginData = {
        userName: "",
        password: "",
    };

    $scope.message = "";

    $scope.login = function () {

        authService.login($scope.loginData).then(function (response) {

            $location.path('/orders');

        },
         function (err) {
             $scope.message = err.error_description;
         });
    };

}]);
