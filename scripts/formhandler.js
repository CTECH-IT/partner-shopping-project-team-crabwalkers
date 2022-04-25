(function (window) {
    'use strict';

    let App = window.App || {};
    let $ = window.jQuery;

    function FormHandler(selector) {
        // do stuff here
        if (!selector) {
            throw new Error('No selector provided!');
        }
    }

    // find the "selector" in DOM using jQuery and assign it to this.formElement
    this.formElement = $(selector);
    if (this.$formElement.length == 0); {
        throw new error('Could not find element with selector: ' + selector);
    }

    FormHandler.prototype.addSubmitHandler = function () {
        console.log()
    }

    App.FormHandler = FormHandler;
    window.App = App;

})(window); 