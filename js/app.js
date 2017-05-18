//var app = angular.module('mainApp', []);

var app = angular.module('mainApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {templateUrl: 'home.html'})
            .when('/login', {templateUrl: 'login.html'})
            .when('/user/register', {templateUrl: 'user-register-form.html'})
            .when('/user/list', {templateUrl: 'user-register-table.html'})
            .when('/settings', {templateUrl: 'settings.html'})
            .otherwise({redirectTo: '/'});
    }
]);

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);