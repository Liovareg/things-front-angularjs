angular.module('rechi')
    .component('rchItem', {
        templateUrl: 'pages/list/rch-item.html',
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
