/* @ngInject */
angular.module('things')
    .controller('ModalChangeItemController', function ($http, copy, SETTINGS, $uibModalInstance) {
        var $ctrl = this;
        $ctrl.item = copy;

        $ctrl.save = function (item) {
            $http.put(`${SETTINGS.API.URL}/items/` + $ctrl.item.id, $ctrl.item)
                .then(response => {
                    $uibModalInstance.close(response);
                })
                .catch(response => { console.log('Error while saving item', response) })
        };

        $ctrl.cancel = () => {
            $uibModalInstance.dismiss('cancel');
        };
    });