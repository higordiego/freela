(function(){
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider' , function($stateProvider, $urlRouterProvider) {
        $stateProvider    
        .state("painel.devices", {
            url: '/devices',
            templateUrl : "../paginas/painel/devices/index.html",
            controller: 'DeviceCtrl',
            authorize: true
        })
        $urlRouterProvider
        .otherwise('/');
    }]);
})();






