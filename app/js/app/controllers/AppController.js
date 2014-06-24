"use strict";

module.exports = function(app) {
    app.controller("SmoothCtrl", function($scope, donorFactory) {
            $scope.status;
            $scope.donors;

            function getDonors() {
                donorFactory.getDonors()
                    .success(function(data) {
                        $scope.donors = data;
                    })
                    .error(function(error) {
                        $scope.status = "Where is your Mongod now?: " + error.message;
                    });
            };
        });
};
