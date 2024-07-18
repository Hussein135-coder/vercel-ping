const express = require("express");
const axios = require("axios");
//const schedule = require("node-schedule");

const app = express();
const PORT = 3000;
//const URL = "https://3000-01hzkq91ad81aw7qbwnsgv5z49.cloudspaces.litng.ai";
const URL = "https://3000-01j2xwnz7cs7ha5c61w2ag9d37.cloudspaces.litng.ai"
const URL2 = "https://3000-01j24d27h0nxf71kx65wdhjp7y.cloudspaces.litng.ai";

app.get("/", (req, res) => {
  res.send("Express server is running.");
});

const requestUrl = async () => {
  try {
    const response = await fetch(URL);
    const result = await response.json();
    console.log("Response:", result);
  } catch (error) {
    console.error("Error: 1111");
  }
};

const requestUrl2 = async () => {
  try {
    const response = await fetch(URL2);
    const result = await response.json();
    console.log("Response:", result);
  } catch (error) {
    console.error("Error: 2222");
  }
};

requestUrl()
requestUrl2()
// Schedule the request every 2 minutes
setInterval(() => {
  console.log("2 Min:");
  requestUrl();
  requestUrl2()
}, 120000);
//schedule.scheduleJob("*/2 * * * *", requestUrl);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
