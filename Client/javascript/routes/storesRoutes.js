(function(){
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider' , function($stateProvider, $urlRouterProvider) {
        $stateProvider    
        .state("painel.stores", {
            url: '/stores',
            templateUrl : "../paginas/painel/stores/index.html",
            controller: 'StoresCtrl',
            authorize: true
        })
        $urlRouterProvider
        .otherwise('/');
    }]);
})();