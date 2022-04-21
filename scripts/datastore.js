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

    DataStore.prototype.get = function (key) {
        return this.data[key];
    };

    DataStore.prototype.getAll = function () {
        return this.data;
    };

    DataStore.prototype.remove = function(key) {
        delete this.data[key]
    }

    App.DataStore = DataStore;
    window.App = App;
})(window);