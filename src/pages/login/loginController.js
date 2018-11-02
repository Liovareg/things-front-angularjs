/* @ngInject */
angular.module('things')
    .controller('LoginController', function ($state, AuthenticationService) {
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
