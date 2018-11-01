/* @ngInject */
angular.module('things')
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/login')

        $stateProvider.state({
            name: 'logIn',
            url: '/login',
            templateUrl: 'pages/login/login.html',
            controller: 'LoginController',
            controllerAs: '$ctrl'
        })
        .state({
            name: 'list',
            url: '/list',
            templateUrl: 'pages/list/list.html',
            resolve: {
                list: function (GetItemService) {
                    return GetItemService.getItems();
                },
                startSpin: function (usSpinnerService) {
                    usSpinnerService.spin();
                },
            },

            controller: 'ListController',
            controllerAs: '$ctrl'
        })
        .state({
            name: 'registration',
            url: '/reg',
            templateUrl: 'pages/registration/registration.html',
            controller: 'RegController',
            controllerAs: '$ctrl'
        })
    });