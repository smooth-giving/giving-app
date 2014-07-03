/*jslint node: true */
"use strict";

module.exports = function(app) {
    app.controller("SignupController", function($scope, $http, $base64, $cookies, $location, $log) {
        $scope.admin = {"basic.email" : "", "basic.password" : ""};
        $scope.signUp = function() {
            $http({
                method: "POST",
                url: "/api/admins",
                data: $scope.admin
            })
            .success(function(data, status, headers, config) {
                $location.path("/admin");
            })
            .error(function(data) {
                console.log(data);
            });
        }
    }); // end app.controller
}; // end module.export