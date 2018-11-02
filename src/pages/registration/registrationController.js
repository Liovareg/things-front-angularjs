/* @ngInject */
angular.module('things')
    .controller('RegController', function ($http, $state, SETTINGS) {
        var $ctrl = this;

        $ctrl.newUser = {
            email: "",
            password: "",
            name: ""
        };

        $ctrl.saveNewUser = function (newUser) {
            $http.post(`${SETTINGS.API.URL}/users`, $ctrl.newUser)
                .then(() => $state.go('list'))
                .catch(response => { console.log('Error while shignup', response) });
        }
    });