(function() {
  "use strict";

  var express = require("express");
  var bodyParser = require("body-parser");
  var barelyKnowerBot = require("./barelyKnowerBot");
  var sophieBot = require("./sophieBot");

  var app = express();
  var port = process.env.PORT || 3000;

  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/doesheknower", barelyKnowerBot);

  app.post("/sophie", sophieBot);

  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(400).send(err.message);
  });

  app.listen(port, function() {
    console.log("Slack bot listening on port " + port);
  });
})();
