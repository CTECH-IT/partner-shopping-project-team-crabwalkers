(function (window) {
    'use strict';
    let App = window.App || {};
    let $ = window.jQuery;
    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    // each row is an outstanding order
    function Row(volleyballOrder) {
            let $div = $('<div><div>', {
                'data-volleyball-order': 'checkbox',
                'class': 'checkbox'
            });
            let $label = $('<label><label>');

            let $checkbox = $('<label><label>', {
                type: 'checkbox',
                value: volleyballOrder.emailAddress
            }
        });


        // Add the Checklist to the namespace
        App.CheckList = CheckList;
        window.App = App;
})(window);