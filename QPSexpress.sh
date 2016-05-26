curl --include --request POST https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAY28fb1rU3Bk6r4gLSzfhtLXw4dVSQN-g \
  --header "Content-Type: application/json" \
  --data '{
  "request": {
    "passengers": {
      "adultCount": 1
    },
    "slice": [
      {
        "origin": "BOS",
        "destination": "LAX",
        "date": "2016-06-06"
      },
      {
        "origin": "LAX",
        "destination": "BOS",
        "date": "2016-06-06"
      }
    ]
  }
}'
