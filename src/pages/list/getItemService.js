angular.module('things')
    .service('GetItemService', function ($http) {
        this.getItems = function () {
            return $http.get('https://rechi.herokuapp.com/items', {});
        }
        this.addItem = function (newItem) {
            return $http.post('https://rechi.herokuapp.com/items', newItem)
        }
    });