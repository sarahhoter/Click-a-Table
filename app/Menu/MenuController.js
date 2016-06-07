function MenuController($scope,$http)
{
    $http.get('/api/menu/getMenu').success( function(response) {
        $scope.menu = response;
    });
    

    $scope.saveCalls = function(type)
    {
        $http.get('/api/menu/saveCalls/' + type).success(function (response) {
            alert(response.messages);
        });
    }
    $scope.menuClicked = function (itemOnClick) {
        switch (itemOnClick) {
            case "callWaiter":
                $scope.saveCalls("Waiter");
                break;

            case "callBill":
                $scope.saveCalls("Bill");
                break;
            default:
                break;
        }

    }

}