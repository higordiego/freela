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
        $urlRouterProvider
        .otherwise('/');
    }]);
})();






