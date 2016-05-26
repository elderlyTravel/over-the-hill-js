'use strict';

const getFlights = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAY28fb1rU3Bk6r4gLSzfhtLXw4dVSQN-g',
    headers: {
    Authorization: 'Content-Type: application/json',
    },
    data: {
    'request': {
      'passengers': {
        'adultCount': data.adults,
        'seniorCount' : data.seniors,
        'childCount' : data.children
      },
      'slice': [
        {
          'origin': data.origin,
          'destination': data.destination,
          'date': data.departure_date
        },
        {
          'origin': data.origin,
          'destination': data.destination,
          'date': data.return_date
        }
      ]
    }
  }
  }).done(success)
  .fail(failure);
};


module.exports = {
  getFlights
};
