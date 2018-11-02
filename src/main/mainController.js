/* @ngInject */
angular.module('things')
  .controller('MainController', function ($translate) {
    const $ctrl = this;

    $ctrl.changeLanguage = (lang) => {
      $translate.use(lang);
    }

    $ctrl.logOut = () => {
      sessionStorage.clear()
    };
  });