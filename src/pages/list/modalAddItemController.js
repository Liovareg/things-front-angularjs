angular.module('rechi')
    .controller('ModalAddItemController', ['$http', 'Upload', '$uibModal', 'GetItemService', '$uibModalInstance', function
($http, Upload, $uibModal, GetItemService, $uibModalInstance) {
        var $ctrl = this;
        $ctrl.newItem = {
            name: " ",
            description: " ",
            imageUrl: "",
        };
        $ctrl.newImage = null;

        GetItemService.getItems()
            .then(function successCallback(list) {
                $ctrl.data = list.data;
            }, function errorCallback(list) {
                console.log('Error during GET /items', list);
            });
        console.log('List Controller', $ctrl);

        $ctrl.saveItem = function () {
            Upload.upload({
                url: 'https://api.cloudinary.com/v1_1/hxfnxj17l/upload',
                data: { file: $ctrl.newImage, upload_preset: 'xi1quxpr' }
            }).then(function successCallback(response) {
                console.log(response);
                $ctrl.newItem.imageUrl = response.data.secure_url;
                $uibModalInstance.close(GetItemService.addItem($ctrl.newItem))
                        $uibModalInstance.close(response.data);
                        console.log(response);
            }, function errorCallback(response) { console.log("ErrorCL", response) })
        };

        $ctrl.uploadTest = function (file) {
            Upload.upload({
                url: 'https://api.cloudinary.com/v1_1/hxfnxj17l/upload',
                data: { file: file, upload_preset: 'xi1quxpr' }
            }).then(function successCallback(response) {
                console.log(response);
                console.log("OK!")
            }, function errorCallback(response) { console.log("Error88", response) })
        }
        $ctrl.cancelAddNewItem = function () {
            $uibModalInstance.dismiss('cancel');
        };
    
    }]);