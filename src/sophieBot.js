(() => {
  "use strict";

  function wasSlackBot(username) {
    return username === "slackbot";
  }

  function containsChoice(str) {
    let pattern = /^choice$|^choice[^\w]+|[^\w]+choice[^\w]+|[^\w]choice$/ig;

    return pattern.test(str);
  }

  module.exports = {
    bot: (req, res) => {
      let text = req.body.text;
      let username = req.body.user_name;

      if (wasSlackBot(username)) { return res.status(200).end(); }
      if (!containsChoice(text)) { return res.status(200).end(); }

      let payload = { text: "Actually, it was Sophie's choice!" };

      return res.status(200).json(payload);
    },
    containsChoice: containsChoice,
  };
})();
