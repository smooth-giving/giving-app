/*jslint node: true */
"use strict";

module.exports = function(app) {
    app.controller("SmoothController", function($scope, $http, $location) {
        // first thing in the success function, check the status, if it is 401 send them else where
            $http({
                method: "GET",
                url: "/api/donors"
            })
            .success(function(data, status, headers, config) {
                console.log("status: " + status);
                if(status != 200) {
                    $location.path("/login");
                }
                $scope.donors = data;
                console.dir(data);
            })
            .error(function(data, status, headers, config) {
                console.log(data);
            });
            $scope.predicate = "-lName";
            $scope.showDonorDetails = false;
            $scope.showLargeDetails = false;
            $scope.showDetails = function(id) {
                console.log("inside the click");
                if(status != 200) {
                    console.log(status);
                    $location.path("/login");
                }
                //id = id.toLowerCase();
                $location.path("/reports/" + id);
            };
            $scope.dashboard = function() {
                $location.path("/dashboard");
            }

        });
};
