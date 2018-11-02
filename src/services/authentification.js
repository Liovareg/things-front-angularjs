/* @ngInject */
angular.module('things')
    .service('AuthenticationService', function ($http, $state, $window) {
        this.checkLog = function (user) {
            return $http.post('https://rechi.herokuapp.com/auth', user)
                .then(response => $window.sessionStorage.token = response.data.token)
        }
    });




