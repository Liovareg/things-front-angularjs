/* @ngInject */
angular.module('things')
    .controller('LoginController', function ($scope, $http, $state, AuthenticationService, $window, $translate) {
        var $ctrl = this;
        $ctrl.user = {
            email: "",
            password: ""
        };
        $ctrl.error = AuthenticationService.error;
        $ctrl.submit = () => {
            AuthenticationService.checkLog($ctrl.user)
                .then(() => $state.go('list'))
                .catch(function (error) {
                    console.log("Authentication failed", error);
                    $ctrl.error = "Email or password is incorrect";
                });
        };
    });
