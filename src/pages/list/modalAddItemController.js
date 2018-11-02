/* @ngInject */
angular.module('things')
    .controller('ModalAddItemController', function (SETTINGS, Upload, GetItemService, $uibModalInstance) {
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
                url: SETTINGS.CLOUDINARY.URL,
                data: { file: $ctrl.newImage, upload_preset: SETTINGS.CLOUDINARY.UPLOAD_PRESET }
            })
                .then(response => {
                    $ctrl.newItem.imageUrl = response.data.secure_url;
                    return GetItemService.addItem($ctrl.newItem);
                })
                .then(item => $uibModalInstance.close(item.data))
                .catch(response => { console.log('Error while uploading file to Cloudinary', response) })
        };
    });