(function(){
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider' , function($stateProvider, $urlRouterProvider) {
        $stateProvider    
        .state("painel.staff", {
            url: '/staff',
            templateUrl : "../paginas/painel/staff/index.html",
            controller: 'StaffCtrl',
            authorize: true
        })
        $urlRouterProvider
        .otherwise('/');
    }]);
})();