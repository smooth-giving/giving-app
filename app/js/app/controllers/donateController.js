/*jslint node: true */
"use strict";

module.exports = function(app) {
    app.controller("DonateController", function($scope, $http, $location, $log) {
            $scope.donor = {
                "fName" : "",
                "lName" : "",
                "address" : "",
                "city" : "",
                "state" : "",
                "zipcode" : "",
                "phone" : "",
                "email" : "",
                "donationAmount" : "",
                "created" : ""
            };
            $scope.saveDonor = function() {
                $http.post("/api/donors", $scope.donor)
                    .success(function(data, status, header, config) {
                        console.log("this should be working son");
                        $location.path("/thanks");
                    })
                    .error(function(data) {
                        $log.warn(data);
                    });
            }; // end saveDonor
            $scope.handleStripe = function(status, response) {
                if(response.err) {
                    console.log(response.err);
                } else {
                    global.token = response.id;
                    console.log("Bilbo's token is: " + global.token);
                    $location.path("/thanks");
                }
            }; // end handleStripe
        });
};