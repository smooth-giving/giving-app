/*jslint node: true */
"use strict";

module.exports = function(app) {
    app.controller("ReportsController", function($scope, $http, $location, $routeParams) {
        $scope.message = "I am a message from the controller";
        console.dir($routeParams.id);
        var id = $routeParams.id;
        //id = id.toLowerCase();
        console.log("id is: " + id);

        $http({
            method: "GET",
            url: "/api/donors/" + id
        })
        .success(function(data, stauts, headers, config) {
                console.dir(data);
                if(status != 200) {
                    console.log("success status: " + status);
                    //$location.path("/login");
                }
                $scope.donorDetails = data;
                var deets = data;
                console.log("the deets are: " + deets);
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
                console.log("Details are: " + $scope.donorDetails);
        })
        .error(function(data, status, headers, config) {
                console.log(data);
        });




    }); // end app.controller
}; // end module.exports