(function (window) {
    'use strict';

    let App = window.App || {};

    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }

    Truck.prototype.createOrder = function (order) {
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order);
    }

    Truck.prototype.deliverOrder = function (customerId) {
        console.log('Delivering order for ' + customerId);
        this.db.remove(customerId);
    }

    Truck.prototype.printOrders = function () {

        // first, get all the email Addresses (key)
        let customerIdArray = Object.keys(this.db.getAll());

        console.log()
    }

    App.Truck = Truck;
    window.App = App;

})(window);