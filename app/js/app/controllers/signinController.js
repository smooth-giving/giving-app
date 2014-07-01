/*jslint node: true */
"use strict";

module.exports = function(app) {
    app.controller("SigninController", function($scope, $http, $base64, $cookies, $location, $log) {
        $scope.signIn = function() {
            $http.defaults.headers.common["Authentication"] = "Basic " + $base64.encode($scope.admin.email + ":" + $scope.admin.password);
            $http({
                method: "GET",
                url: "/api/admins",
            })
            .success(function(data) {
                $cookies.jwt = data.jwt;
                $location.path("/admin");
            })
            .error(function(data) {
                console.log(data);
            });
        }
    }); // end app.controller
}; // end module.export