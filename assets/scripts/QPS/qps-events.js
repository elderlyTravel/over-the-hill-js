'use strict';

const qpsApi = require('./qps-api');
const qpsUi = require('./qps-ui');
const getFormFields = require('../../../lib/get-form-fields');


const flightHandler = () => {
  $('#flight-submit').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log('Flight submitted');
    qpsApi.getFlights(qpsUi.success, qpsUi.failure, data);
  });
};


  module.exports = {
    flightHandler
  };
