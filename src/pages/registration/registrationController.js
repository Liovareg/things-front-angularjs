angular.module('rechi')
    .controller('RegController', ['$scope', '$http', '$state', '$window',
        function ($scope, $http, $state, $window) {
            var $ctrl = this;
            $ctrl.newUser = {
                email: "",
                password: "",
                name: ""
            };
            $ctrl.saveNewUser = function (newUser) {
                // $http.post('https://rechi.herokuapp.com/users', $ctrl.newUser)
                $http.post('http://localhost:5000/users', $ctrl.newUser)
                    .then(function successCallback(response) {
                        console.log(response, "New User was registrated");
                        $state.go('list');
                    }, function errorCallback(response) { console.log("ErrorNewUser", response) });
            }
        }]);