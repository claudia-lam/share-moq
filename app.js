/** Simple demo Express app. */

const express = require("express");
const app = express();

// process JSON body => req.body
app.use(express.json());

// process traditional form data => req.body
app.use(express.urlencoded());

/** Homepage renders simple message. */

app.get("/", function (req, res) {
  return res.send("Hello World!");
});

module.exports = app;
