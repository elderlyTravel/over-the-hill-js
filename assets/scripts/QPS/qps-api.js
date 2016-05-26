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
        'adultCount': 1,
        'seniorCount' : 1,
        'childCount' : 1
      },
      'slice': [
        {
          'origin': data.origin,
          'destination': 'LAX',
          'date': '2016-06-06'
        },
        {
          'origin': 'LAX',
          'destination': 'BOS',
          'date': '2016-06-06'
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
