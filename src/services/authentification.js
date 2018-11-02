/* @ngInject */
angular.module('things')
    .service('AuthenticationService', function ($http, SETTINGS, $window) {
        this.checkLog = function (user) {
            return $http.post(`${SETTINGS.API.URL}/auth/signin`, user)
                .then(response => $window.sessionStorage.token = response.data.token)
        }
    });




