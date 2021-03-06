/*  @ngInject */
angular.module('things')
    .factory('authInterceptor', function (SETTINGS, $window) {
        return {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token && config.url !== SETTINGS.CLOUDINARY.URL) {
                    config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
                }
                return config;
            },
            response: function (response) {
                if (response.status === 401) {
                    // handle the case where the user is not authenticated
                }
                return response;
            }
        };
    })