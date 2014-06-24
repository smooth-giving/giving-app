app.module("smoothApp")
    .factory("donorFactory", [$http, function($http) {
        var urlBase = "/api/donors";
        var donorFactory = {};

        donorFactory.getDonors = function() {
            return $http.get(urlBase);
        };

        return donorFactory;

    }]);