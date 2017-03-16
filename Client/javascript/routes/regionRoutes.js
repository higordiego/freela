(function(){
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider' , function($stateProvider, $urlRouterProvider) {
        $stateProvider    
        .state("painel.regions", {
            url: '/regions',
            templateUrl : "../paginas/painel/regions/index.html",
            controller: 'RegionCtrl',
            authorize: true
        })
        $urlRouterProvider
        .otherwise('/');
    }]);
})();






