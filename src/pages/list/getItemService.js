/* @ngInject */
angular.module('things')
    .service('GetItemService', function ($http, SETTINGS) {
        this.getItems = () =>  {
            return $http.get(`${SETTINGS.API.URL}/items`, {});
        }
        this.addItem = (newItem) => {
            return $http.post(`${SETTINGS.API.URL}/items`, newItem)
        }
    });