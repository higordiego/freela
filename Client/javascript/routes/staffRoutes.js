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
        .state("painel.staff.business", {
            url: '/business',
            templateUrl : "../paginas/painel/staff/business.html"
        })
        .state("painel.staff.region", {
            url: '/region',
            templateUrl : "../paginas/painel/staff/region.html"
        })
        .state("painel.staff.store", {
            url: '/store',
            templateUrl : "../paginas/painel/staff/store.html"
        })
        .state("painel.staff.department", {
            url: '/department',
            templateUrl : "../paginas/painel/staff/department.html"
        })
        $urlRouterProvider
        .otherwise('/');
    }]);
})();