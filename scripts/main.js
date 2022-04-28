(function (window) {
    'use strict';

    const FORM_SELECTOR ='[data-volleyball-order="form"]';

    // lets make sure we only have one of these
    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler;
    let CheckList = App.CheckList;

    let myTruck = new Truck('12345', new DataStore());

    window.myTruck = myTruck;

    let formHandler = new FormHandler(FORM_SELECTOR);

    // when the submit button is called, create the order and add a checkbox
    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });

})(window);
