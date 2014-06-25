"use strict";

module.exports = function(app) {
    app.controller("ThanksController", function($scope) {
        $scope.message = "Thanks for the cash bro";
    });
};// end module.exports