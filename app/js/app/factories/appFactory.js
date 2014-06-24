"use strict";

module.exports = function(app) {
    app.factory("donorFactory", function($http) {
        var urlBase = "/api/donors";
        var donorFactory = {};

        donorFactory.getDonors = function() {
            return $http.get(urlBase);
        };
        return donorFactory;
    });
};