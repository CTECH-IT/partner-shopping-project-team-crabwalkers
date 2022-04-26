(function (window) {
    'use strict';

    const FORM_SELECTOR ='[data-volleyball-order="form"]';


    // lets make sure we only have one of these
    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler;

    let myTruck = new Truck('12345', new DataStore());

    window.myTruck = myTruck;

    let formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler();
    console.log(formHandler);

})(window);
