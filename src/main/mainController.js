/* @ngInject */
angular.module('things')
  .controller("MainController", ["$scope", "$translate", function ($scope, $translate) {
    const $ctrl = this;

    $ctrl.changeLanguage = (lang) => {
      $translate.use(lang);
    }

    $ctrl.logOut = () =>  {
      sessionStorage.clear()
    };
  }]);