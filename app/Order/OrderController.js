function OrderController($scope, $http)
{
    $scope.courses = {};

    $http.get('/order/viewOrder')
        .success(function(data) {
            $scope.courses = data;
            console.log(data);
        })
        .error(function(err) {
            console.log('Error: ' + err);
        });
}