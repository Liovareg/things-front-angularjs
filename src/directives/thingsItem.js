angular.module('things')
    .component('thingsItem', {
        templateUrl: './things-item.html',
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
