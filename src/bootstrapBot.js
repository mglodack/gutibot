"use strict";

function firstCharEqualsB(element, index, array) {
  return element.charAt(0).toLowerCase() === 'b';
}

function doesAnyWordStartWithB(words)
{
  return words.some(firstCharEqualsB); 
}

function isMatch(str) {
  return doesAnyWordStartWithB(str.split(' '));
}

function shouldRespond(username, match) {
  return username !== 'slackbot' && match;
}

function prependBootstrapper(str) {
  return "bootstrapper_".concat(str);
}

function bot(req, res) {
  const text = req.body.text;
  const username = req.body.user_name;
  const linkify = strUtils.linkifySlackUsername;

  if (!shouldRespond(username, isMatch(text))) {
    return res.status(200).end();
  }
  const strapper = text.split(' ')
    .map(prependBootstrapper)
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
