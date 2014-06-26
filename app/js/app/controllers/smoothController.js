"use strict";

module.exports = function(app) {
    app.controller("SmoothController", function($scope, $http) {
            $http({
                method: "GET",
                url: "/api/donors"
            })
            .success(function(data, status, headers, config) {
                console.dir(data);
                $scope.donors = data;
            })
            .error(function(data, status, headers, config) {
                console.log(data);
            });
        });
};
