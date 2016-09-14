var phoneControllers = angular.module('phoneControllers', []);

phoneControllers.controller('phoneListCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('js/phones/phones.json').success(function(data) {
            $scope.phones = data;
        });

        $scope.orderProperty = 'age';
    }]); 

phoneControllers.controller('phoneDetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('js/phones/' + $routeParams.phoneId + '.json').success(function(data){
            $scope.phones = data;
            $scope.mainImageUrl = data.images[0];
        });
        $scope.setImage = function(imageUrl){
            $scope.mainImageUrl = imageUrl;
        }
    }]);

phoneApp.controller('phoneListCtrl', function ($scope, $http) {
    $http.get('js/phones/phones.json').success(function (data) {
        $scope.phones = data;
    });
});

