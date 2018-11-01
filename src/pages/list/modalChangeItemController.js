angular.module('things')
    .controller('ModalChangeItemController', ['$http', 'copy', '$uibModal', '$uibModalInstance', function
($http, copy, $uibModal, $uibModalInstance) {
        var $ctrl = this;
        $ctrl.item = copy;
        console.log($ctrl.item);
        $ctrl.save = function (item) {
            $http.put('https://rechi.herokuapp.com/items/' + $ctrl.item.id, $ctrl.item)
                .then(function successCallback(response) {
                    console.log("Item was udated!", response, $ctrl.item);
                    $uibModalInstance.close(response);
                    console.log(response);
                }, function errorCallback(response) { console.log("Error4", response) })
        };
        $ctrl.cancel = () =>  {
            $uibModalInstance.dismiss('cancel');
        };
    }]);