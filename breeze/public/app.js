angular.module('breeze', ['ngResource', 'ngMessages', 'ui.router','ngAnimate','mgcrea.ngStrap','ui.bootstrap', 'satellizer'])
    .config(function($stateProvider, $urlRouterProvider, $authProvider) {
      $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller:'MainCtrl'
      })
        .state('events', {
        url:'/events',
       templateUrl: 'views/form.html',
       controller: 'AddCtrl'
     })
        .state('login', {
          url: '/login',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'views/signup.html',
          controller: 'SignupCtrl'
        })
        .state('logout', {
          url: '/logout',
          template: null,
          controller: 'LogoutCtrl'
        })
        .state('detail',{
            url:'/detail',
            templateUrl:'views/detail.html',
            controller:'DetailCtrl'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: 'views/profile.html',
          controller: 'ProfileCtrl',
          resolve: {
            authenticated: function($q, $location, $auth) {
              var deferred = $q.defer();

              if (!$auth.isAuthenticated()) {
                $location.path('/login');
              } else {
                deferred.resolve();
              }

              return deferred.promise;
            }
          }
        });

      $urlRouterProvider.otherwise('/');
      $authProvider.facebook({
     clientId: ''
   });

   $authProvider.google({
     clientId: ''
   });

})
