if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require("express");
const unirest = require("unirest");

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  var apiCall = unirest("GET",
    "https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/"
  );
  apiCall.headers({
    "x-rapidapi-host": "ip-geolocation-ipwhois-io.p.rapidapi.com",
    "x-rapidapi-key": "{insert_your_api_key}"
  });
  apiCall.end(function(result) {
    if (res.error) throw new Error(result.error);
    console.log(result.body);
    res.send(result.body);
  });
});

app.listen(port, () => console.log("Server is running on port " + port));
