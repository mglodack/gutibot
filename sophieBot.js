(function() {
  "use strict";

  var wasSlackBot = function(username) {
    return username === "slackbot";
  };

  var containsChoice = function(str) {
    var pattern = /^choice$|^choice[^\w]+|[^\w]+choice[^\w]+|[^\w]choice$/ig;

    return pattern.test(str);
  };

  module.exports = function(req, res, next) {
    var text = req.body.text;
    var username = req.body.user_name;

    if (wasSlackBot(username)) { return res.status(200).end(); }
    if (!containsChoice(text)) { return res.status(200).end(); }

    var payload = { text: "Sophie's choice!" };

    return res.status(200).json(payload);
  };
})();
