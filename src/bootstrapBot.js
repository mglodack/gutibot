"use strict";

function firstCharEqualsB(element, index, array) {
  return element.charAt(0).toLowerCase() === 'b';
}

function anyWordStartWithB(words)
{
  return words.some(firstCharEqualsB); 
}

function isMatch(str) {
  if(!str) { return []; }
  return anyWordStartWithB(str.split(' '));
}

function shouldRespond(username, match) {
  return username !== 'slackbot' && match;
}

function prependBootstrap(str) {
  return "bootstrap_".concat(str);
}

function bot(req, res) {
  const text = req.body.text;
  const username = req.body.user_name;
  const linkify = strUtils.linkifySlackUsername;

  if (!shouldRespond(username, isMatch(text))) {
    return res.status(200).end();
  }
  const strapper = text.split(' ')
    .map(prependBootstrap)
    .join(" ");

  const payload = {
    text: `${linkify(username)}: ${strapper}`,
  };

  return res.status(200).json(payload);
}

module.exports = {
  isMatch,
  bot,
};
