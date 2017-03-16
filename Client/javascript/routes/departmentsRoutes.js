(function(){
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider' , function($stateProvider, $urlRouterProvider) {
        $stateProvider    
        .state("painel.departments", {
            url: '/departments',
            templateUrl : "../paginas/painel/departments/index.html",
            controller: 'DepartmentsCtrl',
            authorize: true
        })
        $urlRouterProvider
        .otherwise('/');
    }]);
})();




