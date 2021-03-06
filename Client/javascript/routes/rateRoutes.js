(function(){
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider' , function($stateProvider, $urlRouterProvider) {
        $stateProvider    
        .state("painel.reportRate", {
            url: '/reportRate',
            templateUrl : "../paginas/painel/report/rate.html",
            controller: 'RateCtrl',
            authorize: true
        })
        .state("painel.dashboard", {
            url: '/dashboard',
            templateUrl : "../paginas/painel/report/dashboard.html",
            controller: 'RateCtrl',
            authorize: true
        })
        .state("painel.investigation", {
            url: '/investigation',
            templateUrl : "../paginas/painel/report/investigation.html",
            controller: 'RateCtrl',
            authorize: true
        })
        .state("painel.myalert", {
            url: '/myalert',
            templateUrl : "../paginas/painel/report/myAlert.html",
            controller: 'RateCtrl',
            authorize: true
        })
        $urlRouterProvider
        .otherwise('/');
    }]);
})();






