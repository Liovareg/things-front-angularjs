/* @ngInject */
angular.module('things')
    .config(($httpProvider, $translateProvider) => {
        /* Auth Interceptor */
        $httpProvider.interceptors.push('authInterceptor');

        /* Angular Translate */
        $translateProvider.registerAvailableLanguageKeys(['En', 'Uk'], {
            'en': 'En',
            'ru': 'Uk',
            '*': 'En'
        });
        $translateProvider.useStaticFilesLoader({
            prefix: '/vocabulary/vocabulary_',
            suffix: '.json'
        });

        $translateProvider.fallbackLanguage('en');
        $translateProvider.determinePreferredLanguage();
        $translateProvider.useSanitizeValueStrategy('escape')
    })