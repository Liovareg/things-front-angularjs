angular.module('things')
  .controller('ListController', ['$http', 'Upload', '$uibModal', 'GetItemService', 'usSpinnerService', function
   ($http, Upload, $uibModal, GetItemService, usSpinnerService) {

    var $ctrl = this;

    $ctrl.itemCopy = [];
    usSpinnerService.stop();
    GetItemService.getItems()
      .then(function successCallback(list) {
        $ctrl.data = list.data
      }, function errorCallback(list) {
        console.log('Error during GET /items', list);
      });
    console.log('List Controller', $ctrl);

    $ctrl.deleteItem = function (index) {
      $http.delete('https://rechi.herokuapp.com/items/' + $ctrl.data[index].id)
        .then(function successCallback(response) {
          $ctrl.data.splice(index, 1);
          console.log("Item was deleted!")
        }, function errorCallback(response) { console.log("Error3: Item was not deleted!", response) })
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

    // Modal window ADD ITEM
    $ctrl.open = () =>  {
      var modalInstance = $uibModal.open({
        size: 'lg',
        templateUrl: "pages/list/addItemModal.html",
        resolve: {
          list: function (GetItemService) {
            return GetItemService.getItems();
          }
        },
        controller: 'ModalAddItemController',
        controllerAs: '$ctrl'
      })

      modalInstance.result.then(function (item) {
        console.log('Result 111', item)
        $ctrl.data.push(item);
      }).catch(function (error) {
        console.log("Failed!", error);
      });
    };

    // Modal window CHANGE ITEM
    $ctrl.openChange = function (item, index) {
      var modalInstance = $uibModal.open({
        size: 'lg',
        templateUrl: "pages/list/changeItemModal.html",
        controller: 'ModalChangeItemController',
        controllerAs: '$ctrl',
        resolve: {
          copy: () =>  {
            return $ctrl.itemCopy[index] = angular.copy(item);
          }
        }
      })
      modalInstance.result.then(function (response) {
        console.log('Result 11122', response)
        $ctrl.data[index] = response.data;
      })
    };

    // Toggle style of the list
    $ctrl.toggle = true;
    $ctrl.tog = () =>  {
      $ctrl.toggle = !$ctrl.toggle;
    }

  }])

