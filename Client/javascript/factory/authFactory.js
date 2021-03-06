(function(){
  'use strict'  
  app.factory('AuthService', ['$http', '$localStorage', '$q','$window','Config', 
    function($http, $localStorage, $q,$window, Config){

    return {
      getToken : function () {
        return $localStorage.token;
      },
      setToken: function (token) {
        $localStorage.token = token;
      },
      getUser: function(){
        return $localStorage.user;
      },

      setUser: function (user){
        $localStorage.user = user;
      },
      deleteUser: function(){
        delete $localStorage.user;
      },

      signin : function (data) {
       return $http.post(Config.user, data);
      },
      logout : function () {
        delete $localStorage.token;
        delete $localStorage.user;
        $q.when();
      }
    };
  }]);
})();
