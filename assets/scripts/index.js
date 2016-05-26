'use strict';

const appEvents = require('./app/events.js');
const authEvents = require('./qps/qps-events.js');

// On document ready
$(() => {
  appEvents.addHandlers();
  authEvents.flightHandler();
});
