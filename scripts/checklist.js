(function (window) {
    'use strict';
    let App = window.App || {};
    let $ = window.jQuery;
    function CheckList(selector) {
        if (!selector) {
            throw new Error('No Selector provided');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    // when the checkbox is clicked, get the email address from the row
    // and then call the function (func) that is passed in the email as a parameter
    CheckList.prototype.addClickHandler = function (func) {
        this.$element.on('click', 'input', function (event) {
            var email = event.target.value;
            this.removeRow(email);
            func(email);
        }.bind(this));
    };
 
    // The method that adds a new row to the checklist
    CheckList.prototype.addRow = function (volleyballOrder) {
        // create a new instance of a row, using volleyball Order info
        var rowElement = new Row(volleyballOrder);
        // add the new row's instance $element property to the checklist
        this.$element.append(rowElement.$element);
    };

    CheckList.prototype.removeRow = function (email) {
        this.$element
            .find('[value="' + email + '"]')
            .closest('[data-coffee-order="checkbox"]')
            .remove();
    };

    // Each Row is one outstanding Order
    function Row(volleyballOrder) {
        // constructor code will go here
        let $div = $('<div><div>', {
            'data-volleyball-order': 'checkbox',
            'class': 'checkbox'
        });
        let $label = $('<label></label>');

        let $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: volleyballOrder.emailAddress
        });

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }

    // Add the Checklist to namespace
    App.CheckList = CheckList;
    window.App = App;
})(window);