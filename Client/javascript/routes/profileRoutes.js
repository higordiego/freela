(function(){
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider' , function($stateProvider, $urlRouterProvider) {
        $stateProvider    
        .state("painel.profile", {
            url: '/profile',
            templateUrl : "../paginas/painel/profile/index.html",
            controller: 'ProfileCtrl',
            authorize: true
        })
        $urlRouterProvider
        .otherwise('/');
    }]);
})();




