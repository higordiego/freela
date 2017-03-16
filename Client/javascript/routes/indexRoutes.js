(function(){
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider' , function($stateProvider, $urlRouterProvider) {
        $stateProvider    
        .state("login", {
            url: '/',
            templateUrl : "../paginas/login/index.html",
            controller: 'UserCtrl',
            authorize: false
        })
        .state("login.formLogin", {
            templateUrl : "../paginas/login/formLogin.html",
            authorize: false
        })
        .state("login.formForgot", {
            url: 'forgot',
            templateUrl : "../paginas/login/formForgot.html",
            authorize: false
        })
        .state("new", {
            url: '/new/:id',
            templateUrl : "../paginas/login/formNewPassword.html",
            controller: 'UserCtrl',
            authorize: false
        })
        $urlRouterProvider
        .otherwise('/');
    }]);
})();




