function LoginController($scope, $http) {
    $scope.login = function () {
        $http.post('/auth/login', $scope.user)
            .success(function (response) {
                console.log(response);
                if (response.isLogged == true)
                    window.location.replace('#/index');
                //else
                //    errMessage.value 

            })
            .error(function (error) {
                console.log('Error: ' + error);

            });
    }
    
}