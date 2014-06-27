/*jslint node: true */
"use strict";

module.exports = function(app) {
    app.controller("DashboardController", function($scope, $http, $location) {
        $scope.donorPage = function() {
            $location.path("/admin");
        }// end $scope.donorPage
        $scope.reportsPage = function() {
            $location.path("/report");
        }
        $scope.logout = function() {
            $location.path("/");
        }
    }); // end app.controller
};