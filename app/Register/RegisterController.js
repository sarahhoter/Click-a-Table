function RegisterController($scope, $http) {
    
    $scope.createUser = function () {
        $http.post('/auth/register', $scope.user)
            .success(function (response) {
                console.log(response);
            })
            .error(function (error) {
                console.log('Error: ' + error);
        });
    }
}