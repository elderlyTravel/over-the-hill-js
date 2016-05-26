'use strict';

const appEvents = require('./app/events.js');

// On document ready
$(() => {
  appEvents.addHandlers();
});
