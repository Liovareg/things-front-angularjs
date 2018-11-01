angular.module('things')
  .controller("MainController", ["$scope", "$translate", function ($scope, $translate) {
    var $ctrl = this;
    $ctrl.changeLanguage = function (lang) {
      $translate.use(lang);
    }


    $ctrl.logOut = function () {
      sessionStorage.clear()
    };
  }]);