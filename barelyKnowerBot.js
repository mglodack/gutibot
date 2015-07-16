(function() {
  "use strict";

  var getMatches = function(str) {
    var pattern = /(\w{2,}er)[^\w]+|(\w{2,}er)$/gi;

    return str.match(pattern) || [];
  };

  var cleanMatches = function(matches) {
    var pattern = /[^\w]+$/;

    return matches.map(function(str) {
      return str.replace(pattern, "");
    });
  };

  var splitWord = function(word) {
    var suffix = "er";
    var prefix = word.split(suffix)[0];

    return [prefix, suffix];
  };

  var formatSplitWordParts = function(parts) {
  var capitalizeFirst = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

    return capitalizeFirst(parts[0]) + " '" + parts[1] + "?!";
  };

  var linkify = function(username) {
    if (username.indexOf(".") !== -1) {
      return "@" + username;
    } else {
      return "<@" + username + "|" + username + ">";
    }
  };

  module.exports = function(req, res, next) {
    var text = req.body.text;
    var username = req.body.user_name;
    var matches = cleanMatches(getMatches(text));

    if (username === "slackbot" || matches.length === 0) {
      return res.status(200).end();
    }

    var responseMessage = matches
    .map(splitWord)
    .map(formatSplitWordParts)
    .join(" ");

    var payload = {
      text: linkify(username) + ": " + responseMessage + " I barely know 'er!",
    };

    return res.status(200).json(payload);
  };
})();
