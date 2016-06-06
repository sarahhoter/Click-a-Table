function LoginController($scope, $http) {
    $scope.login = function () {
        if ($scope.myForm.$invalid)
            return;
        $http.post('/auth/login', $scope.user)
            .success(function (response) {
                $scope.result = response;
                console.log(response);
                if (response.isLogged == true) {
                    window.location.reload();
                    window.location.replace('#/index');
                }
                else
                    $scope.result.class = "errMessage";
                

            })
            .error(function (error) {
                console.log('Error: ' + error);

            });
    }
    
}