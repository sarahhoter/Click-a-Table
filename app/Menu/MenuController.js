function MenuController($scope,$http)
{
    $http.get('/api/menu/getMenu').success( function(response) {
        $scope.menu = response;
    });
}