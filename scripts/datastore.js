(function (window) {
    'use strict';
    // amazing code will be here

    let App = window.App || {};

    function DataStore() {
        this.data = {};
    }

    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
    };

    DataStore.prototype.get = 

    App.DataStore = DataStore;
    window.App = App;
})(window);