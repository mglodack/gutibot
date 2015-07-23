"use strict";

let express = require("express");
let bodyParser = require("body-parser");
let barelyKnowerBot = require("./barelyKnowerBot").bot;
let sophieBot = require("./sophieBot").bot;

let app = express();
let port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/doesheknower", barelyKnowerBot);

app.post("/sophie", sophieBot);

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, () => console.log("Listening on port " + port));
