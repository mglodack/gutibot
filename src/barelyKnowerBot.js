(function() {
  "use strict";

  var splitWord = require("./src/stringUtils").splitWord;

  function getMatches(str) {
    var pattern = /(\w{2,}er)[^\w]+|(\w{2,}er)$/gi;

    return str.match(pattern) || [];
  }

  function cleanMatches(matches) {
    var pattern = /[^\w]+$/;

    return matches.map(function(str) {
      return str.replace(pattern, "");
    });
  }

  function splitByEr(word) {
    return splitWord(word, "er");
  }

  function formatSplitWordParts(parts) {
    function capitalizeFirst(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return capitalizeFirst(parts[0]) + " '" + parts[1] + "?!";
  }

  function linkify(username) {
    if (username.indexOf(".") !== -1) {
      return "@" + username;
    } else {
      return "<@" + username + "|" + username + ">";
    }
  }

  function bot(req, res) {
    var text = req.body.text;
    var username = req.body.user_name;
    var matches = cleanMatches(getMatches(text));

    if (username === "slackbot" || matches.length === 0) {
      return res.status(200).end();
    }

    var responseMessage = matches
      .map(splitByEr)
      .map(formatSplitWordParts)
      .join(" ");

    var payload = {
      text: linkify(username) + ": " + responseMessage + " I barely know 'er!",
    };

    return res.status(200).json(payload);
  }

  module.exports = {
    getMatches: getMatches,
    bot: bot,
  };
})();
