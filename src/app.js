"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const barelyKnowerBot = require("./barelyKnowerBot").bot;
const sophieBot = require("./sophieBot").bot;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/doesheknower", barelyKnowerBot);

app.post("/sophie", sophieBot);

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, () => console.log("Listening on port " + port));
