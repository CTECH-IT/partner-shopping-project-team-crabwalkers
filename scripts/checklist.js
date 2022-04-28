(function (window) {
    'use strict';
    let App = window.App || {};
    let $ = window.jQuery;
    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$element = $(selector);
        if (this.$element.length == 0) {
            throw new Error('Could not find the element with selector: ' + selector);
        }
    }

    // The method that adds a new row to the checklist
    CheckList.prototype.addRow = function (volleyballOrder) {

        // Remove any existing rows that match the email Address
        this.removeRow(volleyballOrder, emailAddress);
        // Create a new instance of row, using volleyball order info
        var rowElement = new Row(volleyballOrder);
        // Add the new row instance's $element property to the checklist
        this.$element.append(rowElement.$element);
    };

    // remove a row identified by an email address
    CheckList.prototype.removeRow = function (email) {
        this.$element
        .find('[value="' + email + '"]')
        .remove();
    };

    // each row is an outstanding order
    function Row(volleyballOrder) {
        let $div = $('<div><div>', {
            'data-volleyball-order': 'checkbox',
            'class': 'checkbox'
        });
        let $label = $('<label><label>');

        let $checkbox = $('<input><input>', {

        // Create a new instance of a row, using the coffee order info
        var rowElement = new Row(volleyballOrder);
        // Add the new row instance's $element prototype to the checklist
        this.$element.append(rowElement.$element);
    });

    // Each row is one Outstanding Order
    function Row(volleyballOrder) {
        let $div = $('<div></div>', {
            'data-volleyball-order': 'checkbox',
            'class': 'checkbox'
        });
        let $label = $('<label></label>');

        let $checkbox = $('<input></input>', {

            type: 'checkbox',
            value: volleyballOrder.emailAddress
        });

        let description = volleyballOrder.size + ' ';
        if (volleyballOrder.flavor) {
            description += volleyballOrder.flavor + ' ';
        }
        description += volleyballOrder.item + ' ';
        description += '(' + volleyballOrder.emailAddress + ')';
        description += '[' + volleyballOrder.strength + 'x]';

        $label.append($checkbox);
        $label.append(description);
        $label.append($label);

        this.$element = $div;
        }

        // Add the Checklist to the namespace
        App.CheckList = CheckList;
        window.App = App;
 })(window);