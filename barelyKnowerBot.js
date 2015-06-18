var getMatches = function(str) {
  var pattern = /(\w{2,}er)[^\w]+|(\w{2,}er)$/gi;

  return str.match(pattern) || [];
};

var cleanMatches = function(matches) {
  var pattern = /[^\w]+$/;

  return matches.map(function(str) {
    return str.replace(pattern, '');
  });
};

var splitWord = function(word) {
  var suffix = 'er';
  var prefix = word.split(suffix)[0];

  return [prefix, suffix];
}

var formatSplitWordParts = function(parts) {
  return capitalizeFirst(parts[0]) + " '" + parts[1] + "?!";
}

var capitalizeFirst = function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var linkify = function(userName) {
  return "<@" + userName + "|" + userName + ">";
}

module.exports = function(req, res, next) {
  var text = req.body.text;
  var userName = req.body.user_name;
  var matches = cleanMatches(getMatches(text));

  var responseMessage = matches.map(function(str) {
    return splitWord(str);
  }).map(function(parts) {
    return formatSplitWordParts(parts);
  }).join(' ');

  if (userName !== 'slackbot' && matches.length != 0) {
    var payload = {
      text: linkify(userName) + ": " + responseMessage + " I barely know 'er!"
    };
    return res.status(200).json(payload);
  } else {
    return res.status(200).end();
  }
};
