angular.module('things')
    .component('thingsItem', {
        templateUrl: 'pages/list/things-item.html',
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
