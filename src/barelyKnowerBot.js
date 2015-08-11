"use strict";

const splitWord = require("./stringUtils").splitWord;

function getMatches(str) {
  const pattern = /(\w{2,}er)[^\w]+|(\w{2,}er)$/gi;

  return str.match(pattern) || [];
}

function cleanMatches(matches) {
  const pattern = /[^\w]+$/;

  return matches.map(str => {
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
  const text = req.body.text;
  const username = req.body.user_name;
  const matches = cleanMatches(getMatches(text));

  if (username === "slackbot" || matches.length === 0) {
    return res.status(200).end();
  }

  const responseMessage = matches
    .map(splitByEr)
    .map(formatSplitWordParts)
    .join(" ");

  const payload = {
    text: linkify(username) + ": " + responseMessage + " I barely know 'er!",
  };

  return res.status(200).json(payload);
}

module.exports = {
  getMatches: getMatches,
  bot: bot,
};
