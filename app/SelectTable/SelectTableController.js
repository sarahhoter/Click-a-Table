function SelectTableController($scope, $http) {
    $scope.getNumTable = function () {
        if ($scope.myForm.$invalid)
            return;
        
        $scope.result = {};
        $http.post('/table/takeTable', $scope.table)
            .success(function (response) {
                $scope.result = response;
                if (response.isSaved == true) {
                    window.location.reload();
                    window.location.replace('#/menu');
                }
                else
                    $scope.result.class = "errMessage";


                console.log($scope.result);

            })
            .error(function (error) {
                console.log('Error: ' + error);
                console.log('HTTP: ' + $http);

            });

    }

}
