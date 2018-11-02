angular.module('things')
    .component('thingsItem', {
        templateUrl: 'directives/things-item.html',
        bindings: {
            item: '=',
            itemCopy: '<',
            index: '<',
            onDelete: '&',
            onUpdate: '&',
            onEdit: '&',
            onCancel: '&',
        },
    });
