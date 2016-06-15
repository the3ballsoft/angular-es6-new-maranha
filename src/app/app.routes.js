
/*
 * url routes
 */

angular.module('app') 
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/login");
    $locationProvider.html5Mode(true);

    $stateProvider
    .state('root', {
      templateUrl: 'app/layouts/base.html',
      controller: 'MainCtrl',
      abstract: true 
    })
    .state('home', { //inherit from your main
      url: '/home',
      parent: 'root',
      templateUrl: 'app/home/home.html',
      controller: 'HomeCtrl as homeCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/auth/login.html',
      controller: 'LoginCtrl as loginCtrl'
    });

    //$routeProvider
    //.when("/login", {
      //controller: "LoginCtrl as loginCtrl",
      //templateUrl: "app/auth/login.html"
    //})
    //.when("/", {
      //controller: "HomeCtrl as homeCtrl",
      //templateUrl: "app/home/home.html"
    //})
    //.when("/usuarios", {
      //controller: "UsersCtrl",
      //templateUrl: "app/users/users.html"
    //})
    //.when("/usuarios/:id", {
      //controller: "UserDetailCtrl",
      //templateUrl: "app/users/users-detail.html"
    //})
    //.when("/perfil", {
      //controller: "ProfileCtrl",
      //templateUrl: "app/users/profile.html"
    //})
    //.otherwise({
      //redirectTo: '/'
    //});
    //$locationProvider.html5Mode(true);
  }
]);

