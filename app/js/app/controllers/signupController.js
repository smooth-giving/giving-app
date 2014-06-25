module.exports = function(app) {
    app.controller('SignupController', function($scope, $http, $base64, $cookies, $location, $log) {
        $scope.signUp = function() {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $base64.encode($scope.admin.email + ':' + $scope.admin.password);
            $http({
                method: "GET",
                url: '/api/admins',
                data: {}
            })
            .success(function(data) {
                $cookies.jwt = data.jwt;
                $location.path('/admin');
            })
            .error(function(data) {
                console.log(data);
            });
        }
    });
}