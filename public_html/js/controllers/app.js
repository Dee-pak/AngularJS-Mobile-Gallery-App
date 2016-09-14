var phoneApp = angular.module('phoneApp', [
    'ngRoute',
    'phoneControllers'
]);

phoneApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/phones', {
                    templateUrl: 'js/partials/phone-list.html',
                    controller: 'phoneListCtrl'
                }).
                when('/phones/:phoneId', {
                    templateUrl: 'js/partials/phone-detail.html',
                    controller: 'phoneDetailCtrl'
                }).
                otherwise({
                    redirectTo: '/phones'
                });
}]);

