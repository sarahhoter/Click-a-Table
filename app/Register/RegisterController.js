function RegisterController($scope, $http) {
    
    $scope.createUser = function () {
        $http.post('/auth/register', $scope.user)
            .success(function (response) {
                if(responslogine.isAdded == true)
                    window.location.replace('#/index');
                //else
                //    errMessage.value 
                    
            })
            .error(function (error) {
                console.log('Error: ' + error);

        });
    }
}