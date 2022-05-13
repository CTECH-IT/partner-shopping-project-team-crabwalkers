(function (window) {
    'use strict';
    let App = window.App || {};
    let $ = window.jQuery;

    // the Checklist object constructor
    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find the element with selector: ' + selector);
        }
    }

    // when a checkbox is clicked, get the email address from the row
    // and then call the function (func) that is passed in with the email as a parameter
    CheckList.prototype.addClickHandler = function (func) {
        this.$element.on('click', 'input', function (event) {
            var email = event.target.value;
            this.removeRow(email);
            func(email);
        }.bind(this));
    };

     // The method that adds a new row to the checklist
     CheckList.prototype.addRow = function (volleyballOrder) {
        // Remove any existing rows that match the email Address
        this.removeRow(volleyballOrder.emailAddress);
        // Create a new instance of a row, using the coffee order info
        let rowElement = new Row(volleyballOrder);
        // Add the new row instance's $element prototype to the checklist
        this.$element.append(rowElement.$element);
    };

    CheckList.prototype.removeRow = function (email) {
        this.$element
          .find('[value="' + email + '"]')
          .closest('[data-volleyball-order="checkbox"]')
          .remove();
    };

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
        description += volleyballOrder.coffee + ', ';
        description += ' (' + volleyballOrder.emailAddress + ')';
        description += ' [' + volleyballOrder.strength + 'x]';

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }

    // Add the Checklist to the App namespace
    App.CheckList = CheckList;
    window.App = App;
})(window);