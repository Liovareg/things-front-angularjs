angular.module('rechi')
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login')

        var home = {
            name: 'home',
            url: '/',

        };
        var logIn = {
            name: 'logIn',
            url: '/login',
            templateUrl: 'pages/login/login.html',
            controller: 'LoginController',
            controllerAs: '$ctrl'
        }
        var list = {
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
        }
        var registration = {
            name: 'registration',
            url: '/reg',
            templateUrl: 'pages/registration/registration.html',
            controller: 'RegController',
            controllerAs: '$ctrl'
        }
        $stateProvider.state(logIn);
        $stateProvider.state(list);
        $stateProvider.state(registration);
        // $stateProvider.state(home);
    });