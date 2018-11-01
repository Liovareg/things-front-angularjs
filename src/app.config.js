angular.module('rechi')
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    })

    // Angular-translate
    .config(["$translateProvider", function ($translateProvider) {
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
    }])