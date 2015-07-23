"use strict";

function wasSlackBot(username) {
  return username === "slackbot";
}

function containsChoice(str) {
  const pattern = /^choice$|^choice[^\w]+|[^\w]+choice[^\w]+|[^\w]choice$/ig;

  return pattern.test(str);
}

module.exports = {
  bot: (req, res) => {
    const text = req.body.text;
    const username = req.body.user_name;

    if (wasSlackBot(username)) { return res.status(200).end(); }
    if (!containsChoice(text)) { return res.status(200).end(); }

    const payload = { text: "Actually, it was Sophie's choice!" };

    return res.status(200).json(payload);
  },
  containsChoice: containsChoice,
};
