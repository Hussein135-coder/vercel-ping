const express = require("express");
const axios = require("axios");
//const schedule = require("node-schedule");

const app = express();
const PORT = 3000;
const URL = "https://3000-01hzkq91ad81aw7qbwnsgv5z49.cloudspaces.litng.ai";
const URL2 = "https://3000-01j24d27h0nxf71kx65wdhjp7y.cloudspaces.litng.ai";

app.get("/", (req, res) => {
  res.send("Express server is running.");
});

const requestUrl = async () => {
  try {
    const response = await fetch(URL);
    const result = await response.json();
    console.log("Response:", result);
    const response2 = await fetch(URL2);
    const result2 = await response2.json();
    console.log("Response2:", result2);
  } catch (error) {
    console.error("Error:", error);
  }
};

requestUrl()
// Schedule the request every 2 minutes
setInterval(() => {
  requestUrl();
}, 20000);
//schedule.scheduleJob("*/2 * * * *", requestUrl);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
