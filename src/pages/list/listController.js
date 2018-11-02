/* @ngInject */
angular.module('things')
  .controller('ListController', function ($http, Upload, $uibModal, GetItemService, usSpinnerService, SETTINGS) {

    const $ctrl = this;
    $ctrl.itemCopy = [];
    $ctrl.toggle = true;

    usSpinnerService.stop();

    GetItemService.getItems().then((list) => {
      $ctrl.data = list.data
    }).catch((list) => {
      console.log('Error during GET /items', list);
    });

    $ctrl.deleteItem = (index) => {
      $http.delete(`${SETTINGS.API.URL}/items/` + $ctrl.data[index].id)
        .then((response) => {
          $ctrl.data.splice(index, 1);
        }).catch((error) => {
          console.log('Error during item delete', error)
        })
    };

    $ctrl.uploadTest = (file) => {
      Upload.upload({
        url: SETTINGS.CLOUDINARY.URL,
        data: { file: file, upload_preset: SETTINGS.CLOUDINARY.UPLOAD_PRESET }
      }).then((response) => {

        /* TODO WHAT HERE? */
        console.log(response);
        console.log('OK!')
      }).catch((response) => { console.log('Error during file upload', response) })
    }

    $ctrl.open = () => {
      var modalInstance = $uibModal.open({
        size: 'lg',
        templateUrl: 'pages/list/addItemModal.html',
        resolve: {
          list: function (GetItemService) {
            return GetItemService.getItems();
          }
        },
        controller: 'ModalAddItemController',
        controllerAs: '$ctrl'
      })

      modalInstance.result.then(item => {
        console.log('Adding item', item)
        $ctrl.data.push(item);
      }).catch((error) => {
        console.log('Modal window failed!', error);
      });
    };

    // Modal window CHANGE ITEM
    $ctrl.openChange = (item, index) => {
      var modalInstance = $uibModal.open({
        size: 'lg',
        templateUrl: 'pages/list/changeItemModal.html',
        controller: 'ModalChangeItemController',
        controllerAs: '$ctrl',
        resolve: {
          copy: () => $ctrl.itemCopy[index] = angular.copy(item)
        }
      });

      modalInstance.result.then((response) => {
        $ctrl.data[index] = response.data;
      })
    };

    // Toggle style of the list
    $ctrl.tog = () => {
      $ctrl.toggle = !$ctrl.toggle;
    }
  })

