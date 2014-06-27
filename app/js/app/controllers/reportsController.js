/*jslint node: true */
"use strict";

module.exports = function(app) {
    app.controller("ReportsController", function($scope, $http, $location) {
        $scope.message = "I am a message from the controller";
    }); // end app.controller
}; // end module.exports