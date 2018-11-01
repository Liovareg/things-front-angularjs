angular.module('things', [
    'ngRoute',
    'ui.router',
    'ngFileUpload',
    'ui.bootstrap',
    'pascalprecht.translate',
    'angular.filter',
    'angularSpinner'
])

/* @ngInject */
angular.module('things').run(($rootScope) => {
    Promise.setScheduler((cb) => {
        $rootScope.$evalAsync(cb);
    });
})