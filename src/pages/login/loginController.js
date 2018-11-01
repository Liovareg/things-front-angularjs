angular.module('things')
    .controller('LoginController', ['$scope', '$http', '$state', 'AuthenticationService', '$window',"$translate",
        function ($scope, $http, $state, AuthenticationService, $window, $translate) {
            var $ctrl = this;
            $ctrl.user = {
                email: "",
                password: ""
            };
            $ctrl.error = AuthenticationService.error;
            $ctrl.submit = function () {
                AuthenticationService.checkLog($ctrl.user)
                    .catch(function (error) {
                        console.log("Failed!", error);
                        $ctrl.error = "Email or password is incorrect";
                    });
            };
        }]);
