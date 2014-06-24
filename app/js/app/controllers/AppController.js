angular.module("smoothApp")
    .controller("SmoothCtrl", ["$scope", "donorFactory",
        function($scope, donorFactory) {
            $scope.status;
            $scope.donors;

            getDonors();

            function getDonors() {
                donorFactory.getDonors()
                    .success(function(data) {
                        $scope.donors = data;
                    })
                    .error(function(error) {
                        $scope.status = "Unable to load donor data: " + error.message;
                    });
            };
        }]);