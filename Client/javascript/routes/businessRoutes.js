(function(){
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider' , function($stateProvider, $urlRouterProvider) {
        $stateProvider    
        .state("painel.business", {
            url: '/business',
            templateUrl : "../paginas/painel/business/index.html",
            controller: 'BusinessCtrl',
            authorize: true
        })
        $urlRouterProvider
        .otherwise('/');
    }]);
})();




