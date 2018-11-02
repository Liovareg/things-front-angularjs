/* @ngInject */
angular.module('things')
    .controller('ModalAddItemController', function ($http, Upload, $uibModal, GetItemService, $uibModalInstance) {
        var $ctrl = this;
        $ctrl.newItem = {
            name: " ",
            description: " ",
            imageUrl: "",
        };
        $ctrl.newImage = null;

        GetItemService.getItems()
            .then(list => {
                $ctrl.data = list.data;
            }).catch(list => {
                console.log('Error during GET /items', list);
            });

        $ctrl.saveItem = () => {
            Upload.upload({
                url: 'https://api.cloudinary.com/v1_1/hxfnxj17l/upload',
                data: { file: $ctrl.newImage, upload_preset: 'xi1quxpr' }
            }).then(response => {
                $ctrl.newItem.imageUrl = response.data.secure_url;

                // TODO What?
                $uibModalInstance.close(GetItemService.addItem($ctrl.newItem))
                $uibModalInstance.close(response.data);
            }).catch(response => { console.log('Error while uploading file to Cloudinary', response) })
        };

        $ctrl.uploadTest = function (file) {
            Upload.upload({
                url: 'https://api.cloudinary.com/v1_1/hxfnxj17l/upload',
                data: { file: file, upload_preset: 'xi1quxpr' }
            }).then(response => {
                console.log(response);
                console.log("OK!")
            }).catch(response => { console.log("Error88", response) })
        }
        $ctrl.cancelAddNewItem = () => {
            $uibModalInstance.dismiss('cancel');
        };

    });