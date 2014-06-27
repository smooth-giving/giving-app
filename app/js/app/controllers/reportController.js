/*jslint node: true */
"use strict";

module.exports = function(app) {
    app.controller("ReportController", function($scope, $http, $location, $routeParams) {
        var id = $routeParams.id;
        $http({
            method: "GET",
            url: "/api/donors"
        })
        .success(function(data, status, headers, config) {
                $scope.donorDetails = data;
                var deets = data;
                console.dir(deets);
                $scope.numDonations = function(deets) {
                    console.log("deets inside numDonations: " + deets);
                    $scope.count = 0;
                    $scope.totalCash = 0;
                    $scope.average = 0;

                    for(var i = 0; i < deets.length; i++) {
                        $scope.count = ++$scope.count;
                        $scope.totalCash = deets[i].donationAmount + $scope.totalCash;
                    }
                    $scope.average = ($scope.totalCash/$scope.count);
                }(deets);
        })
        .error(function(data, status, headers, config) {
                console.log(data);
        });
    }); // end app.controller
}; // end module.exports