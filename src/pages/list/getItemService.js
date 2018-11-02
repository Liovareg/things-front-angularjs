/* @ngInject */
angular.module('things')
    .service('GetItemService', function ($http) {
        this.getItems = () =>  {
            return $http.get('https://rechi.herokuapp.com/items', {});
        }
        this.addItem = (newItem) => {
            return $http.post('https://rechi.herokuapp.com/items', newItem)
        }
    });