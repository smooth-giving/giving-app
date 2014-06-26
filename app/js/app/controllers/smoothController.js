/*jslint node: true */
"use strict";

module.exports = function(app) {
    app.controller("SmoothController", function($scope, $http) {
            $http({
                method: "GET",
                url: "/api/donors"
            })
            .success(function(data, status, headers, config) {
                $scope.donors = data;
            })
            .error(function(data, status, headers, config) {
                console.log(data);
            });
            $scope.predicate = "-lName";
            $scope.showDonorDetails = false;

            $scope.showDetails = function(id) {
                $http.get("/api/donors" + id)
                    .success(function(data, stauts, headers, config) {
                        $scope.donorDetails = data;
                    })
                    .error(function(data, status, headers, config) {
                        console.log(data);
                    });
            };
        });
};
