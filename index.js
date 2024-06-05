const express = require("express");
const axios = require("axios");
const schedule = require("node-schedule");

const app = express();
const PORT = 3000;
//const URL = "https://5000-01hzkq91ad81aw7qbwnsgv5z49.cloudspaces.litng.ai";
const URL = "https://google.com";

app.get("/", (req, res) => {
  res.send("Express server is running.");
});

const requestUrl = async () => {
  try {
    const response = await axios.get(URL);
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Schedule the request every 2 minutes
schedule.scheduleJob("*/2 * * * *", requestUrl);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
