(function (window) {
    'use strict';

    const FORM_SELECTOR ='[data-volleyball-order="form"]';
    const CHECKLIST_SELECTOR = '[data-volleyball-order="checklist"]';
    const SERVER_URL = 'http://saturn.rochesterschools.org:8080/json';

    // lets make sure we only have one of these
    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let RemoteDataStore = App.RemoteDataStore;
    let FormHandler = App.FormHandler;
    let CheckList = App.CheckList;
    let Validation = App.Validation;

    // the remote database where we store orders
    let remoteDS = new RemoteDataStore(SERVER_URL);

    let myTruck = new Truck('12345', new DataStore());
    window.myTruck = myTruck;

    // get all the data from the remote data store
    remoteDS.getAll(function (orders) {
         // go through the orders with a loop
    // figure out if this order belongs to you, 
    // if it does, create a new order and then call

    Object.entries(orders).forEach((entry) => {
        const [key, value] = entry;
        console.log(`** ${key}: ${value} **`);
        Object.entries(value).forEach((field) => {
          const [k, v] = field;
          console.log(`----- ${k}: ${v}`);
        });
      });
    });


    // find the checklist that is being updated and create a CheckList Object
    let formHandler = new FormHandler(FORM_SELECTOR);

    // when the submit button is called, create the order and add a checkbox
  formHandler.addSubmitHandler(function (data) {
    myTruck.createOrder.call(myTruck, data);
  });

  // add the email validator to the email input field
  formHandler.addInputHandler(Validation.isCompanyEmail);

})(window);