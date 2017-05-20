//var app = angular.module('mainApp', []);

var app = angular.module('mainApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
              templateUrl: 'home.html',
              controller: 'IndexController'
            })
            .when('/login', {
              templateUrl: 'login.html',
              controller: 'LoginController'
            })
            .when('/user/register', {templateUrl: 'user-register.html'})
            .when('/user/list', {templateUrl: 'user-list.html'})
            .when('/phrase/register', {
              templateUrl: 'content-register.html',
              controller: 'PhraseController'
            })
            .when('/phrase/list', {
              templateUrl: 'content-list.html',
              controller: 'PhraseController'
            })
            .when('/word/register', {
              templateUrl: 'content-register.html',
              controller: 'WordController'
            })
            .when('/word/list', {
              templateUrl: 'content-list.html',
              controller: 'WordController'
            })
            .when('/settings', {templateUrl: 'settings.html'})
            .otherwise({redirectTo: '/'});
    }
]);

app.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
  //$locationProvider.html5Mode(true).hashPrefix('!');
}]);