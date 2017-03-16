(function(){
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider' , function($stateProvider, $urlRouterProvider) {
        $stateProvider    
        .state("painel.company", {
            url: '/company',
            templateUrl : "../paginas/painel/company/index.html",
            controller: 'CompanyCtrl',
            authorize: true
        })
        $urlRouterProvider
        .otherwise('/');
    }]);
})();




